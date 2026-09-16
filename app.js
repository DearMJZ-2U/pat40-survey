/* PAT-40 · 政治态度倾向量表（低掩饰性题面版） */

const LIKERT = [
  { v: 1, label: "非常不同意" },
  { v: 2, label: "比较不同意" },
  { v: 3, label: "不好说" },
  { v: 4, label: "比较同意" },
  { v: 5, label: "非常同意" },
];

const DIMS = [
  { id: "D1", name: "国家形象防御", side: "N" },
  { id: "D2", name: "对外群体敌意", side: "N" },
  { id: "D3", name: "批评者排斥", side: "N" },
  { id: "D4", name: "体制绝对化认同", side: "N" },
  { id: "D5", name: "文化自卑与逆向民族", side: "W" },
  { id: "D6", name: "外部制度理想化", side: "W" },
  { id: "D7", name: "归因双重标准", side: "B" },
  { id: "D8", name: "认知僵化与阴谋论", side: "E" },
];

/**
 * 题面刻意生活化：用旅行、购物、刷视频、朋友聊天等具体场景切入，
 * 少用「体制/制度/国家形象/民族」等标签词，降低被猜出测量意图后反填的可能性。
 * reverse: true 为反向计分题（仍按原编号 15/25/30/32/39）。
 */
