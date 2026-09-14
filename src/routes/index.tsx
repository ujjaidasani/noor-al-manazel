import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { COMPANY, PROJECTS, SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "Noor Al Manazel — Building Contracting, Dubai",
      },
      {
        name: "description",
        content:
          "G+1 luxury villas, electrical, mechanical and structural works. Noor Al Manazel Building Contracting LLC, Sheikh Zayed Road, Dubai.",
      },
    ],
  }),
});

function Home() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(0);
  const featured = PROJECTS.slice(0, 4);
  const activeService = SERVICES[active] ?? SERVICES[0];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: COMPANY.legal,
            url: "https://www.noormanazel.com",
            email: COMPANY.email,
            telephone: COMPANY.phoneTel,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office 506, Saeed Tower 2, 74 Sheikh Zayed Road",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: COMPANY.lat,
              longitude: COMPANY.lng,
            },
            openingHours: "Mo-Sa 09:00-18:00",
          }),
        }}
      />

      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,12,0.35)_0%,rgba(14,14,12,0.55)_45%,rgba(14,14,12,0.92)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone">
            {t.hero.kicker}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-fg md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary md:text-lg">
            {t.hero.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">{t.hero.primary}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/projects">{t.hero.secondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "px-5 py-8 md:px-8",
                i > 0 && "border-s border-border",
                i === 2 && "max-md:border-t",
                i === 3 && "max-md:border-t",
              )}
            >
              <p className="font-display text-3xl text-fg md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/craft.jpg"
            alt=""
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
            {t.aboutBand.kicker}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-fg md:text-5xl">
            {t.aboutBand.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {t.aboutBand.body}
          </p>
          <Button asChild variant="ghost" className="mt-8">
            <Link to="/about">
              {t.aboutBand.more}
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
                {t.servicesBand.kicker}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-fg md:text-5xl">
                {t.servicesBand.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {t.servicesBand.body}
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/services">{t.servicesBand.all}</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
            <ul className="divide-y divide-border border-y border-border">
              {SERVICES.map((service, i) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 py-4 text-start transition-colors duration-150",
                      i === active ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl md:text-2xl">
                        {service.title[lang]}
                      </span>
                    </span>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-fg"
                      aria-label={service.title[lang]}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
            <Link
              to="/services/$slug"
              params={{ slug: activeService.slug }}
              className="relative hidden min-h-[32rem] overflow-hidden rounded-xl bg-elevated lg:block"
            >
              <img
                key={activeService.image}
                src={activeService.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(14,14,12,0.78)_100%)]" />
              <p className="absolute inset-x-6 bottom-6 text-sm leading-relaxed text-primary">
                {activeService.summary[lang]}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
              {t.workBand.kicker}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-fg md:text-5xl">
              {t.workBand.title}
            </h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/projects">{t.workBand.all}</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <article
              key={project.slug}
              className={cn("group", i === 0 && "sm:col-span-2")}
            >
              <Link to="/projects" className="block overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt=""
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]",
                  )}
                />
              </Link>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-fg">
                    {project.title[lang]}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.place[lang]} · {project.year}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-faint">
                  {project.type[lang]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
            {t.process.kicker}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            {t.process.title}
          </h2>
          <ol className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {t.process.steps.map((step) => (
              <li key={step.n} className="bg-paper p-6 md:p-8">
                <p className="font-display text-sm text-ink-muted">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3 md:px-8 md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
            {t.vision.kicker}
          </p>
          <h2 className="mt-4 font-display text-3xl text-fg">
            {t.vision.visionTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t.vision.vision}
          </p>
        </div>
        <div className="md:pt-10">
          <h2 className="font-display text-3xl text-fg">
            {t.vision.missionTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t.vision.mission}
          </p>
        </div>
        <div className="md:pt-10">
          <h2 className="font-display text-3xl text-fg">
            {t.vision.sustainTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t.vision.sustain}
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
