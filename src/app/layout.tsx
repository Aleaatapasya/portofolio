import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio Alea Atapasya | Front-End Developer & UI/UX Designer",
  description: "Portofolio profesional Alea Atapasya - Front-End Developer, UI/UX Designer, Digital Designer, dan Content Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-[#EAF5FF] selection:bg-[#1265B3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
