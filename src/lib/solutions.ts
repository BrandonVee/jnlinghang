export type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  /** 核心价值 */
  value: { title: string; desc: string }[];
  /** 能力项 */
  capabilities: string[];
  /** 适用行业 */
  industries: string[];
};

export const solutions: Solution[] = [
  {
    slug: "rescue",
    title: "紧急救援解决方案",
    subtitle: "EMERGENCY RESCUE",
    desc: "以空中视角快速掌握现场态势，配合地面力量完成侦察、投送与支援，缩短救援响应时间。",
    image: "/assets/photos/sol-rescue.jpg",
    value: [
      { title: "态势先知", desc: "航拍影像实时回传，指挥端快速判断现场情况。" },
      { title: "响应提速", desc: "空中通道不受地面交通限制，抵达速度更快。" },
      { title: "风险规避", desc: "危险区域改由航空器完成侦察，减少人员暴露。" },
    ],
    capabilities: ["现场航拍与回传", "热成像搜寻", "应急物资投送", "空地通信中继"],
    industries: ["应急管理", "消防救援", "水利防汛", "林业防火"],
  },
  {
    slug: "medical",
    title: "医疗转运解决方案",
    subtitle: "MEDICAL TRANSFER",
    desc: "打通城际就医通道，为非急救转运提供规范、稳妥的过程管理与照护衔接。",
    image: "/assets/photos/sol-medical.jpg",
    value: [
      { title: "路线优化", desc: "结合距离与身体状况规划转运路线与节奏。" },
      { title: "全程照护", desc: "随行人员关注途中状态，及时调整安排。" },
      { title: "衔接顺畅", desc: "提前与接收方沟通交接，减少中途等待。" },
    ],
    capabilities: ["转运方案制定", "随行照护", "接收方对接", "过程记录归档"],
    industries: ["医疗机构", "康养机构", "保险服务", "企业员工关怀"],
  },
  {
    slug: "survey",
    title: "测绘建模解决方案",
    subtitle: "SURVEY & MODELING",
    desc: "通过航空影像采集与三维重建，为规划设计、地质勘查与工程管理提供高精度空间数据。",
    image: "/assets/photos/sol-survey.jpg",
    value: [
      { title: "精度可控", desc: "按成果要求设计航高与重叠率，控制成图精度。" },
      { title: "效率提升", desc: "大范围区域快速覆盖，缩短外业周期。" },
      { title: "成果多样", desc: "输出正射影像、点云与三维模型等多种成果。" },
    ],
    capabilities: ["航线规划与像控", "正射影像制作", "实景三维建模", "土方量与变化分析"],
    industries: ["自然资源", "工程建设", "地质勘查", "城乡规划"],
  },
  {
    slug: "film",
    title: "影视航拍解决方案",
    subtitle: "AERIAL FILMING",
    desc: "为影视摄制、宣传片与活动记录提供航拍与后期支持，用空中镜头强化画面表达。",
    image: "/assets/photos/sol-film.jpg",
    value: [
      { title: "镜头语言", desc: "根据脚本设计运镜方案，服务叙事需要。" },
      { title: "现场配合", desc: "与导演组协同，现场快速调整拍摄方案。" },
      { title: "后期衔接", desc: "提供素材整理与调色剪辑衔接支持。" },
    ],
    capabilities: ["航拍摄制", "运镜设计", "素材整理", "摄影扩印与后期"],
    industries: ["影视制作", "文旅宣传", "地产营销", "赛事活动"],
  },
  {
    slug: "eco",
    title: "生态监测解决方案",
    subtitle: "ECOLOGY MONITORING",
    desc: "面向生态资源监测与森林管护需求，建立周期性空中巡查与数据比对机制。",
    image: "/assets/photos/sol-eco.jpg",
    value: [
      { title: "周期比对", desc: "定期采集同区域影像，识别变化趋势。" },
      { title: "覆盖全面", desc: "覆盖人力难以到达的区域，减少监测盲区。" },
      { title: "台账留存", desc: "监测数据归档，形成可追溯的管理台账。" },
    ],
    capabilities: ["生态资源普查", "森林经营与管护巡查", "变化检测分析", "自然保护区巡护"],
    industries: ["林业草原", "生态环境", "自然保护区", "农业农村"],
  },
  {
    slug: "weather",
    title: "气象与辐射监测",
    subtitle: "ENVIRONMENT SENSING",
    desc: "结合气象信息服务与辐射监测能力，为作业安全与环境评估提供空域环境感知支持。",
    image: "/assets/photos/sol-weather.jpg",
    value: [
      { title: "作业保障", desc: "作业前评估气象条件，降低飞行风险。" },
      { title: "数据支撑", desc: "采集环境数据，为评估与决策提供依据。" },
      { title: "预警联动", desc: "异常情况及时告知，配合管理方处置。" },
    ],
    capabilities: ["气象信息服务", "辐射监测", "环境数据采集", "作业气象评估"],
    industries: ["环境监测", "能源电力", "科研机构", "公共安全"],
  },
  {
    slug: "agriculture",
    title: "农林作业解决方案",
    subtitle: "AGRICULTURE",
    desc: "以农业机械服务与航空作业配合，提升农林生产环节的作业效率与覆盖均匀度。",
    image: "/assets/photos/sol-agri.jpg",
    value: [
      { title: "效率提升", desc: "大面积作业快速完成，抢抓农时。" },
      { title: "覆盖均匀", desc: "按航线均匀作业，减少重喷漏喷。" },
      { title: "成本可控", desc: "减少人工投入，作业成本更清晰。" },
    ],
    capabilities: ["农业机械服务", "航空植保作业", "长势巡查", "作业面积统计"],
    industries: ["种植大户", "农业合作社", "林场管护", "农垦企业"],
  },
];

export const getSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);
