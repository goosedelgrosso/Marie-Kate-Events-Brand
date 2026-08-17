const REQUIRED = ["name", "partner", "email", "message"] as const;

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  partner: "Partner",
  email: "Email",
  phone: "Phone",
  date: "Wedding date",
  venue: "Venue",
  guests: "Guest count",
  budget: "Budget",
  service: "Service",
  source: "Found us via",
  message: "Message",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill hidden fields; humans never see this one. Accept and drop.
  if (body.company) return Response.json({ ok: true });

  const missing = REQUIRED.filter((f) => !body[f]?.trim());
  if (missing.length) {
    return Response.json(
      { error: `Missing required field: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  if (!apiKey || !to) {
    // Fail loudly rather than pretending the inquiry was delivered.
    console.error("Inquiry not sent: RESEND_API_KEY or INQUIRY_TO is unset.");
    return Response.json(
      { error: "The form is not configured to send yet." },
      { status: 500 },
    );
  }

  const rows = Object.keys(FIELD_LABELS)
    .filter((key) => body[key]?.trim())
    .map(
      (key) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b6560;white-space:nowrap;vertical-align:top">${
          FIELD_LABELS[key]
        }</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(
          body[key].trim(),
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const text = Object.keys(FIELD_LABELS)
    .filter((key) => body[key]?.trim())
    .map((key) => `${FIELD_LABELS[key]}: ${body[key].trim()}`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM ?? "onboarding@resend.dev",
      to: to.split(",").map((address) => address.trim()),
      reply_to: body.email.trim(),
      subject: `New inquiry — ${body.name.trim()} & ${body.partner.trim()}${
        body.date ? ` · ${body.date}` : ""
      }`,
      text,
      html: `<div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:15px;color:#2b2724">
<h2 style="font-size:18px;margin:0 0 4px">New wedding inquiry</h2>
<p style="margin:0 0 18px;color:#6b6560;font-size:13px">Reply directly to this email to reach them.</p>
<table style="border-collapse:collapse">${rows}</table>
</div>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the inquiry:", await response.text());
    return Response.json(
      { error: "We could not send your inquiry." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
