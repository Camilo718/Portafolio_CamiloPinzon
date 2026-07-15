import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SOCIALS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

// ✅ Importamos los iconos necesarios
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { FiSend, FiLoader } from "react-icons/fi";

const SERVICE_ID  = "service_puhce1v";
const TEMPLATE_ID = "template_ophvzwf";
const PUBLIC_KEY  = "L8i7FIFgUbU5Oyz26";

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--color-bg)",
    borderColor: "var(--color-tag-bg)",
    color: "var(--color-navy)",
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors duration-200";

  return (
    <section id="contact" className="px-10 py-16" style={{ background: "var(--color-bg)" }}>
      <SectionTitle>Contáctame</SectionTitle>
      <SectionDivider />

      <div className="grid grid-cols-2 items-center gap-12">
        <FadeIn direction="left">
          <img
            src="../../public/images/Messange.png"
            alt="Contact"
            className="max-w-[760px] w-full object-cover mx-auto"
          />
        </FadeIn>

        <FadeIn direction="right" delay={100}>
          {status === "sent" ? (
            <div
              className="rounded-2xl border p-10 text-center shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
            >
              {/* ✅ Reemplazo de ✅ por HiCheckCircle */}
              <div className="text-6xl mb-4 flex justify-center text-green-500">
                <HiCheckCircle />
              </div>
              <h3 className="text-xl font-medium mb-2" style={{ color: "var(--color-navy)" }}>
                ¡Mensaje enviado!
              </h3>
              <p className="text-sm mb-5" style={{ color: "var(--color-light)" }}>
                Gracias por escribir, te responderé pronto.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-5 py-2 rounded-lg text-sm font-medium text-white border-none cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: "var(--color-navy)" }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div
              className="rounded-2xl border p-7 flex flex-col gap-4 shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
            >
              <input
                type="text" name="name" placeholder="Tu nombre"
                value={form.name} onChange={onChange}
                className={inputClass} style={inputStyle}
              />
              <input
                type="email" name="email" placeholder="Tu email"
                value={form.email} onChange={onChange}
                className={inputClass} style={inputStyle}
              />
              <textarea
                name="message" placeholder="Tu mensaje..." rows={4}
                value={form.message} onChange={onChange}
                className={inputClass + " resize-y"} style={inputStyle}
              />

              {status === "error" && (
                /* ✅ Reemplazo de ❌ por HiXCircle */
                <p className="text-sm text-red-500 text-center flex items-center justify-center gap-2">
                  <HiXCircle size={18} /> Algo salió mal, intenta de nuevo.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white border-none cursor-pointer
                           transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: "var(--color-navy)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light, #1e3a8a)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}
              >
                {/* ✅ Reemplazo de ⏳ y ✉️ por FiLoader y FiSend */}
                {status === "sending" ? (
                  <>
                    <FiLoader className="animate-spin" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje <FiSend size={18} />
                  </>
                )}
              </button>

              {/* Socials */}
              <div className="flex justify-center gap-3 pt-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center 
                               transition-transform duration-200 hover:scale-110"
                    style={{ background: "var(--color-bg-alt)", color: "var(--color-navy)" }}
                  >
                    {/* ✅ Renderizado correcto del componente de icono social */}
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}