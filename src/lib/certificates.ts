/**
 * 荣誉资质：AAA 信用系列证书。
 * 评级机构：国誉（山东）信用评估有限责任公司，有效期 2025.2.13-2028.2.12。
 * 图片来源：docs/ 下的证书 PDF 与高清原图。
 */
export type Certificate = {
  title: string;
  image: string;
};

export const certificates: Certificate[] = [
  { title: "AAA 信用等级证书", image: "/assets/certs/aaa-credit.jpg" },
  { title: "AAA 资信等级证书", image: "/assets/certs/aaa-credit-standing.jpg" },
  { title: "AAA 重合同守信用证书", image: "/assets/certs/aaa-contract.jpg" },
  { title: "AAA 诚信经营示范单位", image: "/assets/certs/aaa-integrity-model.jpg" },
  { title: "AAA 重服务守信用企业", image: "/assets/certs/aaa-service-credit.jpg" },
  { title: "AAA 诚信企业家证书", image: "/assets/certs/aaa-entrepreneur.jpg" },
  { title: "AAA 诚信经理人证书", image: "/assets/certs/aaa-manager.jpg" },
  { title: "AAA 级诚信供应商", image: "/assets/certs/aaa-supplier.jpg" },
  { title: "AAA 售后服务诚信认证企业", image: "/assets/certs/aaa-after-sales.jpg" },
  { title: "AAA 级信用企业", image: "/assets/certs/aaa-credit-enterprise.jpg" },
];
