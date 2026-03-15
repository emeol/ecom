"use client";

import { Toaster } from "sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster richColors position="top-right" />
    </>
  );
};
