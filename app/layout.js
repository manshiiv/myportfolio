import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "my Portfolio",
  description: "My portfolio in next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
