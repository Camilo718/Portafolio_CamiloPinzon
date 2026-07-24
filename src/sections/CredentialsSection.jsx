import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { IBM_CREDENTIALS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "../components/FadeIn";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function CredentialsSection() {
  const { t } = useLanguage();

  return (
    <section id="credentials" className="px-4 sm:px-6 md:px-10 py-12 md:py-16" style={{ background: "var(--color-bg-alt)" }}>
      <SectionTitle>{t.credentials.title}</SectionTitle>
      <SectionDivider />

      <FadeIn>
        <p className="text-center text-sm max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed px-2"
          style={{ color: "var(--color-light)" }}>
          {t.credentials.description.split("**").map((part, i) =>
            i % 2 === 1 ? <strong key={i} style={{ color: "var(--color-navy)" }}>{part}</strong> : part
          )}
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {IBM_CREDENTIALS.map((cred, i) => (
          <FadeIn key={cred.name} delay={i * 60} direction="up">
            <a href={cred.url} target="_blank" rel="noreferrer"
              className="group rounded-2xl border p-4 md:p-5 h-full flex flex-col items-center gap-3 shadow-sm
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>

              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-50 md:h-24 flex items-center justify-center">
                <img src={cred.image} alt={cred.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy" />
              </div>

              <div className="text-center w-full">
                <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide mb-1"
                  style={{ color: "var(--color-accent)" }}>
                  {t.credentials.badgeLabel}
                </p>
                <h4 className="text-[11px] sm:text-xs font-semibold leading-snug mb-2 min-h-[28px] sm:min-h-[32px]"
                  style={{ color: "var(--color-navy)" }}>
                  {cred.name}
                </h4>
                <div className="flex items-center justify-center gap-1">
                  <CheckCircle2 size={11} className="text-green-600 shrink-0" />
                  <p className="text-[10px] sm:text-[11px]" style={{ color: "var(--color-faint)" }}>
                    {t.credentials.issuedLabel} {cred.issued}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "var(--color-accent)" }}>
                {t.credentials.verifyLabel} <ExternalLink size={10} />
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
