// src/components/SectionTitle.jsx

export function SectionTitle({ children }) {
  return (
    <h2
      style={{
        textAlign: "center",
        fontSize: 28,
        fontWeight: 500,
        color: "var(--color-navy)",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h2>
  );
}

export function SectionDivider() {
  return (
    <div
      style={{
        width: 48,
        height: 3,
        background: "var(--color-navy)",
        borderRadius: 2,
        margin: "0 auto 2rem",
      }}
    />
  );
}
