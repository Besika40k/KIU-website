// app/layout.tsx
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="mx-auto">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
