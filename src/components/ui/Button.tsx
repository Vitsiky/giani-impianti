import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "marino" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary/90 focus-visible:ring-ring",
  marino:
    "bg-marino text-on-marino hover:bg-marino/90 focus-visible:ring-marino",
  outline:
    "bg-transparent text-marino border border-border hover:bg-muted focus-visible:ring-ring",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-base",
  lg: "min-h-12 px-6 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsAnchor) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const isAnchor = typeof props.href === "string";

  if (isAnchor) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
