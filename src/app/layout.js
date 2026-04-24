import { Kumbh_Sans, Josefin_Sans } from "next/font/google";
import "./globals.css";

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Wainaina Thomas — Product Designer",
  description:
    "Product designer. I figure out what to build, then build it — end-to-end, from the data model to the last pixel. Nairobi, UTC+3.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.variable} ${josefin.variable}`}>
        {children}
      </body>
    </html>
  );
}
