import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | 通用航空服务 · 飞行培训 · 行业解决方案`,
    template: `%s | ${company.name}`,
  },
  description:
    "济南领航航空科技有限公司，专注通用航空服务、民用航空器驾驶员培训、民用航空维修人员培训与飞行训练，提供紧急救援、医疗转运、测绘建模、影视航拍、生态监测等低空行业解决方案。",
  keywords: [
    "济南领航航空",
    "通用航空服务",
    "民用航空器驾驶员培训",
    "航空维修人员培训",
    "无人机培训",
    "紧急救援",
    "低空经济",
  ],
  icons: { icon: "/assets/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1b2e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
