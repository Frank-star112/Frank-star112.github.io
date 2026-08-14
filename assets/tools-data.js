// 工具清单数据。url 中的 #REF 占位替换为你的联盟/邀请链接即可变现。
// 分类: writing(写作) drawing(绘图) video(视频) voice(配音) edit(剪辑) assist(自媒体辅助)
const TOOLS = [
  // ---- AI 写作 ----
  { name: "ChatGPT", cat: "writing", desc: "通用最强对话/写作模型，长文、脚本、选题一网打尽。", scene: "几乎任何文字创作场景", url: "#REF" },
  { name: "Claude", cat: "writing", desc: "长文本理解与写作体验极佳，适合深度内容、报告。", scene: "长文、结构化内容", url: "#REF" },
  { name: "DeepSeek", cat: "writing", desc: "国产强模型，推理与代码能力强，免费额度友好。", scene: "中文写作、脚本、分析", url: "#REF" },
  { name: "Kimi", cat: "writing", desc: "超长上下文，擅长读长文档、资料整理与摘要。", scene: "长资料处理、综述", url: "#REF" },
  { name: "秘塔写作猫", cat: "writing", desc: "中文改写、纠错、润色专精，自媒体人改稿利器。", scene: "中文润色、降重", url: "#REF" },
  { name: "Notion AI", cat: "writing", desc: "嵌入笔记工作流，边记边写，适合内容库管理。", scene: "笔记型写作、知识管理", url: "#REF" },

  // ---- AI 绘图 ----
  { name: "Midjourney", cat: "drawing", desc: "画质与审美天花板，出图质感最适合做封面/配图。", scene: "封面、插画、概念图", url: "#REF" },
  { name: "即梦 Dreamina", cat: "drawing", desc: "字节出品，中文友好，文生图/图生图/视频一体。", scene: "国风、写实、批量出图", url: "#REF" },
  { name: "Stable Diffusion", cat: "drawing", desc: "开源可本地部署，可控性最高，插件生态丰富。", scene: "精细化控制、批量", url: "#REF" },
  { name: "可灵", cat: "drawing", desc: "快手出品，图像与视频生成质量稳定，中文prompt友好。", scene: "国风图像、动态", url: "#REF" },
  { name: "醒图", cat: "drawing", desc: "手机端修图/模板神器，做小红书封面最快。", scene: "移动端封面、美颜", url: "#REF" },

  // ---- AI 视频 ----
  { name: "Runway", cat: "video", desc: "专业级文生视频/图生视频，Gen-3 质感领先。", scene: "创意短片、转场", url: "#REF" },
  { name: "Pika", cat: "video", desc: "上手快、风格化强，适合做有趣的短视频素材。", scene: "趣味视频、特效", url: "#REF" },
  { name: "可灵视频", cat: "video", desc: "国产视频生成质量第一梯队，长时长更稳定。", scene: "国产短视频、口播背景", url: "#REF" },
  { name: "即梦视频", cat: "video", desc: "字节系，文生视频+数字人，适合批量带货口播。", scene: "口播、带货视频", url: "#REF" },

  // ---- AI 配音 ----
  { name: "ElevenLabs", cat: "voice", desc: "拟真度最高的 AI 配音，多语种情绪自然。", scene: "高质量旁白、外语", url: "#REF" },
  { name: "魔音工坊", cat: "voice", desc: "中文配音矩阵丰富，自媒体配音性价比高。", scene: "中文旁白、解说", url: "#REF" },
  { name: "剪映 AI 配音", cat: "voice", desc: "剪辑内一键配音，自带多种情绪音色，零门槛。", scene: "剪辑流程内配音", url: "#REF" },

  // ---- 剪辑 ----
  { name: "剪映", cat: "edit", desc: "国民级剪辑，模板/字幕/配音一体化，新手首选。", scene: "短视频全链路剪辑", url: "#REF" },
  { name: "CapCut", cat: "edit", desc: "剪映海外版，模板与多人协作更强，适合出海。", scene: "出海短视频", url: "#REF" },
  { name: "必剪", cat: "edit", desc: "B站官方剪辑，UP主投稿流程顺滑。", scene: "B站投稿", url: "#REF" },

  // ---- 自媒体辅助 ----
  { name: "新红", cat: "assist", desc: "小红书数据分析，选题/爆文/带货榜单一目了然。", scene: "小红书选题、竞品", url: "#REF" },
  { name: "灰豚数据", cat: "assist", desc: "多平台带货与达人数据，找对标账号必备。", scene: "抖音/小红书带货分析", url: "#REF" },
  { name: "5118", cat: "assist", desc: "关键词与需求图谱，挖掘长尾选题利器。", scene: "SEO/选题挖掘", url: "#REF" },
];

const CATS = [
  { id: "all", label: "全部" },
  { id: "writing", label: "AI写作" },
  { id: "drawing", label: "AI绘图" },
  { id: "video", label: "AI视频" },
  { id: "voice", label: "AI配音" },
  { id: "edit", label: "剪辑" },
  { id: "assist", label: "自媒体辅助" },
];
