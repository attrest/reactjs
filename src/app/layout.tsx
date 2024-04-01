import { Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import ReactQueryProvider from "@/features/react-query/Context";
import { DialogProvider } from "@/components/modals/DialogContext";
import { Metadata } from "next";

import { preset } from "@/lib/presets";
import "@/features/contentStyle.scss";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanumMyeongjo",
});

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: preset.name,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <ReactQueryProvider>
          <DialogProvider>
            <Header />
            {children}
          </DialogProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
