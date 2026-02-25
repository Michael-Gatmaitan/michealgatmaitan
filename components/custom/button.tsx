"use client";

import * as React from "react";
import { buttonVariants, Button as ShadcnButton } from "../ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) => {
  return <ShadcnButton className={cn('font-mono rounded-none')} {...props} />;
};

export default Button