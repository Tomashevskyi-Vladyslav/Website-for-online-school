import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home page - Kati Profi-Nachhilfe",
  description:
    "Ihre Nachhilfeschule, in der Lernen einfach und interessant wird. Wir helfen Ihrem Kind, in der Schule erfolgreich zu sein.",
  icons: { icon: "/assets/img/logo.svg" },
  openGraph: {
    title: "Home page - Kati Profi-Nachhilfe",
    siteName: "Kati Profi-Nachhilfe",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-DE">
      <body className="home">{children}</body>
    </html>
  );
}
