import type { Metadata } from "next";
import "./globals.css";
import Hydration from "@/components/hydration";
import { ThemeProvider } from "@mui/material";
import theme from "@/app/theme";
import TopBar from "@/components/top-bar";

//const inter = Nunito({ subsets: ["latin"] });

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
      <body>
        <Hydration>
          <ThemeProvider theme={theme}>

            <TopBar />
            <div className="max-[425px]:px-4 px-10 lg:px-32 2xl:px-52 pb-8">
              {children}
            </div>
          </ThemeProvider>

        </Hydration>
      </body>
    </html>
  );
}
