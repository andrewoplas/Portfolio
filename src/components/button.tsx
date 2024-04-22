import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React from "react";

const buttonVariants = cva(
  "inline-block rounded-button px-6 py-3 text-base font-bold uppercase text-primary transition-all duration-300 hover:-translate-y-1 md:px-6 md:py-4 md:text-lg",
  {
    variants: {
      variant: {
        default: "bg-secondary hover:saturate-150",
        outline:
          "border border-primary bg-transparent hover:bg-primary hover:text-background",
        link: "text-zinc-900 underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface Props
  extends React.LinkHTMLAttributes<LinkProps>,
    VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
}

export const Button = ({
  href,
  target,
  variant,
  className,
  children,
}: Props) => (
  <Link
    href={href}
    target={target}
    className={cn(buttonVariants({ variant, className }))}
  >
    {children}
  </Link>
);
