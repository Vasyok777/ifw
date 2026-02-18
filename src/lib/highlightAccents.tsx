export function highlightAccents(text: string) {
  const parts = text.split(/(IFW-балів|IFW-бали|IFW)/g);
  return parts.map((part, i) =>
    /^IFW/.test(part) ? (
      <span key={i} className="accent">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
