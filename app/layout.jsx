import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style>
        {`
  :root {
    --font-dm: ${dm.style.fontFamily};
  }
        `}
      </style>

      <body className={dm.className}>{children}</body>
    </html>
  );
}
