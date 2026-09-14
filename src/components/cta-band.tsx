import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/villa-night.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/75" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-2xl font-display text-4xl leading-tight text-fg md:text-5xl">
          {t.cta.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary">
          {t.cta.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">{t.cta.action}</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={`tel:${COMPANY.phoneTel}`}>{t.cta.call}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
