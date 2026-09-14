import { COMPANY, waLink } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function WhatsappFab() {
  const { t } = useI18n();
  return (
    <a
      href={waLink(t.wa)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 end-5 z-30 grid size-14 place-items-center rounded-full bg-primary text-primary-fg shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-150 hover:scale-[1.03] active:scale-[0.96] md:bottom-8 md:end-8"
      aria-label={t.contactPage.whatsapp}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34A9.96 9.96 0 0 0 12.04 22c5.52 0 10.02-4.48 10.02-10 0-2.67-1.04-5.18-2.99-7.09zM12.04 20.15a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.03.8.81-2.95-.2-.3a8.13 8.13 0 0 1-1.24-4.34c0-4.5 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.76c-.01 4.5-3.67 8.15-8.16 8.15zm4.47-6.1c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
      </svg>
      <span className="sr-only">{COMPANY.phone}</span>
    </a>
  );
}
