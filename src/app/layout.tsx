import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

export const metadata = {
  title: "XYZ University Demo",
  description: "Demo university website using Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=/*max-w-screen-md*/ "mx-auto p-4">
        <LanguageProvider>
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
