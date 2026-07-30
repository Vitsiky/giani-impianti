import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21l1.65-4.95A9 9 0 1 1 8.05 19.35z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .5 0 1-.6 1-1.2 0-.4-.2-.7-.6-.9l-1.6-.8c-.3-.2-.7-.1-.9.2l-.4.5a4.5 4.5 0 0 1-2.3-2.3l.5-.4c.3-.2.4-.6.2-.9l-.8-1.6c-.2-.4-.5-.6-.9-.6-.6 0-1.2.5-1.2 1z" />
    </svg>
  );
}
