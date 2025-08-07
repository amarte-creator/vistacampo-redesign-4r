import type React from "react";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout exists only to satisfy the App Router tree when using locale prefix.
  // We keep all rendering in the root app/layout.tsx to avoid duplicating structure.
  return <>{children}</>;
}