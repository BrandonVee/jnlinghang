export type Service = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  features: { title: string; desc: string }[];
  scenarios: string[];
};

export const services: Service[] = [
  {
    slug: "general-aviation",
    code: "01",
    title: "通用航空服务",
    subtitle: "GENERAL AVIATION",
    image: "/assets/photos/svc-general.jpg",
    desc: "以通用航空运营为核心，围绕作业飞行、空中服务与地面保障构建完整服务链路，为政企客户提供可落地的低空作业能力。",
    features: [
      { title: "作业飞行组织", desc: "依据任务目标制定航线与作业方案，统筹机组与设备调配。" },
      { title: "空地协同保障", desc: "配套地面保障与通信联络，保证作业过程可控可追溯。" },
      { title: "合规与安全管理", desc: "遵循空域管理与安全运行要求，作业前完成风险评估。" },
      { title: "数据成果交付", desc: "作业数据整理归档，按客户需要输出成果与报告。" },
    ],
    scenarios: ["政企低空作业", "空中巡查巡护", "专项飞行任务", "航空技术服务"],
  },
  {
    slug: "rescue",
    code: "02",
    title: "紧急救援服务",
    subtitle: "EMERGENCY RESCUE",
    image: "/assets/photos/svc-rescue.jpg",
    desc: "面向突发事件与自然灾害场景，提供空中侦察、物资投送与现场支援能力，帮助救援指挥快速掌握态势。",
    features: [
      { title: "快速响应", desc: "接到任务后按预案组织力量，缩短出动准备时间。" },
      { title: "空中侦察", desc: "对灾情区域进行航拍与实时回传，辅助指挥决策。" },
      { title: "物资投送", desc: "承担应急物资的空中转运与定点投送任务。" },
      { title: "多方协同", desc: "与地面救援力量对接，形成空地一体的救援配合。" },
    ],
    scenarios: ["汛情与地震救援", "森林火情侦察", "山地搜寻救援", "重大活动应急保障"],
  },
  {
    slug: "transfer",
    code: "03",
    title: "非急救转运服务",
    subtitle: "MEDICAL TRANSFER",
    image: "/assets/photos/svc-transfer.jpg",
    desc: "为有转运需求的人群提供非急救医疗转运衔接服务，注重转运过程中的舒适性、规范性与全程照护。",
    features: [
      { title: "转运方案定制", desc: "结合出行距离与身体状况制定转运路线与照护方案。" },
      { title: "全程随行照护", desc: "转运过程配备随行人员，关注途中状态变化。" },
      { title: "衔接就医流程", desc: "与接收方沟通交接安排，减少中途等待。" },
      { title: "隐私与规范", desc: "严格遵循服务规范，保护被转运人隐私。" },
    ],
    scenarios: ["康复期返家转运", "跨城就医衔接", "长者出行陪护", "特殊人群出行"],
  },
  {
    slug: "transport",
    code: "04",
    title: "公共航空运输",
    subtitle: "AIR TRANSPORT",
    image: "/assets/photos/svc-transport.jpg",
    desc: "围绕航空运输与货运代理业务，为客户提供运输组织、设备租赁与运力协调等一体化服务支持。",
    features: [
      { title: "运输组织", desc: "根据货物属性与时效要求安排运输方案。" },
      { title: "货运代理", desc: "承接国内货物运输代理，协调各环节衔接。" },
      { title: "设备租赁", desc: "提供运输设备租赁服务，灵活匹配任务需求。" },
      { title: "全流程跟踪", desc: "运输节点信息同步，过程状态可查询。" },
    ],
    scenarios: ["时效货物运输", "专项设备调运", "运力临时补充", "多式联运衔接"],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
