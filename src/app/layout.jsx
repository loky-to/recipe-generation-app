import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], // or ["latin-ext", "cyrillic"] if needed
  variable: "--font-inter", // Optional: if you want to use CSS variable
  display: "swap", // Improves performance
});

export const metadata = {
  title: "Chef Loky",
  description: "Recipe Generation App Powered by OpenAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