const QUESTIONS = [
  // D1 国家形象防御
  { id: 1, dim: "D1", text: "在国外旅行时，如果当地人提起中国的负面新闻，我会更想纠正他们，而不是先听完再判断。" },
  { id: 2, dim: "D1", text: "和外国朋友聊天，我更愿意聊发展和变化，而不是聊国内的麻烦。" },
  { id: 3, dim: "D1", text: "看到中国运动员、中国企业或国产电影在国外被夸，我会比自己被夸还高兴。" },
  { id: 4, dim: "D1", text: "如果某个国际排名把中国排得很靠后，我会先怀疑排名标准不公平。" },
  { id: 5, dim: "D1", text: "同样是吐槽中国，本国朋友说我觉得正常；外国朋友说我会有点不舒服。" },
  // D2 对外群体敌意
  { id: 6, dim: "D2", text: "如果某个国家的政府经常对中国不友好，我对那个国家的普通人也会多一份不信任。" },
  { id: 7, dim: "D2", text: "两国关系变差时，我会觉得对方国家的大多数人并不真心希望中国发展得好。" },
  { id: 8, dim: "D2", text: "外国人对中国的负面印象，多半是被他们本国媒体长期灌输的。" },
  { id: 9, dim: "D2", text: "两国闹矛盾时，我会减少购买那个国家的商品和文化产品。" },
  { id: 10, dim: "D2", text: "遇到一个对我不友好的外国人，我会容易联想到「他们国家的人就是这样」。" },
  // D3 批评者排斥
  { id: 11, dim: "D3", text: "身边总是吐槽国内各种问题的人，我会觉得他们更多是在发泄情绪。" },
  { id: 12, dim: "D3", text: "如果一个人很少讲中国的好、专讲问题，我会怀疑他的立场和动机。" },
  { id: 13, dim: "D3", text: "遇到争议话题，我认为大家先别吵散、保持一致比把道理吵清楚更重要。" },
  { id: 14, dim: "D3", text: "已经把家人或资产放在国外的人，回来评论国内问题，我会觉得说服力打折扣。" },
  { id: 15, dim: "D3", text: "有人反复指出某项规定或政策的负面效果，我会忍不住怀疑他是不是别有目的。", reverse: true },
  // D4 体制绝对化认同
  { id: 16, dim: "D4", text: "中国这几年走的路子，我觉得很多发展中国家可以直接照着学。" },
  { id: 17, dim: "D4", text: "和多数欧美国家比，中国在办事效率、集中力量做大事上明显更强。" },
  { id: 18, dim: "D4", text: "社会上很多乱象，我觉得是执行的人没做好，而不是规则本身有问题。" },
  { id: 19, dim: "D4", text: "讨论「要不要照搬西方式选举」对我来说意义不大，关键是把眼前这套用好。" },
  { id: 20, dim: "D4", text: "同等收入水平的国家里，中国这些年的变化速度应该是数一数二的。" },
  // D5 文化自卑与逆向民族
  { id: 21, dim: "D5", text: "在国外旅游时，我会觉得同胞的排队、音量、卫生习惯整体不如当地人。" },
  { id: 22, dim: "D5", text: "很多社会问题，我觉得根子是一种很难改掉的「国民性格」。" },
  { id: 23, dim: "D5", text: "论生活品味、审美和公共礼仪，发达国家整体还是高出一截。" },
  { id: 24, dim: "D5", text: "中国的电影、音乐、设计，总体还差口气，很难做到世界顶级。" },
  { id: 25, dim: "D5", text: "如果可以自由选长期居住地，我会更想去欧美国家，而不是留在北上广。", reverse: true },
  // D6 外部制度理想化
  { id: 26, dim: "D6", text: "发达国家那种法治水平和社会信任，中国再发展几十年也很难达到。" },
  { id: 27, dim: "D6", text: "欧美在个人权利、公共讨论上的做法，整体上更接近我认为的「正常状态」。" },
  { id: 28, dim: "D6", text: "中国的教育、医疗对标日本或北欧，差距是结构性的，努力也难抹平。" },
  { id: 29, dim: "D6", text: "买进口货、看外文资料、用外资服务，我平均更放心一些。" },
  { id: 30, dim: "D6", text: "中国做成功的事我更容易觉得是「特例」；外国做成功的事我更容易觉得「本来就该这样」。", reverse: true },
  // D7 归因双重标准
  { id: 31, dim: "D7", text: "同样的事故新闻，国内的我会更愤怒，国外的我会更容易找客观原因。" },
  { id: 32, dim: "D7", text: "国内出负面我先想追责谁；国外出同样负面我先想当事人多不容易。", reverse: true },
  { id: 33, dim: "D7", text: "中国某方面领先时我会想「会不会只是短期」；外国领先时我会想「这就是长期实力」。" },
  { id: 34, dim: "D7", text: "我发现自己对中外同类新闻的情绪反应，经常差得很远。" },
  { id: 35, dim: "D7", text: "对我喜欢的国家我会自动多看好评；对我反感的国家我会自动多看差评。" },
  // D8 认知僵化与阴谋论
  { id: 36, dim: "D8", text: "国际上的大事，公开说的理由多半不是真正原因，背后一定还有别的。" },
  { id: 37, dim: "D8", text: "复杂的社会现象，我觉得抓住一两个关键原则就能解释清楚。" },
  { id: 38, dim: "D8", text: "和立场不同的人聊天时，我更常觉得对方「要么蠢要么坏」，而不是「角度不同」。" },
  { id: 39, dim: "D8", text: "如果出现足够有力的新证据，我愿意改变自己坚持很久的某个看法。", reverse: true },
  { id: 40, dim: "D8", text: "很多标榜「中立客观」的说法，我觉得只是换了一种方式站队。" },
];

const DIM_META = Object.fromEntries(DIMS.map((d) => [d.id, d]));

