export function SectionTitle({ children }) {
  return (
    <h2 className="text-center text-3xl font-medium mb-3" style={{ color: "var(--color-navy)" }}>
      {children}
    </h2>
  );
}

export function SectionDivider() {
  return (
    <div className="w-12 h-[3px] rounded mx-auto mb-8" style={{ background: "var(--color-navy)" }} />
  );
}
