import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-faint outline-none transition-[border-color,box-shadow] duration-150 focus-visible:border-stone focus-visible:shadow-[0_0_0_3px_rgba(196,184,161,0.18)]",
        className,
      )}
      {...props}
    />
  );
}
