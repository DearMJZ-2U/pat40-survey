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

/** 约 450 字的详细解读 */
function buildLongInterpret(type, N, W, B, E) {
  const seg = (v, low, mid, high) => (v >= 3.6 ? high : v <= 2.4 ? low : mid);

  const nText = seg(
    N,
    "你在国家形象维护和对外评价上防御性偏低，更愿意先听完再判断，也较少因为「谁在说」就立刻站队。出国被问到敏感话题时，你更可能展开讨论而不是急着澄清；对国内反复挑问题的人，你也更倾向就事论事，而不是先查动机。",
    "你的国家立场防御性处在中间带：多数时候能保持独立判断，但在冲突明显的议题上仍可能偏内群体。你会在意形象，但通常不把维护形象当成讨论的第一优先级；对外部批评，你也还能部分区分「抹黑」和「有依据的指出」。",
    "你在国家形象维护上防御性偏高：对外场合更倾向先维护整体形象，把尖锐批评先看成需要警惕的信号，而非待核实的信息。你更容易对「只讲问题、不讲成绩」的人产生动机怀疑，也更倾向在争议中优先「站稳」而不是「吵明白」。"
  );

  const wText = seg(
    W,
    "你较少把外部世界理想化，也不太会用「国民性」去解释社会问题。中外成就大体用同一套尺子衡量，旅行、消费、求学时也不会默认「进口等于更好」。",
    "你对外部制度与文化有欣赏，但未形成系统性的「外优于中」预设。比较时仍保留情境判断：会承认对方某处更强，也会承认我们某处追得很快，不会把局部差距直接升格成整体落后。",
    "你更容易把外部制度、生活方式当作参照标准，对国内问题的归因也更苛刻，有时会滑向「整体不如人」的概括。看到差距时，你更倾向解释成结构性、难以追赶，而不是阶段性、可以改进。"
  );

  const bText = seg(
    B,
    "你的归因尺度相对稳定：对中外同类事件的情绪强度接近，不太会因为地点不同就自动切换严厉程度。这让你在跨立场对话里更容易对上频道。",
    "你存在一定尺度差异，但通常能意识到并作修正。偶尔发现自己对某方更苛刻时，还能拉回来重新对照事实，而不是一直用双重标准推进论证。",
    "你对中外同类事件容易使用不同尺子：对一方更严厉、对另一方更宽容。这是很多人争吵时真正对不上的地方——争的不是事实，是量尺。"
  );

  const eText = seg(
    E,
    "你更能容忍复杂性，也更愿意被新证据说服。面对立场不同的人，你更可能认为对方「角度不同」，而不是「要么蠢要么坏」。",
    "你偶尔会用简单原则概括复杂现象，但仍保留修正空间。一旦出现足够有力的证据，你通常还改得动，不会把「我早就知道」当成默认结尾。",
    "你更依赖简单叙事和「背后一定有事」的解释，立场一旦形成就较难被证据撼动。中立表述在你眼里也更像伪装，而不是一种可能成立的描述方式。"
  );

  const typeLead = {
    A: "两个主轴组合起来，接近舆论场常说的「小粉红」画像：内群体防御强，外部理想化弱。",
    B: "两个主轴组合起来，接近「崇洋媚外」画像：外部参照高，国内叙事接受度低。",
    C: "两个主轴同时偏高，不是中间派，而是标准不统一——对不同对象切换尺子。",
    D: "两个主轴都未明显偏高，更接近就事论事、对中外大体同一套标准。",
    "A′": "偏国家主义，但尚未到绝对化；对外评价仍保留部分弹性。",
    "W′": "偏外部理想化，国家立场防御性仍在中间带。",
    "A″": "温和认同国内叙事，防御性未到极端，通常仍能对话。",
    "B′": "更倾向外部叙事，但尚未形成系统性的逆向民族倾向。",
    "D′": "两边极端倾向都低，通常更少情绪化、更少绝对化判断。",
  }[type.code];

  const risk =
    N >= 3.6
      ? "值得自查的是：看到不利信息时，你第一反应是核实来源，还是先判断立场？你能否同时承认「对方可能夸大」和「我们确实有短板」？高分不等于错误，但若某条判断无法被任何证据推翻，它就更接近信仰，而不是判断。"
      : W >= 3.6
        ? "值得自查的是：你对外部的欣赏，有多少来自具体证据，有多少来自「他山之石」的默认正确？国内问题是否被你放大成结构性无解？高分不等于清醒，有时只是把自卑包装成了理性。"
        : "值得自查的是：你最近一次改变看法，是因为新证据，还是因为立场对齐？你能否说清「我反对的到底是事实，还是说话的人」？中庸本身不是美德，可被证据修正才是。";

  const closing =
    "这四条指数描述的是你习惯怎么过滤信息、怎么归因，而不是你「对不对」或「爱不爱国」。更有用的用法是：挑出自己最高的一条，回忆最近三次相关争论，看看是事实层面没对齐，还是尺子本身就不一样。";

  return [typeLead, nText, wText, bText, eText, risk, closing].join("");
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
    <p style="font-size:13px;color:var(--ink-3);">指数速览：N=${N.toFixed(1)} · W=${W.toFixed(1)} · B=${B.toFixed(1)} · E=${E.toFixed(1)}（以 3.0 为中点，&gt;3.5 偏高，&lt;2.8 偏低）</p>
    ${extrasHtml}
    <p style="color:var(--ink-3);font-size:13px;">
      分数反映的是态度结构，不是人品或智商。高分不等于错误，低分也不等于清醒。
    </p>
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
