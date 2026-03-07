import { Josefin_Sans, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const kumbh = Kumbh_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Wainaina Thomas — Product Designer",
  description: "Product designer shipping fast, considered interfaces for high-constraint markets. Nairobi-based, open to remote.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${kumbh.variable} antialiased`}
      >
        {/* Architectural DOM Grid */}
        <div className="bg-grid-overlay container grid-12" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-grid-col"></div>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
