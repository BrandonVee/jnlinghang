import { courses } from "./training";
import { services } from "./services";
import { solutions } from "./solutions";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "飞行培训",
    href: "/training",
    children: courses.map((c) => ({
      label: c.title,
      href: `/training/${c.slug}`,
    })),
  },
  {
    label: "通航服务",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  {
    label: "行业应用",
    href: "/solutions",
    children: solutions
      .slice(0, 5)
      .map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
  },
  {
    label: "新闻资讯",
    href: "/news",
    children: [
      { label: "公司新闻", href: "/news?tag=公司新闻" },
      { label: "行业动态", href: "/news?tag=行业动态" },
    ],
  },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];
