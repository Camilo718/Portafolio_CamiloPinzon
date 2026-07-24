import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SOCIALS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "../components/FadeIn";
import { SiGithub, SiX, SiDribbble, SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const SERVICE_ID  = "service_puhce1v";
const TEMPLATE_ID = "template_ophvzwf";
const PUBLIC_KEY  = "L8i7FIFgUbU5Oyz26";
const WA_NUMBER   = "573158094952";

const SOCIAL_ICONS = {
  GitHub:   { Icon: SiGithub,   color: "#181717" },
  Twitter:  { Icon: SiX,        color: "#000000" },
  Dribbble: { Icon: SiDribbble, color: "#EA4C89" },
  Email:    { Icon: MdEmail,    color: "#EA4335" },
  WhatsApp: { Icon: SiWhatsapp, color: "#25D366" },
};

export default function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.warning(t.contact.toastIncomplete.title, { description: t.contact.toastIncomplete.description });
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      toast.success(t.contact.toastSuccess.title, { description: t.contact.toastSuccess.description });
    } catch {
      setStatus("idle");
      toast.error(t.contact.toastError.title, { description: t.contact.toastError.description });
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(t.contact.whatsappMessage);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    toast.success(t.contact.toastWhatsApp.title, { description: t.contact.toastWhatsApp.description });
  };

  const inputStyle = {
    background: "var(--color-bg)", borderColor: "var(--color-tag-bg)", color: "var(--color-navy)",
  };
  const inputClass = "w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors duration-200";

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-10 py-12 md:py-16" style={{ background: "var(--color-bg)" }}>
      <SectionTitle>{t.contact.title}</SectionTitle>
      <SectionDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        <FadeIn direction="left">
          <img src="/images/Messange.png" alt="Contact" className="max-w-[240px] sm:max-w-[300px] md:max-w-[660px] w-full object-contain mx-auto" />
        </FadeIn>

        <FadeIn direction="right" delay={100}>
          {status === "sent" ? (
            <div className="rounded-2xl border p-8 md:p-10 text-center shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg md:text-xl font-medium mb-2" style={{ color: "var(--color-navy)" }}>
                {t.contact.sentTitle}
              </h3>
              <p className="text-sm mb-5" style={{ color: "var(--color-light)" }}>
                {t.contact.sentDescription}
              </p>
              <button onClick={() => setStatus("idle")}
                className="px-5 py-2 rounded-lg text-sm font-medium text-white border-none cursor-pointer"
                style={{ background: "var(--color-navy)" }}>
                {t.contact.sendAnother} ✉️
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border p-5 md:p-7 flex flex-col gap-4 shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>

              <input type="text" name="name" placeholder={t.contact.namePlaceholder}
                value={form.name} onChange={onChange} className={inputClass} style={inputStyle} />
              <input type="email" name="email" placeholder={t.contact.emailPlaceholder}
                value={form.email} onChange={onChange} className={inputClass} style={inputStyle} />
              <textarea name="message" placeholder={t.contact.messagePlaceholder} rows={3}
                value={form.message} onChange={onChange} className={inputClass + " resize-y"} style={inputStyle} />

              <div className="flex flex-col gap-3">
                <button onClick={handleSubmit} disabled={status === "sending"}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white border-none
                             cursor-pointer transition-all duration-200 disabled:opacity-60"
                  style={{ background: "var(--color-navy)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}>
                  {status === "sending" ? `${t.contact.sending} ⏳` : `✉️  ${t.contact.sendEmail}`}
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px" style={{ background: "var(--color-tag-bg)" }} />
                  <span className="text-xs" style={{ color: "var(--color-faint)" }}>{t.contact.or}</span>
                  <div className="flex-1 h-px" style={{ background: "var(--color-tag-bg)" }} />
                </div>

                <button onClick={handleWhatsApp}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white border-none
                             cursor-pointer transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ background: "#25D366" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#1DA851"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#25D366"}>
                  <SiWhatsapp size={17} />
                  {t.contact.sendWhatsApp}
                </button>
              </div>

              <div className="flex justify-center gap-3 pt-1 flex-wrap">
                {SOCIALS.map((s) => {
                  const si = SOCIAL_ICONS[s.label];
                  if (!si) return null;
                  const { Icon, color } = si;
                  return (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center
                                 transition-transform duration-200 hover:scale-110 border"
                      style={{ background: "var(--color-bg-alt)", borderColor: "var(--color-tag-bg)" }}>
                      <Icon size={16} color={color} />
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
