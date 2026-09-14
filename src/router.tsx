import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="flex min-h-[70svh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-stone">404</p>
      <h1 className="mt-4 font-display text-4xl text-fg">
        This page is not in the drawings.
      </h1>
      <Link
        to="/"
        className="mt-8 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
      >
        Back to the site
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}
