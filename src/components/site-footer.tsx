import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/content";

export function SiteFooter() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  const address = lang === "ar" ? COMPANY.addressAr : COMPANY.addressEn;
  const hours = lang === "ar" ? COMPANY.hoursAr : COMPANY.hoursEn;

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {t.footer.blurb}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
            {t.footer.links}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted hover:text-fg">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-muted hover:text-fg">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-muted hover:text-fg">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted hover:text-fg">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
            {t.footer.contact}
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-muted">
            <p>{address}</p>
            <p>{hours}</p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-fg">
                {COMPANY.email}
              </a>
            </p>
            <p>
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-fg">
                {COMPANY.phone}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-faint md:px-8">
          © {year} {lang === "ar" ? COMPANY.legalAr : COMPANY.legal}.{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
