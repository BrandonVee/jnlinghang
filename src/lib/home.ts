/** 首页专用数据：主视觉轮播与数据条 */

export type Slide = {
  image: string;
  kicker: string;
  title: string;
  desc: string;
};

export const slides: Slide[] = [
  {
    image: "/assets/banner1.svg",
    kicker: "GENERAL AVIATION",
    title: "深耕通用航空服务",
    desc: "以通航运营为核心，提供飞行作业、航空运输与低空综合服务",
  },
  {
    image: "/assets/banner2.svg",
    kicker: "PILOT TRAINING",
    title: "培养合规飞行人才",
    desc: "民用航空器驾驶员培训、航空维修人员培训与飞行训练体系",
  },
  {
    image: "/assets/banner3.svg",
    kicker: "EMERGENCY RESCUE",
    title: "紧急救援与医疗转运",
    desc: "紧急救援、非急救转运与消防技术服务，守护生命通道",
  },
  {
    image: "/assets/banner4.svg",
    kicker: "LOW-ALTITUDE ECONOMY",
    title: "赋能低空经济场景",
    desc: "测绘建模、生态监测、影视航拍与物联网技术服务一体化落地",
  },
];

export const stats = [
  { value: "11", suffix: "项", label: "许可经营项目" },
  { value: "3", suffix: "类", label: "培训资质方向" },
  { value: "7", suffix: "大", label: "行业解决方案" },
  { value: "24", suffix: "h", label: "咨询响应" },
];
