/**
 * 公司工商信息，均来自 company.md，请勿凭空修改。
 */
export const company = {
  name: "济南领航航空科技有限公司",
  shortName: "领航航空",
  nameEn: "Jinan Navigation Aviation Technology Co., Ltd.",
  creditCode: "91370181MAE7FDQYX3",
  regNumber: "370181200543169",
  legalPerson: "王宁",
  registeredCapital: "50 万人民币",
  paidInCapital: "1.036 万人民币",
  foundedAt: "2024年12月11日",
  status: "开业（存续）",
  companyType: "有限责任公司（自然人投资或控股）",
  scale: "小微企业",
  industry: "航空运输业 · 通用航空服务",
  registrar: "济南市章丘区市场监督管理局",
  address: "济南市章丘区明水街道济南领航航空无人机培训基地",
  phone: "13001720111",
  email: "13001720111@163.com",
} as const;

/** 主要人员 */
export const staff = [{ name: "王宁", roles: "董事、财务负责人" }] as const;

/** 经营范围原文，按许可与一般项目分列 */
export const businessScope = {
  licensed: [
    "通用航空服务",
    "民用航空器驾驶员培训",
    "民用航空维修人员培训",
    "非急救转运服务",
    "公共航空运输",
    "船舶引航服务",
    "医疗服务",
    "飞行训练",
    "辐射监测",
    "渔业捕捞",
    "施工专业作业",
  ],
  general: [
    "国内货物运输代理",
    "运输设备租赁服务",
    "紧急救援服务",
    "会议及展览服务",
    "气象信息服务",
    "地质勘查专用设备制造",
    "摄影扩印服务",
    "电影摄制服务",
    "海洋环境监测与探测装备销售",
    "生态资源监测",
    "海洋服务",
    "消防技术服务",
    "物联网技术服务",
    "软件开发",
    "智能控制系统集成",
    "通信设备销售",
    "技术服务、技术开发、技术咨询",
    "自然生态系统保护管理",
    "森林经营和管护",
    "农业机械服务",
    "专业设计服务",
    "广告设计、代理、制作",
  ],
} as const;
