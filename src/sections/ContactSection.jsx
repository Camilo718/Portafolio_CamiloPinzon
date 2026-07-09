import { useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SOCIALS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" style={{ padding: "4rem 2.5rem", background: "var(--color-bg-alt)" }}>
      <SectionTitle>Contáctame</SectionTitle>
      <SectionDivider />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3rem" }}>
        <FadeIn direction="left">
          <img src="../../public/Images/Messange.png" alt="Contact" style={{ maxWidth: 760, width: "100%", objectFit: "contain" }} />
        </FadeIn>
        <FadeIn direction="right" delay={100}>
          {sent ? (
            <div style={{ background: "var(--color-bg-card)", borderRadius: "var(--radius-card)", border: "var(--border-card)", padding: "2.5rem", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontSize: 20, fontWeight: 500, color: "var(--color-navy)", marginBottom: "0.5rem" }}>¡Mensaje enviado!</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-light)" }}>Gracias por escribir, te responderé pronto.</p>
            </div>
          ) : (
            <div style={{ background: "var(--color-bg-card)", borderRadius: "var(--radius-card)", border: "var(--border-card)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "var(--shadow-card)" }}>
              {[{ name: "name", placeholder: "Tu nombre", type: "text" }, { name: "email", placeholder: "Tu email", type: "email" }].map((f) => (
                <input key={f.name} type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={onChange}
                  style={{ padding: "10px 14px", borderRadius: 8, fontSize: 14, border: "1px solid var(--color-border)", outline: "none", color: "var(--color-text-primary)", background: "var(--color-bg)" }} />
              ))}
              <textarea name="message" placeholder="Tu mensaje..." rows={4} value={form.message} onChange={onChange}
                style={{ padding: "10px 14px", borderRadius: 8, fontSize: 14, border: "1px solid var(--color-border)", outline: "none", resize: "vertical", color: "var(--color-text-primary)", background: "var(--color-bg)" }} />
              <button onClick={() => form.name && form.email && form.message && setSent(true)}
                style={{ background: "var(--color-navy)", color: "#fff", border: "none", padding: "11px 0", borderRadius: "var(--radius-btn)", fontSize: 14, fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}
              >Enviar mensaje ✉️</button>
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} aria-label={s.label} style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--color-bg-alt)", color: "var(--color-navy)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
