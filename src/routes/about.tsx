import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/site-shell";
import { COMPANY } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Noor Al Manazel" },
      {
        name: "description",
        content:
          "Noor Al Manazel Building Contracting LLC. Office 506, Saeed Tower 2, Sheikh Zayed Road, Dubai.",
      },
    ],
  }),
});

function AboutPage() {
  const { t, lang } = useI18n();
  const a = t.aboutPage;

  return (
    <main>
      <PageIntro kicker={a.kicker} title={a.title} lede={a.lede} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/structure.jpg"
            alt=""
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
        </div>
      </section>
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-fg">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3 md:px-8">
        <article>
          <h2 className="font-display text-2xl text-fg">
            {t.vision.visionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t.vision.vision}
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl text-fg">
            {t.vision.missionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t.vision.mission}
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl text-fg">
            {lang === "ar" ? COMPANY.legalAr : COMPANY.legal}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {lang === "ar" ? COMPANY.addressAr : COMPANY.addressEn}
          </p>
          <p className="mt-2 text-sm text-muted">
            {lang === "ar" ? COMPANY.hoursAr : COMPANY.hoursEn}
          </p>
        </article>
      </section>
      <CtaBand />
    </main>
  );
}
