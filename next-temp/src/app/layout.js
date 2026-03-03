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
  title: "Wainaina Thomas — UX Designer",
  description: "I design by understanding what users need — and what the business needs from them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${kumbh.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
