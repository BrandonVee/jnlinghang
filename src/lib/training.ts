export type Course = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  points: string[];
  audience: string[];
  duration: string;
  outline: { stage: string; items: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "pilot",
    code: "01",
    title: "民用航空器驾驶员培训",
    subtitle: "PILOT TRAINING",
    image: "/assets/course-pilot.svg",
    desc: "面向有志从事通用航空飞行的学员，围绕理论学习、模拟训练与带飞实操展开，帮助学员建立扎实的飞行基础与合规意识。",
    points: ["理论精讲", "模拟机训练", "带飞实操", "考核辅导"],
    audience: ["零基础航空爱好者", "拟从事通航飞行的在职人员", "航空院校在校学生"],
    duration: "按科目分阶段安排，具体开班计划请电话咨询",
    outline: [
      {
        stage: "理论阶段",
        items: [
          "航空法规与空域基础知识",
          "航空气象与飞行环境",
          "航空器构造与系统原理",
          "飞行原理与性能计算",
        ],
      },
      {
        stage: "模拟训练阶段",
        items: [
          "座舱面板与仪表认知",
          "起降流程标准化操作",
          "特情处置模拟演练",
          "无线电通信用语",
        ],
      },
      {
        stage: "带飞实操阶段",
        items: ["起落航线训练", "空域机动科目", "教员带飞与放单前评估", "考核前强化"],
      },
    ],
  },
  {
    slug: "uav",
    code: "02",
    title: "无人机飞手培训",
    subtitle: "UAV OPERATOR",
    image: "/assets/course-uav.svg",
    desc: "覆盖多旋翼与固定翼机型操控，结合空域法规与行业作业要求，培养能够独立承担巡检、航拍、测绘等任务的作业飞手。",
    points: ["机型操控", "空域法规", "行业作业", "安全管理"],
    audience: ["转型进入低空行业的从业者", "企业内部作业人员", "在校学生与个人爱好者"],
    duration: "分机型与方向设置课时，详情电话咨询",
    outline: [
      {
        stage: "基础阶段",
        items: ["无人机系统组成与原理", "遥控器与地面站操作", "电池与动力系统维护", "起降与悬停训练"],
      },
      {
        stage: "进阶阶段",
        items: ["航线规划与自主飞行", "视距内与超视距作业规范", "复杂环境飞行处置", "失控与返航应急"],
      },
      {
        stage: "行业方向",
        items: ["航拍构图与云台操作", "测绘航线与像控布设", "巡检数据采集流程", "作业报告与成果交付"],
      },
    ],
  },
  {
    slug: "maintenance",
    code: "03",
    title: "民用航空维修人员培训",
    subtitle: "MAINTENANCE",
    image: "/assets/course-maintenance.svg",
    desc: "围绕航空器机务维修的基础理论与实训环节展开，帮助学员掌握规范化的检查、维护与排故能力。",
    points: ["机务基础", "排故实训", "适航规范", "工卡管理"],
    audience: ["机务方向求职者", "通航企业维修岗人员", "机电相关专业毕业生"],
    duration: "理论与实训交替进行，具体安排请咨询",
    outline: [
      {
        stage: "基础理论",
        items: ["航空器结构与材料", "动力装置原理", "航空电气与仪表", "适航管理与维修规章"],
      },
      {
        stage: "实训环节",
        items: ["常规检查与勤务作业", "紧固件与管路操作", "系统功能测试", "故障判断与排除"],
      },
      {
        stage: "规范管理",
        items: ["维修记录与工卡填写", "工具与器材管理", "安全防护与现场管理", "质量复查流程"],
      },
    ],
  },
  {
    slug: "recurrent",
    code: "04",
    title: "飞行训练与技能复训",
    subtitle: "RECURRENT",
    image: "/assets/course-recurrent.svg",
    desc: "为在职飞行人员提供技能保持、复训与专项科目强化，帮助持证人员维持操作水平并应对考核要求。",
    points: ["技能保持", "专项强化", "考核辅导", "带飞复查"],
    audience: ["持证飞行人员", "需要恢复飞行状态的学员", "企业飞行团队"],
    duration: "按需定制训练周期，可安排短期集中训练",
    outline: [
      {
        stage: "状态评估",
        items: ["飞行经历与短板梳理", "理论知识复查", "模拟机状态评估"],
      },
      {
        stage: "专项训练",
        items: ["起降精度强化", "特情处置演练", "夜航与复杂气象科目", "编队与协同作业"],
      },
      {
        stage: "复查与考核",
        items: ["教员带飞复查", "考核科目模拟", "训练记录归档"],
      },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
