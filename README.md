# Marie Kate Events

Brand website for Marie Kate Events. Wedding planning, design, and coordination.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Deployed on Vercel.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| Path | What it is |
|------|-----------|
| `src/app/` | Pages. Each folder is a route. |
| `src/content/` | All the words. Services, portfolio, journal, testimonials. |
| `src/components/` | Shared pieces of the design (header, footer, buttons, image frames). |
| `src/lib/site.ts` | Business details: email, Instagram, location. |
| `src/app/globals.css` | Colors, fonts, and the design tokens everything else uses. |

To change copy, edit the files in `src/content/`. You should not need to touch anything else.

## This is a first draft

The site is fully built and deployable, but several things are stand-ins on purpose:

- **Every photo is a labeled placeholder frame.** Each one describes the shot that belongs there. Real film photography drops in one for one.
- **Testimonials are placeholders** and marked as such on the page. Nothing here came from a real client. Replace them in `src/content/site-copy.ts` before the site goes live.
- **The portfolio holds the four styled shoot concepts**, not real weddings.
- **Journal posts are drafts.** One has a sample structure to show the layout.
- **The inquiry form and the guide signup are not connected to anything yet.** Wiring notes are in the comments at the top of `src/components/InquiryForm.tsx` and `src/components/LeadMagnet.tsx`.
- **Contact details in `src/lib/site.ts` are placeholders** until the founders confirm the business email, Instagram handle, and service area.

There is no AS SEEN IN section and no pricing, both intentional.

## Deploying

Pushing to `main` deploys automatically through Vercel.
