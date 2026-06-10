import { Instrument_Serif, Lora, IBM_Plex_Mono } from "next/font/google";
import "./blog.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-blog",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Health Herald — Health Policy & Equity",
  description: "A publication dedicated to unpacking the complex mechanics of health policy, digital healthcare infrastructure, and devolved health governance systems in Kenya.",
};

export default function BlogLayout({ children }) {
  return (
    <div className={`blog-theme ${instrumentSerif.variable} ${lora.variable} ${ibmPlexMono.variable}`}>
      {children}
    </div>
  );
}
