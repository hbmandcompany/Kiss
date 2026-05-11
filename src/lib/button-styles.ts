import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center px-8 py-3.5 text-center font-body text-base font-medium tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-500 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan focus-visible:ring-offset-2 focus-visible:ring-offset-plaster md:py-4",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-tan text-pure shadow-sm hover:bg-tanDark hover:shadow-card-hover",
        secondary:
          "rounded-full border border-stone/50 bg-transparent text-ink hover:border-tan hover:bg-linen/80",
        ghost:
          "rounded-full border-none bg-transparent px-2 text-tan underline-offset-8 hover:text-tanDark hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
