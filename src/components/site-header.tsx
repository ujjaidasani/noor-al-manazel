import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/services", key: "services" as const },
  { to: "/projects", key: "projects" as const },
  { to: "/contact", key: "contact" as const },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, lang]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(to: string) {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || open
          ? "border-b border-border bg-bg/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.75rem] md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm tracking-wide text-muted transition-colors duration-150 hover:text-fg",
                isActive(item.to) && "text-fg",
              )}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div
            className="flex h-9 utems-center rounded-md border border-border p-0.5"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "h-8 min-w-9 rounded-sm px-2 text-xs font-medium tracking-wide transition-colors duration-150",
                lang === "en"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ar")}
              className={cn(
                "h-8 min-w-9 rounded-sm px-2 text-xs font-medium tracking-wide transition-colors duration-150",
                lang === "ar"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              ع
            </button>
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">{t.nav.quote}</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-12 items-center border-b border-border font-display text-2xl text-muted last:border-0",
                isActive(item.to) && "text-fg",
              )}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link to="/contact">{t.nav.quote}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
