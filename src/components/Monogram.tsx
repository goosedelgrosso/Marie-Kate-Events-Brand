/** Secondary mark: MK inside an oval frame. */
export default function Monogram({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="30"
        stroke={color}
        strokeWidth="1"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill={color}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        letterSpacing="1"
      >
        MK
      </text>
    </svg>
  );
}
