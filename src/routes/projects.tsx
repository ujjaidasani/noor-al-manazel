import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/site-shell";
import { PROJECTS } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Work — Noor Al Manazel" },
      {
        name: "description",
        content:
          "Selected villa, commercial, structural and MEP work by Noor Al Manazel Building Contracting in Dubai.",
      },
    ],
  }),
});

function ProjectsPage() {
  const { t, lang } = useI18n();
  const types = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.type[lang])));
    return unique;
  }, [lang]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    setFilter("all");
  }, [lang]);
  const visible =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type[lang] === filter);

  return (
    <main>
      <PageIntro
        kicker={t.workPage.kicker}
        title={t.workPage.title}
        lede={t.workPage.lede}
      />
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 pb-8 md:px-8">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          {t.workPage.filterAll}
        </FilterChip>
        {types.map((type) => (
          <FilterChip
            key={type}
            active={filter === type}
            onClick={() => setFilter(type)}
          >
            {type}
          </FilterChip>
        ))}
      </div>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:grid-cols-2 md:px-8">
        {visible.map((project) => (
          <article key={project.slug} className="group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt=""
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl text-fg">
                  {project.title[lang]}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {project.place[lang]} · {project.year}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {project.excerpt[lang]}
                </p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-faint">
                {project.type[lang]}
              </span>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-md border px-4 text-sm transition-colors duration-150",
        active
          ? "border-primary bg-primary text-primary-fg"
          : "border-border text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
