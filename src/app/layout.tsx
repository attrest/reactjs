import { Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";
import ReactQueryProvider from "@/features/reactQuery/Context";
import { DialogProvider } from "@/widgets/modules/modals/DialogContext";
import { Metadata } from "next";
import { store } from "@/entities/store";
import "@/style/globals.scss";
import { setSubMenu } from "@/entities/store/globalSlice";

const siteName = store.getState().global.name;
export const metadata: Metadata = {
  title: siteName,
};

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <ReactQueryProvider>
          <DialogProvider>
            <Header siteName={siteName} />
            <Container>{children}</Container>
            <Footer />
          </DialogProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
