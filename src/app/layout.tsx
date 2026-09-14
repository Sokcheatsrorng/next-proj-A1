import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/NavbarComponent";
import { FooterComponent } from "@/components/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorPage from "./error";
import StyledComponentsRegistry from "@/StyleComponentProvider";
import NetworkStatusProvider from "@/components/network/NetworkStatusProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static metadata
export const metadata: Metadata = {
  title: {
        template: '%s | BlockCommerce',
        default: 'BlockCommerce'
  },
  description: "BlockCommerce is the platform which manage the products with many features providing saling items and clothes.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title: {
        template: '%s | BlockCommerce',
        default: 'BlockCommerce'
     },
     description: 'BlockCommerce is the platform which manage the products with many features providing saling items and clothes.',
     images: ['A1_Thumbnail_project.png']
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StyledComponentsRegistry>
          <NetworkStatusProvider>
            <NavbarComponent />
            {children}
            <FooterComponent />
          </NetworkStatusProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
