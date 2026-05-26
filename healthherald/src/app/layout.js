import { Playfair_Display, Lora } from "next/font/google";
import "./blog.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Health Herald — Health Policy & Systems Research",
  description: "In-depth health policy analysis and health system design, written by Wainaina Thomas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} blog-theme`}>
        {children}
      </body>
    </html>
  );
}
