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
      <body className="mx-auto">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
