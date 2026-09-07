import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const archivo = localFont({src: "../public/fonts/Archivo-VariableFont_wght.ttf"} );

const inter = localFont({src: "../public/fonts/Inter-VariableFont_wght.ttf"} );

const plexMono = localFont({src: "../public/fonts/IBMPlexMono-Regular.ttf",});

export const metadata: Metadata = {
  title: "NOVA — See what matters. Miss nothing.",
  description:
    "NOVA is an AI surveillance platform for security teams — cameras, detection, and analysis in one system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.className} ${inter.className} ${plexMono.className}`}
    >
      <body className="min-h-full flex flex-col font-body bg-paper text-ink dark:bg-ink dark:text-paper antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}