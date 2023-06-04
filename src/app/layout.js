import "./globals.css";
import { AiOutlineHome } from "react-icons/ai";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ryan's website",
  description: "welcome to my boba shop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <Navbar />

        <div className="lg:px-48 xl:px-72 sm:px-12 px-4">{children}</div>
      </body>
    </html>
  );
}