/** 固定种子洗牌：每次打开顺序不同，但同一会话内稳定 */
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(arr, seed) {
  const rand = mulberry32(seed);
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- state ----------
const seed = Math.floor(Math.random() * 1e9);
const presentOrder = shuffleWithSeed(QUESTIONS.map((q) => q.id), seed); // 题号顺序（展示用）
const state = {
  index: 0, // presentOrder 中的下标
  answers: Array(QUESTIONS.length).fill(null), // 按原题号 0-based 存
};

function currentQuestion() {
  const qid = presentOrder[state.index];
  return QUESTIONS[qid - 1];
}

// ---------- DOM ----------
const $ = (sel) => document.querySelector(sel);
const screens = {
  intro: $("#screen-intro"),
  survey: $("#screen-survey"),
  result: $("#screen-result"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo(0, 0);
}

// ---------- survey UI ----------
function renderQuestion() {
  const q = currentQuestion();
  const total = QUESTIONS.length;
  const answered = state.answers.filter((a) => a !== null).length;
  const pct = Math.round((answered / total) * 100);

  $("#progress-text").textContent = `${state.index + 1} / ${total}`;
  $("#progress-pct").textContent = `${pct}%`;
  $("#progress-fill").style.width = `${pct}%`;

  // 作答阶段不暴露维度，只显示「第 n 题」
  $("#dim-tag").textContent = `第 ${state.index + 1} 题`;
  $("#q-text").textContent = q.text;

  const likert = $("#likert");
  likert.innerHTML = "";
  LIKERT.forEach((opt) => {
    const selected = state.answers[q.id - 1] === opt.v;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "likert-option" + (selected ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", selected ? "true" : "false");
    btn.innerHTML = `<span class="dot" aria-hidden="true"></span><span class="num">${opt.v}</span><span class="txt">${opt.label}</span>`;
    btn.addEventListener("click", () => selectAnswer(opt.v));
    likert.appendChild(btn);
  });

  $("#btn-prev").disabled = state.index === 0;
  const has = state.answers[q.id - 1] !== null;
  $("#btn-next").disabled = !has;
  $("#btn-next").textContent = state.index === total - 1 ? "查看结果" : "下一题";

  const card = $("#question-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
}

function selectAnswer(value) {
  const q = currentQuestion();
  state.answers[q.id - 1] = value;
  renderQuestion();
  if (state.index < QUESTIONS.length - 1) {
    const idx = state.index;
    setTimeout(() => {
      if (state.index === idx && state.answers[q.id - 1] === value) {
        state.index += 1;
        renderQuestion();
      }
    }, 220);
  }
}

function goPrev() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

function goNext() {
  const q = currentQuestion();
  if (state.answers[q.id - 1] === null) return;
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finish();
  }
}

function finish() {
  const incomplete = state.answers.findIndex((a) => a === null);
  if (incomplete !== -1) {
    // 跳到第一道未答（在展示顺序中的位置）
    const qid = incomplete + 1;
    state.index = presentOrder.indexOf(qid);
    renderQuestion();
    return;
  }
  const result = computeResult();
  renderResult(result);
  showScreen("result");
}

// ---------- scoring ----------
function scoreItem(raw, reverse) {
  return reverse ? 6 - raw : raw;
}

function computeResult() {
  const dimScores = {};
  DIMS.forEach((d) => {
    const items = QUESTIONS.filter((q) => q.dim === d.id);
    const vals = items.map((q) => scoreItem(state.answers[q.id - 1], !!q.reverse));
    dimScores[d.id] = round1(vals.reduce((a, b) => a + b, 0) / vals.length);
  });

  const mean = (ids) => round1(ids.reduce((s, id) => s + dimScores[id], 0) / ids.length);
  const N = mean(["D1", "D2", "D3", "D4"]);
  const W = mean(["D5", "D6"]);
  const B = dimScores.D7;
  const E = dimScores.D8;

  return { dimScores, N, W, B, E, type: classify(N, W, B, E) };
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function classify(N, W, B, E) {
  const nHigh = N > 3.5;
  const nMid = N >= 2.8 && N <= 3.5;
  const nLow = N < 2.8;
  const wHigh = W > 3.5;
  const wMid = W >= 2.8 && W <= 3.5;
  const wLow = W < 2.8;

  let code, name, brief;

  if (nHigh && wLow) {
    code = "A";
    name = "国家主义绝对化";
    brief = "国家立场防御性强，对外评价低，接近舆论场所说的「小粉红」画像。";
  } else if (nLow && wHigh) {
    code = "B";
    name = "逆向民族主义";
    brief = "对外部制度与文化评价高，对国内问题归因更苛刻，接近「崇洋媚外」画像。";
  } else if (nHigh && wHigh) {
    code = "C";
    name = "双向高 · 立场摇摆";
    brief = "国家崇拜与外部理想化同时偏高，标准不统一，双标指数通常也偏高。";
  } else if (nMid && wMid) {
    code = "D";
    name = "理性中间型";
    brief = "两个极端倾向都不高，更接近就事论事、对中外大体同一套标准。";
  } else if (nHigh && wMid) {
    code = "A′";
    name = "偏国家主义";
    brief = "国家立场防御性偏高，但尚未极端；对外评价处于中间带。";
  } else if (nMid && wHigh) {
    code = "W′";
    name = "偏外部理想化";
    brief = "对外部评价偏高，国家立场防御性处于中间带。";
  } else if (nMid && wLow) {
    code = "A″";
    name = "温和偏国内立场";
    brief = "整体更认同国内叙事，但防御性未到极端水平。";
  } else if (nLow && wMid) {
    code = "B′";
    name = "偏外部立场";
    brief = "更倾向外部叙事，但尚未形成系统的逆向民族倾向。";
  } else {
    code = "D′";
    name = "低双极 · 清醒观察型";
    brief = "两边极端倾向都低，通常更少情绪化、更少绝对化判断。";
  }

  const extras = [];
  if (B >= 3.6) extras.push("双重标准倾向较高：对中外同类事件使用不同尺子的概率大。");
  else if (B <= 2.4) extras.push("双重标准倾向较低：对中外事件大致一视同仁。");
  if (E >= 3.6) extras.push("认知僵化/阴谋论倾向较高：更依赖简单叙事，更难被证据改变。");
  else if (E <= 2.4) extras.push("认知开放度较好：更可能承认复杂性，也更愿意被证据说服。");

  return { code, name, brief, extras, N, W, B, E };
}

/**
 * 详细解读：按分型给出差异化画像（约 500–650 字）。
 * 每种分型有独立的场景、优势、风险与收束，避免结尾同质化。
 */
function buildLongInterpret(type, N, W, B, E) {
  const code = type.code;

  const profiles = {
    A: {
      lead: "两个主轴组合起来，接近舆论场常说的「小粉红」画像：内群体防御强，外部理想化弱。这不是「爱国」的同义词，而是你过滤信息时更先保护整体形象。",
      scene:
        "你更可能在出国被问到敏感话题时先澄清「你们被误导了」，而不是展开讨论；刷到只讲问题不讲成绩的账号会本能警惕；看到国产品牌在海外被夸会明显高兴。消费上你也较少默认进口更好，对反复挑刺的批评者会先怀疑动机。",
      strength:
        "优势是立场稳定、行动一致性强，在冲突明显的情境里不容易被外部叙事瞬间带偏，也更愿意为共同体目标让渡一部分个人表达。需要动员时，你往往是响应最快的那一类。",
      risk:
        "风险在于把建设性批评和恶意抹黑混为一谈，把「谁在说」排在「说了什么」前面。当所有不利信息都先被归入敌意，你就失去了用证据修正判断的通道——这时不是更爱国，而是更封闭；别人看到的坚定，可能只是不可证伪。",
      close:
        "可以试一个很小的练习：下次看到不利中国的信息，强制自己先写下「这条的证据是什么」，再写「我是否喜欢它的语气」。两行写完再决定要不要转发。",
    },
    B: {
      lead: "两个主轴组合起来，接近「崇洋媚外」画像：外部参照高，国内叙事接受度低。你更常把「正常状态」锚定在发达国家，把国内问题读成结构性无解。",
      scene:
        "你更容易在旅行中注意到同胞礼仪差距，用「国民性」解释社会乱象，买进口货或看外文资料时更放心。看到差距时，你更倾向判断为「系统性、追不上」，而不是「阶段性的、可以改」；对国内成就也更容易解释成特殊红利。",
      strength:
        "优势是对问题敏感、标准偏高，不容易用「已经很好了」自我安慰，也更愿意把优秀实践当作可学习对象，推动改进而不是粉饰。你往往能把不满转译成具体比较，而不是空泛抱怨。",
      risk:
        "风险是把自卑包装成理性：用局部差距推导整体落后，用别国长板对比我们短板，却很少做反向对照。当你默认外部正确时，批判就不再是求真，而更像一种身份姿态——别人看到的清醒，可能只是更体面的仰视。",
      close:
        "可以试一个对称对照：列三项你觉得「国内确实不行」的具体事，再强迫自己找三项「同类事国外也有」的例子。若第二列写不出来，说明你在看的不是现实，是滤镜。",
    },
    C: {
      lead: "两个主轴同时偏高，不是中间派，而是标准不统一——对不同对象切换尺子。舆论场两边的帽子你都容易被扣，因为你确实会随语境摇摆。",
      scene:
        "你可能既会在对外场合强烈维护形象，又会在私下强烈崇拜某种国外生活方式；看新闻时对中外同类事件情绪落差很大；争论里常常发现自己在给一方找理由、给另一方找罪名。别人觉得你反复，你觉得别人不懂你。",
      strength:
        "优势是情绪投入高、立场有张力，能在不同社交场景里快速共鸣，也往往比纯中间派更有行动欲——无论是为国说话，还是为「更好的地方」辩护。你不是冷漠，而是太需要归属。",
      risk:
        "真正的病灶通常不是极端，而是双标：争的不是事实，是量尺。若不把「对事的标准」和「对人的忠诚」拆开，你会一直赢一些争吵、输掉自己的判断一致性；身边人也很难预测你下一句会站在哪。",
      close:
        "下次激动之前先问自己：如果这件事发生在另一边，我还会用同样强度和同样归因吗？若答案是否定的，先别下结论，把差异写下来再看。",
    },
    D: {
      lead: "两个主轴都未明显偏高，更接近就事论事、对中外大体同一套标准。你不容易被任何一顶帽子准确套住，也因此常被两边同时觉得「不够立场」。",
      scene:
        "你更可能听完再判断，区分「谁说的」和「说了什么」；对国内问题会批评，但不轻易上升到国民性；对外部成就会欣赏，但不默认整体优于我们。争论里你更在意证据链，而不是情绪归属；有人激动时，你常是先问「依据是什么」的那个。",
      strength:
        "优势是信息通道更宽、修正成本更低，适合做需要跨立场沟通的角色，也更可能在长期里积累真正可检验的判断，而不是反复站队再推翻。你的稳定，来自可被证据改写，而不是来自从不改写。",
      risk:
        "风险是「理性」有时会滑成冷感或机会主义：两边都不彻底，就两边都不承担。若你从未因证据而公开改口，也可能只是避免表态，而非真的开放——旁观久了，正确就只剩自我感觉。",
      close:
        "可以给自己设一条可验证规则：每季度公开修正一次自己的旧判断，并写清是哪条新证据触发的。能做到，中间型才站得住；做不到，可能只是更安全的旁观。",
    },
    "A′": {
      lead: "偏国家主义，但尚未到绝对化；对外评价仍保留部分弹性。你在意共同体形象，但通常还能对话，不至于把所有批评都读成敌意。",
      scene:
        "你在公开场合更倾向先站稳、再讨论；对反复挑刺的人会保留动机怀疑；同时在具体产品、教育、旅行等议题上，仍可能承认外部某处做得更好。你不是「听不得批评」，而是「先分敌友再分对错」的顺序感较强。",
      strength:
        "优势是有归属感又不封闭，能在集体动员和独立判断之间切换，适合需要立场表达又需要事实核对的场景。社群里你常是「能压住场面、也还能讲理」的那一类。",
      risk:
        "风险是压力一大就滑向 A：冲突升级时，弹性会让位给防御。若你发现自己最近越来越难听完反对意见，或越来越快给说话的人贴标签，说明斜率正在变陡，而不是立场变稳。",
      close:
        "保持一个私人反方清单：固定看 2–3 个立场相反、但事实质量较高的信源，不是为了认同，而是为了防止自己的信息面越收越窄。每月底问自己：这个月有没有被哪条证据真正改过判断？",
    },
    "W′": {
      lead: "偏外部理想化，国家立场防御性仍在中间带。你更常拿发达社会当参照，但尚未把国内问题读成结构性无解。",
      scene:
        "你会欣赏外部的规则、服务与审美，也可能在比较教育、医疗、职场时更倾向对方模式；但对「整体不如人」的判断你仍会犹豫，仍愿意承认国内在部分领域追得很快，甚至做得更好。",
      strength:
        "优势是标准偏高、见贤思齐，能推动具体改进，而不是空泛否定或空泛自信。你往往能把「差距感」翻译成可讨论的细节，而不是情绪口号。",
      risk:
        "风险是参照系逐渐固化：只看见对方长板，忽略其代价与失败面。当你开始用「他们本来就该这样」解释外国成功、用「我们特殊国情」解释中国成功时，尺子已经弯了，而你还以为自己很客观。",
      close:
        "做一次反向标杆作业：选一个你欣赏的国外制度或产品，专门查它最差的三次失败案例，写清代价由谁承担。写完再决定要不要继续把它当作「正确答案」。",
    },
    "A″": {
      lead: "温和认同国内叙事，防御性未到极端，通常仍能对话。你整体站在「我们」这边，但并不拒绝具体批评。",
      scene:
        "你更愿意相信大方向，也愿意承认执行层有毛病；对外部不友好会反感，但较少上升到对整国民众的不信任；消费上国产优先居多，但不排外。争论里你更常调和，而不是压服。",
      strength:
        "优势是凝聚力与务实兼备：既能支持共同目标，又保留对细节的检视空间，是很多稳定社群里最不容易吵散的类型。你往往能同时接住「成绩」和「问题」两套叙事。",
      risk:
        "风险是温和被温水煮：环境一收紧，你可能为了「别惹事」而逐渐不再开口。沉默久了，温和会变成默认附和，而不是主动判断——你自己可能都察觉不到转折点在哪。",
      close:
        "给自己留一条不可让渡的习惯：每月至少就一个公共议题，用事实而非立场写一段完整看法。不必发出去，但要写给自己看；若连续三个月写不出来，说明你已经从「温和」滑向「回避」。",
    },
    "B′": {
      lead: "更倾向外部叙事，但尚未形成系统性的逆向民族倾向。你更容易被外部参照说服，对国内问题的归因也更苛刻一些。",
      scene:
        "你在比较制度、教育、职场文化时更常站在外部范式一侧；看到国内乱象更容易联想到深层原因；但对「全盘不如人」的结论你仍会觉得过火。你批评得多，但通常还不至于否定一切。",
      strength:
        "优势是问题意识强、不安于现状，能推动对短板的讨论，而不是用成绩覆盖问题。你往往比身边人更早发现流程里的不合理，也更愿意把「应该怎样」说出口。",
      risk:
        "风险是苛刻只朝一个方向打开：对内从严、对外从宽。久而久之，你以为自己在求真，其实在完成一种「更文明」的身份确认——这时批评不再是诊断，而成了姿态。",
      close:
        "下次批评国内时，强迫自己用同样句式写一句对外国同类问题的批评。写不出来，就说明你的尺子还没校准；写得出来，再决定哪一句更值得公开讨论。",
    },
    "D′": {
      lead: "两边极端倾向都低，通常更少情绪化、更少绝对化判断。你既不容易被拉进集体狂欢，也很少陷入自我否定的泄愤循环。",
      scene:
        "你更可能把新闻当新闻读，而不是当身份信号；争论里你愿意承认对方部分成立；旅行、购物、教育选择上你也较少被「必须更好/更差」的叙事绑架。别人激动时，你常是那个先问「依据是什么」的人。",
      strength:
        "优势是认知负荷低、社交毒性小，能同时和不同立场的人共事，也更可能形成经得起时间检验的个人判断。你的低极化，本身就是一种稀缺的公共品。",
      risk:
        "风险是低极化有时伴随低卷入：因为不激动，所以不行动。公共议题上你可能一直正确却从不发声，把「清醒」过成了旁观——旁观久了，你的正确就只剩自我感觉。",
      close:
        "选一个你真正关心的具体议题，用四周时间只跟事实、不站队地深挖，最后写一页自己的结论并找一个立场不同的人讨论。低极化只有配上高投入，才不只是冷漠。",
    },
  };

  const p =
    profiles[code] ||
    profiles.D;

  const beBits = [];
  if (B >= 3.6) beBits.push("另外，你的双标指数偏高：同类事件换到另一边，你的情绪和归因容易跟着换尺子。");
  else if (B <= 2.4) beBits.push("另外，你的双标指数偏低：对中外同类事件大致一视同仁，这在跨立场对话里是稀缺能力。");
  if (E >= 3.6) beBits.push("认知僵化指数也偏高：你更依赖简单叙事，立场一旦形成就较难被证据撼动。");
  else if (E <= 2.4) beBits.push("认知开放度较好：你更能容忍复杂性，也更愿意被新证据说服。");

  // 每种分型以自己的 close 结尾，避免收束同质化；极端 B/E 作为补充段落插在 close 之前
  return [p.lead, p.scene, p.strength, p.risk, beBits.join(""), p.close].join("");
}

// ---------- result UI ----------
function renderResult(result) {
  const { dimScores, N, W, B, E, type } = result;

  $("#result-type-lead").textContent =
    "以下结果基于你在 40 题上的作答。两个主指数并非互斥，交叉后得到整体画像。";
  $("#type-badge").innerHTML = `<span class="code">${type.code}</span><span>${type.name}</span>`;

  const cards = [
    { key: "n", label: "N · 国家主义倾向", value: N },
    { key: "w", label: "W · 崇外倾向", value: W },
    { key: "b", label: "B · 双重标准", value: B },
    { key: "e", label: "E · 极端化思维", value: E },
  ];
  $("#index-cards").innerHTML = cards
    .map((c) => {
      const pct = Math.max(0, Math.min(100, ((c.value - 1) / 4) * 100));
      return `<div class="index-card ${c.key}"><span class="label">${c.label}</span><div class="value">${c.value.toFixed(1)}</div><div class="bar"><i data-w="${pct}"></i></div></div>`;
    })
    .join("");

  $("#dim-list").innerHTML = DIMS.map((d) => {
    const v = dimScores[d.id];
    const pct = ((v - 1) / 4) * 100;
    return `<div class="dim-row"><span class="name">${d.id} · ${d.name}</span><span class="score">${v.toFixed(1)}</span><div class="track"><i data-w="${pct}"></i></div></div>`;
  }).join("");

  requestAnimationFrame(() => {
    document.querySelectorAll(".index-card .bar > i, .dim-row .track > i").forEach((el) => {
      el.style.width = `${el.dataset.w}%`;
    });
  });

  drawRadar(dimScores);

  // 默认折叠详细维度，避免截图/分享时暴露测量结构
  const fold = $("#detail-fold");
  if (fold) fold.open = false;

  const extrasHtml = type.extras.length
    ? `<p><strong>附加信号</strong><br />${type.extras.join("<br />")}</p>`
    : "";
  const longText = buildLongInterpret(type, N, W, B, E);
  $("#interpret").innerHTML = `
    <h3>结果解读</h3>
    <p><strong>${type.code} · ${type.name}</strong></p>
    <p>${longText}</p>
    <p style="font-size:13px;color:var(--ink-3);">参照：以 3.0 为中点，&gt;3.5 视为偏高，&lt;2.8 视为偏低。分数描述的是态度结构，不是人品或智商。</p>
    ${extrasHtml}
  `;

  $("#radar-legend").innerHTML = DIMS.map(
    (d) => `<span><i style="background:${colorForSide(d.side)}"></i>${d.id} ${d.name} ${dimScores[d.id].toFixed(1)}</span>`
  ).join("");

  window.__patResult = result;
}

function colorForSide(side) {
  return { N: "#c45c26", W: "#2563eb", B: "#7c3aed", E: "#0f766e" }[side] || "#1f5c4d";
}

function drawRadar(dimScores) {
  const svg = $("#radar-chart");
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 110;
  const levels = 5;
  const n = DIMS.length;
  const angleAt = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pointAt = (i, r) => {
    const a = angleAt(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const valueToR = (v) => ((v - 1) / 4) * maxR;

  let g = "";
  for (let lv = 1; lv <= levels; lv++) {
    const r = (maxR * lv) / levels;
    const pts = Array.from({ length: n }, (_, i) => pointAt(i, r).join(",")).join(" ");
    g += `<polygon points="${pts}" fill="none" stroke="#e2ddd4" stroke-width="1" />`;
  }
  for (let i = 0; i < n; i++) {
    const [x, y] = pointAt(i, maxR);
    g += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e2ddd4" stroke-width="1" />`;
  }
  DIMS.forEach((d, i) => {
    const [x, y] = pointAt(i, maxR + 22);
    const anchor = x < cx - 4 ? "end" : x > cx + 4 ? "start" : "middle";
    g += `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" font-size="11" fill="#4a4a4a" font-family="inherit">${d.id}</text>`;
  });
  const dataPts = DIMS.map((d, i) => pointAt(i, valueToR(dimScores[d.id])).join(",")).join(" ");
  g += `<polygon points="${dataPts}" fill="rgba(31,92,77,0.18)" stroke="#1f5c4d" stroke-width="2" stroke-linejoin="round" />`;
  DIMS.forEach((d, i) => {
    const [x, y] = pointAt(i, valueToR(dimScores[d.id]));
    g += `<circle cx="${x}" cy="${y}" r="3.5" fill="${colorForSide(d.side)}" stroke="#fff" stroke-width="1.5" />`;
  });
  svg.innerHTML = g;
}

function copySummary() {
  const r = window.__patResult;
  if (!r) return;
  const longText = buildLongInterpret(r.type, r.N, r.W, r.B, r.E);
  const lines = [
    "【PAT-40 判断习惯量表 · 结果】",
    `分型：${r.type.code} · ${r.type.name}`,
    "",
    longText,
    "",
    `N 国家主义倾向：${r.N.toFixed(1)}`,
    `W 崇外倾向：${r.W.toFixed(1)}`,
    `B 双重标准：${r.B.toFixed(1)}`,
    `E 极端化思维：${r.E.toFixed(1)}`,
  ];
  if (r.type.extras.length) lines.push("", ...r.type.extras);
  const text = lines.join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => flashBtn($("#btn-copy"), "已复制"),
      () => fallbackCopy(text)
    );
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    flashBtn($("#btn-copy"), "已复制");
  } catch (e) {
    flashBtn($("#btn-copy"), "复制失败");
  }
  document.body.removeChild(ta);
}

function flashBtn(btn, msg) {
  const old = btn.textContent;
  btn.textContent = msg;
  setTimeout(() => {
    btn.textContent = old;
  }, 1600);
}

function restart() {
  state.index = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  // 重新洗牌，减少「记住顺序后定向反填」
  const newSeed = Math.floor(Math.random() * 1e9);
  const shuffled = shuffleWithSeed(QUESTIONS.map((q) => q.id), newSeed);
  presentOrder.length = 0;
  presentOrder.push(...shuffled);
  showScreen("intro");
}

$("#btn-start").addEventListener("click", () => {
  state.index = 0;
  renderQuestion();
  showScreen("survey");
});
$("#btn-prev").addEventListener("click", goPrev);
$("#btn-next").addEventListener("click", goNext);
$("#btn-copy").addEventListener("click", copySummary);
$("#btn-restart").addEventListener("click", restart);

document.addEventListener("keydown", (e) => {
  if (!screens.survey.classList.contains("active")) return;
  if (e.key >= "1" && e.key <= "5") selectAnswer(Number(e.key));
  else if (e.key === "ArrowLeft") goPrev();
  else if (e.key === "ArrowRight" || e.key === "Enter") goNext();
});
