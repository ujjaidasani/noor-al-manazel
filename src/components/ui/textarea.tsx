import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-border bg-elevated px-3 py-3 text-sm text-fg placeholder:text-faint outline-none transition-[border-color,box-shadow] duration-150 focus-visible:border-stone focus-visible:shadow-[0_0_0_3px_rgba(196,184,161,0.18)]",
        className,
      )}
      {...props}
    />
  );
}
