import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm border text-sm font-medium transition-[color,background-color,border-color,box-shadow,text-decoration-color,text-underline-offset] duration-hover ease-brand focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-oxblood disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-accent-oxblood text-bone hover:bg-accent-crimson/90",
        secondary:
          "border-border-bone bg-transparent text-bone hover:border-accent-oxblood hover:text-bone",
        ghost:
          "font-mono border-transparent bg-transparent text-bone underline decoration-border-emphasis decoration-1 underline-offset-4 hover:decoration-accent-oxblood hover:underline-offset-[6px]",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
