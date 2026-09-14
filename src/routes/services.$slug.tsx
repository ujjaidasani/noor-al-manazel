import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { serviceBySlug, SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug };
  },
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = serviceBySlug(slug)!;
  const { t, lang } = useI18n();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <header className="relative min-h-[52vh] overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,12,0.35)_0%,rgba(14,14,12,0.88)_100%)]" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
            {t.nav.services}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-fg md:text-6xl">
            {service.title[lang]}
          </h1>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {service.body[lang]}
          </p>
          <ul className="mt-10 space-y-3">
            {service.points[lang].map((point) => (
              <li
                key={point}
                className="border-s-2 border-stone ps-4 text-sm leading-relaxed text-fg"
              >
                {point}
              </li>
            ))}
          </ul>
          <Button asChild variant="ghost" className="mt-10">
            <Link to="/services">{t.servicesBand.all}</Link>
          </Button>
        </div>
        <QuoteForm defaultService={service.title[lang]} />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-3 md:px-8">
          {others.map((item) => (
            <Link
              key={item.slug}
              to="/services/$slug"
              params={{ slug: item.slug }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="mt-4 font-display text-xl text-fg">
                {item.title[lang]}
              </h2>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
