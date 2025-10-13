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
      <body className=/*max-w-screen-md*/ "mx-auto">
        <LanguageProvider>
          <Header />
          <div className="p-4">
            <PageWrapper>{children}</PageWrapper>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
