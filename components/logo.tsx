export function BeanIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="22"
        cy="22"
        rx="18"
        ry="12"
        fill="currentColor"
        transform="rotate(-20 22 22)"
      />
      <path
        d="M10 26 Q22 22 34 18"
        stroke="var(--color-bg)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-display font-black italic tracking-tight ${className ?? ""}`}
    >
      DEV
      <BeanIcon className="mx-1 h-[0.5em] w-[0.5em] translate-y-[-0.08em]" />
      KAFE
    </span>
  );
}
