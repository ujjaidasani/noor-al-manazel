import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/site-shell";
import { SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Noor Al Manazel" },
      {
        name: "description",
        content:
          "G+1 luxury villas, electrical work, mechanical HVAC, structural work, planning, inspection, and MEP supply in Dubai.",
      },
    ],
  }),
});

function ServicesPage() {
  const { t, lang } = useI18n();

  return (
    <main>
      <PageIntro
        kicker={t.servicesBand.kicker}
        title={t.servicesBand.title}
        lede={t.servicesBand.body}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {SERVICES.map((service, i) => (
          <Link
            key={service.slug}
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="group overflow-hidden rounded-xl border border-border bg-surface transition-[border-color] duration-150 hover:border-stone"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt=""
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 flex items-center justify-between gap-3 font-display text-2xl text-fg">
                {service.title[lang]}
                <ArrowUpRight className="size-4 shrink-0 text-muted" />
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.summary[lang]}
              </p>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
