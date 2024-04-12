import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top-bar";
import Hydration from "@/components/hydration";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurants Booking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hydration>

          <TopBar />
          <div className="max-[425px]:px-4 px-10 lg:px-32 pb-8 pt-[12rem]">
            {children}
          </div>

        </Hydration>
      </body>
    </html>
  );
}
