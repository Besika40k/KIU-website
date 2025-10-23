// app/ClientLayout.tsx
"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <div className="p-4">
        <PageWrapper>{children}</PageWrapper>
      </div>
      <Footer />
    </LanguageProvider>
  );
}
