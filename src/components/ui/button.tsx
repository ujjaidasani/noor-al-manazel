import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-fg hover:bg-fg",
        ghost: "border border-border bg-transparent text-fg hover:border-stone hover:text-primary",
        ink: "bg-ink text-paper hover:bg-bg",
        paper: "bg-paper text-ink hover:bg-primary",
        link: "h-auto rounded-none px-0 text-fg underline-offset-4 hover:underline",
      },
      size: {
        md: "h-11 rounded-md px-5 text-sm",
        lg: "h-12 rounded-md px-6 text-sm tracking-wide",
        sm: "h-9 rounded-sm px-3 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
