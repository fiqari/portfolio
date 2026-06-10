import "./blog.css";

export const metadata = {
  title: "Health Herald — Health Policy & Equity",
  description: "A publication dedicated to unpacking the complex mechanics of health policy, digital healthcare infrastructure, and devolved health governance systems in Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="blog-theme">
        {children}
      </body>
    </html>
  );
}
