import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type Variant = "dark" | "white" | "cobalt" | "outline-light" | "outline-dark" | "soft";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
} & (
  | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ children, variant = "dark", size = "md", as = "button", className = "", ...rest }, ref) => {
    const cls = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className].filter(Boolean).join(" ");
    if (as === "a") {
      const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...anchorProps}>
          {children}
        </a>
      );
    }
    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...buttonProps}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export function Chip({ children, dot = false, style }: { children: ReactNode; dot?: boolean; style?: CSSProperties }) {
  return <span className={`chip ${dot ? "chip-dot" : ""}`} style={style}>{children}</span>;
}

export function ArrowRight({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Leaf({ size = 14, color = "#1b7a4a" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.5c1 1.5 1 5.5 1 8.5-.7 7-5 8.5-9.2 9z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}
