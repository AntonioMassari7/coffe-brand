export function CodeTag({ origin, roast }: { origin: string; roast: string }) {
  return (
    <p className="mt-3 font-mono text-[11px] text-text-muted">
      <span>{"<coffee "}</span>
      <span>origin=</span>
      <span className="text-accent">{`"${origin}"`}</span>
      <span> roast=</span>
      <span className="text-accent">{`"${roast}"`}</span>
      <span>{" />"}</span>
    </p>
  );
}
