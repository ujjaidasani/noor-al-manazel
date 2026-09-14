import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/content";

export function Logo({ className }: { className?: string }) {
  const { lang } = useI18n();
  const title = lang === "ar" ? COMPANY.nameAr : COMPANY.name;

  return (
    <Link
      to="/"
      aria-label={title}
      className={cn("flex items-center no-underline", className)}
    >
      <img
        src="/images/logo.png"
        alt={title}
        width={706}
        height={242}
        className="brand-logo"
      />
    </Link>
  );
}
