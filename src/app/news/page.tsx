import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import NewsList, { NewsCatalog } from "@/components/news/NewsList";

export const metadata: Metadata = {
  title: "新闻资讯",
  description: "公司新闻与行业动态，关注通用航空、飞行培训与低空经济的最新进展。",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="新闻资讯"
        subtitle="NEWS"
        desc="关注通用航空、飞行培训与低空经济的动态，分享我们对行业的观察与实践。"
        image="/assets/photos/news1.jpg"
        crumbs={[{ label: "首页", href: "/" }, { label: "新闻资讯" }]}
      />

      <Suspense fallback={<NewsCatalog />}>
        <NewsList />
      </Suspense>
    </>
  );
}
