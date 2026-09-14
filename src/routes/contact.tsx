import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { COMPANY, waLink } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Noor Al Manazel" },
      {
        name: "description",
        content:
          "Office 506, Saeed Tower 2, Sheikh Zayed Road, Dubai. Call +971 52 237 5008 or email noormanazel@noormanazel.com.",
      },
    ],
  }),
});

function ContactPage() {
  const { t, lang } = useI18n();
  const c = t.contactPage;
  const address = lang === "ar" ? COMPANY.addressAr : COMPANY.addressEn;
  const hours = lang === "ar" ? COMPANY.hoursAr : COMPANY.hoursEn;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${COMPANY.lng - 0.006}%2C${COMPANY.lat - 0.004}%2C${COMPANY.lng + 0.006}%2C${COMPANY.lat + 0.004}&layer=mapnik&marker=${COMPANY.lat}%2C${COMPANY.lng}`;

  return (
    <main>
      <PageIntro kicker={c.kicker} title={c.title} lede={c.lede} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="space-y-8">
          <InfoBlock label={c.address} value={address} />
          <InfoBlock label={c.hours} value={hours} />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
              {c.phone}
            </p>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="mt-2 block font-display text-2xl text-fg hover:text-stone"
            >
              {COMPANY.phone}
            </a>
            <a
              href={`tel:${COMPANY.phone2Tel}`}
              className="mt-1 block text-sm text-muted hover:text-fg"
            >
              {COMPANY.phone2}
            </a>
            <a
              href={`tel:${COMPANY.landlineTel}`}
              className="mt-1 block text-sm text-muted hover:text-fg"
            >
              {COMPANY.landline}
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
              {c.email}
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-2 block text-fg hover:text-stone"
            >
              {COMPANY.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={waLink(t.wa)} target="_blank" rel="noreferrer">
                {c.whatsapp}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={COMPANY.maps} target="_blank" rel="noreferrer">
                {c.map}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={COMPANY.gis} target="_blank" rel="noreferrer">
                {c.gis}
              </a>
            </Button>
          </div>
        </div>
        <QuoteForm />
      </section>
      <section className="border-t border-border">
        <iframe
          title={address}
          src={mapSrc}
          className="h-80 w-full border-0 grayscale invert"
          loading="lazy"
        />
      </section>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
        {label}
      </p>
      <p className="mt-2 max-w-sm text-base leading-relaxed text-fg">{value}</p>
    </div>
  );
}
