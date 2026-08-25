# 济南领航航空科技有限公司 官网

参照 [wingfly.cn](https://www.wingfly.cn/) 的设计语言，用公司真实工商信息搭建的多页企业站。

技术栈：Next.js 16.3（App Router）+ React 19 + TypeScript + Tailwind CSS v4。

## 快速开始

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 生产构建，静态文件输出到 out/
npm run lint    # ESLint
```

## GitHub CI/CD

推送到 `main` 后，[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会依次执行依赖安装、ESLint、静态构建，并通过 SSH 发布到 production 环境配置的目标服务器。

在 GitHub 仓库的 `Settings > Environments > production > Environment variables` 中配置：

| Variable | 说明 |
| --- | --- |
| `DEPLOY_HOST` | SSH 服务器域名或 IP 地址 |
| `DEPLOY_PORT` | SSH 端口 |
| `DEPLOY_PATH` | 站点发布目录的绝对路径 |
| `HEALTHCHECK_URL` | 部署完成后的 HTTP(S) 健康检查地址 |

在 GitHub 仓库的 `Settings > Environments > production > Environment secrets` 中配置：

| Secret | 说明 |
| --- | --- |
| `DEPLOY_USER` | 可写入站点目录的 SSH 用户 |
| `DEPLOY_SSH_KEY` | 对应用户的 SSH 私钥（完整多行内容） |
| `DEPLOY_KNOWN_HOSTS` | 服务器 SSH 主机公钥记录，可在可信环境执行 `ssh-keyscan -H DEPLOY_HOST` 获取并核对指纹 |

首次部署前，将对应公钥加入服务器用户的 `~/.ssh/authorized_keys`，并确保该用户可以读写 `DEPLOY_PATH` 的父目录。发布时会在目标目录旁保留后缀为 `.previous` 的上一版本目录，用于快速回滚。

## 页面结构

| 路由 | 说明 | 渲染方式 |
| --- | --- | --- |
| `/` | 首页：主视觉轮播、公司简介、解决方案、培训课程、新闻、联系 | 静态 |
| `/training` | 飞行培训列表 | 静态 |
| `/training/[slug]` | 课程详情（`pilot` `uav` `maintenance` `recurrent`） | SSG |
| `/services` | 通航服务列表 | 静态 |
| `/services/[slug]` | 服务详情（`general-aviation` `rescue` `transfer` `transport`） | SSG |
| `/solutions` | 行业应用列表 | 静态 |
| `/solutions/[slug]` | 方案详情（`rescue` `medical` `survey` `film` `eco` `weather` `agriculture`） | SSG |
| `/news` | 新闻列表，支持 `?tag=` 客户端分类筛选 | 静态 |
| `/news/[slug]` | 文章详情，含上一篇 / 下一篇 | SSG |
| `/about` | 公司简介、工商信息、主要人员、经营范围 | 静态 |
| `/contact` | 联系方式、咨询方向、公司信息 | 静态 |

共 22 条路由、28 个预渲染页面。

## 目录组织

```
src/
├── app/                    路由与页面
│   ├── layout.tsx          根布局（Header / Footer / BackToTop）
│   ├── page.tsx            首页
│   ├── not-found.tsx       404
│   └── {training,services,solutions,news,about,contact}/
├── components/
│   ├── Header.tsx          固定头部：下拉菜单、当前路由高亮、移动端抽屉
│   ├── Footer.tsx          页脚，导航列由数据层生成
│   ├── PageHero.tsx        内页 banner + 面包屑
│   ├── CtaBand.tsx         通用行动号召区块
│   ├── Reveal.tsx          IntersectionObserver 滚动淡入
│   ├── BackToTop.tsx       返回顶部
│   └── home/               首页专用区块
└── lib/                    数据层
    ├── company.ts          工商信息、主要人员、经营范围
    ├── nav.ts              导航（由业务数据推导）
    ├── home.ts             首页轮播与数据条
    ├── training.ts         课程与大纲
    ├── services.ts         通航服务
    ├── solutions.ts        行业解决方案
    └── news.ts             新闻文章
```

内容与视图分离，接入 CMS 时只需替换 `src/lib/` 下的导出，页面无需改动。

## 设计规范

设计令牌定义在 `src/app/globals.css` 的 `@theme` 中：

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--color-gold` | `#ffbf00` | 主色（取自参考站） |
| `--color-gold-deep` | `#ff9900` | 主色悬停态 |
| `--color-ink` | `#0f1b2e` | 深色背景与标题 |
| `--color-paper` | `#faf9f9` | 浅灰区块背景 |
| `--color-muted` | `#8a8f98` | 辅助文字 |

字体使用系统栈（PingFang SC / 微软雅黑），不加载外部字体，避免构建期与首屏的网络依赖。

## 素材说明

`public/assets/` 下 37 个 SVG 全部为本工程自绘的矢量占位图（轮播背景、课程与方案插图、内页 banner、logo、图标），未使用参考站的图片资源。

替换为真实素材时：

- 位图放入 `public/assets/`，更新 `src/lib/` 中对应的 `image` 字段
- 换成位图后建议移除 `<Image>` 上的 `unoptimized` 属性，以启用 Next.js 图片优化
- 公司宣传片放入 `public/assets/` 后，把 `src/components/home/About.tsx` 弹窗内的占位文案替换为 `<video>`

## 内容准确性

- `src/lib/company.ts` 的工商信息来自 `company.md`（统一社会信用代码、成立日期、注册资本、经营范围等），请勿凭空修改
- 培训与服务条目只覆盖经营范围中已列明的项目，未添加公司不具备的资质表述
- `src/lib/news.ts` 的三篇文章为**示例文稿**，仅用于展示页面结构，正式上线前需替换为真实内容（文章页底部已标注）

## 已验证

- `npm run build` 通过，TypeScript 与 ESLint 均无报错
- 全站 29 个 URL 爬取：无死链、无运行时报错、每页 `h1` 唯一且标题层级不跳级
- 1440px 与 390px 视口下均无横向溢出
- `prefers-reduced-motion` 下关闭轮播自动播放与滚动动画
