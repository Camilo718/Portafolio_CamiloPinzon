import { useEffect, useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";

const GITHUB_USER = "Camilo718";

const LANG_COLORS = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  HTML:       "#e34c26", CSS:        "#563d7c", Vue:    "#41b883",
  React:      "#61dafb", default:    "#8899BB",
};

export default function GitHubSection() {
  const [repos, setRepos]   = useState([]);
  const [stats, setStats]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
        ]);
        const reposData = await reposRes.json();
        const userData  = await userRes.json();

        if (!Array.isArray(reposData)) throw new Error("No repos");

        setRepos(reposData);
        setStats({
          repos:     userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          avatar:    userData.avatar_url,
          bio:       userData.bio,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="github" className="px-10 py-16" style={{ background: "var(--color-bg-alt)" }}>
      <SectionTitle>GitHub</SectionTitle>
      <SectionDivider />

      {loading && (
        <div className="flex justify-center items-center py-16">
          <div className="text-4xl animate-spin">⚙️</div>
        </div>
      )}

      {error && (
        <p className="text-center text-sm" style={{ color: "var(--color-muted)" }}>
          No se pudo cargar GitHub. Verifica tu conexión.
        </p>
      )}

      {!loading && !error && (
        <>
          {/* Perfil */}
          <FadeIn direction="up">
            <div
              className="flex items-center gap-6 rounded-2xl border p-6 mb-8 shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
            >
              <img
                src={stats.avatar}
                alt="GitHub avatar"
                className="w-16 h-16 rounded-full border-2"
                style={{ borderColor: "var(--color-accent)" }}
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-0.5" style={{ color: "var(--color-navy)" }}>
                  @{GITHUB_USER}
                </h3>
                {stats.bio && (
                  <p className="text-sm mb-2" style={{ color: "var(--color-light)" }}>{stats.bio}</p>
                )}
                <div className="flex gap-5">
                  {[
                    { label: "Repositorios", value: stats.repos },
                    { label: "Seguidores",   value: stats.followers },
                    { label: "Siguiendo",    value: stats.following },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold" style={{ color: "var(--color-navy)" }}>{s.value}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white shrink-0
                           transition-colors duration-200"
                style={{ background: "var(--color-navy)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}
              >
                ⌨️ Ver perfil
              </a>
            </div>
          </FadeIn>

          {/* Repos */}
          <div className="grid grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <FadeIn key={repo.id} delay={i * 60} direction="up">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border p-5 h-full
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
                >
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h4 className="text-sm font-semibold leading-snug" style={{ color: "var(--color-navy)" }}>
                      📁 {repo.name}
                    </h4>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-xs" style={{ color: "var(--color-faint)" }}>⭐ {repo.stargazers_count}</span>
                    </div>
                  </div>

                  {repo.description && (
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: "var(--color-light)" }}>
                      {repo.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: LANG_COLORS[repo.language] || LANG_COLORS.default }}
                        />
                        <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                          {repo.language}
                        </span>
                      </div>
                    )}
                    <span className="text-xs" style={{ color: "var(--color-faint)" }}>
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {repos.length === 0 && (
            <p className="text-center text-sm py-8" style={{ color: "var(--color-muted)" }}>
              Aún no hay repositorios públicos. ¡Sube tus proyectos del SENA!
            </p>
          )}
        </>
      )}
    </section>
  );
}
