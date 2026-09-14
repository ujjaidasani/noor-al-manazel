import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div id="main" className="flex-1">
        {children}
      </div>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-10 pt-28 md:px-8 md:pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">
        {kicker}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-fg md:text-6xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
