import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yan's Space | 朱开颜",
  description: "探索代码与人文的交叉点，寻找未来的所有可能",
  keywords: ["朱开颜", "Kaiyan Zhu", "产品思维", "UI/UX设计", "全栈开发", "Python", "创新"],
  authors: [{ name: "朱开颜", url: "https://github.com/zhukaiyan06" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yans-space.vercel.app",
    title: "Yan's Space | 朱开颜",
    description: "探索代码与人文的交叉点，寻找未来的所有可能",
    siteName: "Yan's Space",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yan's Space | 朱开颜",
    description: "探索代码与人文的交叉点，寻找未来的所有可能",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-background-warm">{children}</body>
    </html>
  );
}