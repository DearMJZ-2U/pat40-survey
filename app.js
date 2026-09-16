/* PAT-40 · 政治态度倾向量表 */

const LIKERT = [
  { v: 1, label: "非常不同意" },
  { v: 2, label: "比较不同意" },
  { v: 3, label: "不好说" },
  { v: 4, label: "比较同意" },
  { v: 5, label: "非常同意" },
];

/** 维度：D1–D8 */
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

/** 40 题；reverse: true 表示反向计分 */
const QUESTIONS = [
  // D1 国家形象防御
  { id: 1, dim: "D1", text: "当外国媒体批评中国的人权状况时，我的第一反应是「他们又在抹黑我们」，而不是先核对事实。" },
  { id: 2, dim: "D1", text: "涉及国家形象时，即使自己有不同看法，我也倾向在公开场合保持一致立场。" },
  { id: 3, dim: "D1", text: "看到中国人或中国企业在海外取得成绩，我会明显感到与有荣焉。" },
  { id: 4, dim: "D1", text: "中国在国际评比中排名靠后时，我更相信是标准有偏见，而不是我们有短板。" },
  { id: 5, dim: "D1", text: "同样是中国的问题，外国人批评比中国人批评更让我反感。" },
  // D2 对外群体敌意
  { id: 6, dim: "D2", text: "对部分不友好的国家，我认为不必区分其政府与民间，整体上都不可信。" },
  { id: 7, dim: "D2", text: "面对双边摩擦，我认为对方大多数人本质上就是不希望中国好。" },
  { id: 8, dim: "D2", text: "外国普通人对中国的负面印象，主要来自对方政府和媒体的洗脑。" },
  { id: 9, dim: "D2", text: "我支持用抵制外国货/文化产品的方式，回应对方国家的政治挑衅。" },
  { id: 10, dim: "D2", text: "一个外国人做出不友好言行时，我会合理地把印象扩大到其国家的大多数人。" },
  // D3 批评者排斥
  { id: 11, dim: "D3", text: "在国内公开批评政策的人，往往不是建设性意见，而是发泄或带节奏。" },
  { id: 12, dim: "D3", text: "一个人如果长期只讲中国的问题、不讲成绩，我会怀疑他的动机。" },
  { id: 13, dim: "D3", text: "涉及敏感议题时，我认为「团结对外」比「内部辩论」更重要。" },
  { id: 14, dim: "D3", text: "把家人或资产放在国外的批评者，没有资格谈中国问题。" },
  { id: 15, dim: "D3", text: "如果有人指出某项政策的负面效果，我会更怀疑他是不是拿了境外的钱。", reverse: true },
  // D4 体制绝对化认同
  { id: 16, dim: "D4", text: "中国的发展道路具有普遍借鉴意义，其他发展中国家应当优先学习中国经验。" },
  { id: 17, dim: "D4", text: "与多数西方国家相比，中国现行体制在大多数领域更有效率、更符合国情。" },
  { id: 18, dim: "D4", text: "社会上出现的负面事件，更多是执行问题，而不是制度设计问题。" },
  { id: 19, dim: "D4", text: "西方式多党竞选不适合中国，讨论「要不要」意义不大，关键是用好现有体制。" },
  { id: 20, dim: "D4", text: "当前中国在大多数领域的进步速度，明显快于同等人均收入的其他国家。" },
  // D5 文化自卑与逆向民族
  { id: 21, dim: "D5", text: "和许多国家的人相比，中国人在公共场合的规则意识、边界感明显更差。" },
  { id: 22, dim: "D5", text: "中国很多社会问题的根源，可以追溯到某种深入骨髓的「国民性」。" },
  { id: 23, dim: "D5", text: "在审美、生活方式、公共礼仪等方面，发达国家的整体水准仍明显高于中国。" },
  { id: 24, dim: "D5", text: "中国原创的文化产品总体上缺乏世界一流的想象力。" },
  { id: 25, dim: "D5", text: "如果长期生活，我会明显更倾向选一个西方发达国家而不是中国一线城市。", reverse: true },
  // D6 外部制度理想化
  { id: 26, dim: "D6", text: "发达国家的法治和社会信任水平，是中国未来几十年难以达到的。" },
  { id: 27, dim: "D6", text: "欧美在处理言论自由、公民权利上的做法，整体上比中国更接近「正确答案」。" },
  { id: 28, dim: "D6", text: "中国教育/科研/医疗对标北欧或日本，差距是系统性的、难以靠努力弥补的。" },
  { id: 29, dim: "D6", text: "外国企业、外国学术机构提供的东西，平均而言质量更高、更值得信赖。" },
  { id: 30, dim: "D6", text: "中国做得好往往是「特殊国情」的结果；外国做得好才是可复制的「正常状态」。", reverse: true },
  // D7 归因双重标准
  { id: 31, dim: "D7", text: "同样问题发生在中国我会更严厉批评；发生在国外我会更多找客观原因。" },
  { id: 32, dim: "D7", text: "中国出现负面新闻我倾向于先问责；国外同样新闻我倾向于先同情当事方。", reverse: true },
  { id: 33, dim: "D7", text: "中国领先时我强调短期红利；外国领先时我强调长期实力。" },
  { id: 34, dim: "D7", text: "我发现自己对中外同类事件的情绪反应强度，经常差别很大。" },
  { id: 35, dim: "D7", text: "对欣赏的国家我主动找它好的证据；对反感的国家我主动找它差的证据。" },
  // D8 认知僵化与阴谋论
  { id: 36, dim: "D8", text: "涉及国际博弈时，公开理由大多不是真实动机，背后一定另有隐情。" },
  { id: 37, dim: "D8", text: "复杂的社会现象，通常可以用一两条简单原则解释清楚。" },
  { id: 38, dim: "D8", text: "和立场不同的人争论时，我更常觉得对方「要么蠢要么坏」，而不是「有道理但不完整」。" },
  { id: 39, dim: "D8", text: "我愿意承认：我长期持有的某个政治判断，可能因为新证据而被推翻。", reverse: true },
  { id: 40, dim: "D8", text: "大多数「中立」「客观」的表述，其实都是某种立场的伪装。" },
];

const DIM_META = Object.fromEntries(DIMS.map((d) => [d.id, d]));

// ---------- state ----------
const state = {
  index: 0,
  answers: Array(QUESTIONS.length).fill(null),
};

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
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------- survey UI ----------
function renderQuestion() {
  const q = QUESTIONS[state.index];
  const dim = DIM_META[q.dim];
  const total = QUESTIONS.length;
  const answered = state.answers.filter((a) => a !== null).length;
  const pct = Math.round((answered / total) * 100);

  $("#progress-text").textContent = `${state.index + 1} / ${total}`;
  $("#progress-pct").textContent = `${pct}%`;
  $("#progress-fill").style.width = `${pct}%`;
  $("#dim-tag").textContent = `${dim.id} · ${dim.name}`;
  $("#q-text").textContent = q.text;

  const likert = $("#likert");
  likert.innerHTML = "";
  LIKERT.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "likert-option" + (state.answers[state.index] === opt.v ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[state.index] === opt.v ? "true" : "false");
    btn.innerHTML = `<span class="dot" aria-hidden="true"></span><span class="num">${opt.v}</span><span class="txt">${opt.label}</span>`;
    btn.addEventListener("click", () => selectAnswer(opt.v));
    likert.appendChild(btn);
  });

  $("#btn-prev").disabled = state.index === 0;
  const has = state.answers[state.index] !== null;
  $("#btn-next").disabled = !has;
  $("#btn-next").textContent = state.index === total - 1 ? "查看结果" : "下一题";

  // re-trigger card animation
  const card = $("#question-card");
  card.style.animation = "none";
  // force reflow
  void card.offsetWidth;
  card.style.animation = "";
}

function selectAnswer(value) {
  state.answers[state.index] = value;
  renderQuestion();
  // auto-advance shortly after selection (except last)
  if (state.index < QUESTIONS.length - 1) {
    setTimeout(() => {
      if (state.answers[state.index] === value) {
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
  if (state.answers[state.index] === null) return;
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finish();
  }
}

function finish() {
  const incomplete = state.answers.some((a) => a === null);
  if (incomplete) {
    const first = state.answers.findIndex((a) => a === null);
    state.index = first;
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
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    dimScores[d.id] = round1(avg);
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
  // thresholds: buffer band around 3.0
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
    // nLow && wLow
    code = "D′";
    name = "低双极 · 清醒观察型";
    brief = "两边极端倾向都低，通常更少情绪化、更少绝对化判断。";
  }

  const extras = [];
  if (B >= 3.6) extras.push("双重标准倾向较高：对中外同类事件使用不同尺子的概率大。");
  else if (B <= 2.4) extras.push("双重标准倾向较低：对中外事件大致一视同仁。");
  if (E >= 3.6) extras.push("认知僵化/阴谋论倾向较高：更依赖简单叙事，更难被证据改变。");
  else if (E <= 2.4) extras.push("认知开放度较好：更可能承认复杂性，也更愿意被证据说服。");

  return { code, name, brief, extras };
}

// ---------- result UI ----------
function renderResult(result) {
  const { dimScores, N, W, B, E, type } = result;

  $("#result-type-lead").textContent =
    "以下结果基于你在 40 题上的作答。两个主指数并非互斥，交叉后得到整体画像。";
  $("#type-badge").innerHTML = `<span class="code">${type.code}</span><span>${type.name}</span>`;

  // index cards
  const cards = [
    { key: "n", label: "N · 国家主义倾向", value: N, hint: "小粉红倾向" },
    { key: "w", label: "W · 崇外倾向", value: W, hint: "崇洋媚外倾向" },
    { key: "b", label: "B · 双重标准", value: B, hint: "归因尺度差异" },
    { key: "e", label: "E · 极端化思维", value: E, hint: "绝对化 / 阴谋论" },
  ];
  const cardsEl = $("#index-cards");
  cardsEl.innerHTML = cards
    .map((c) => {
      const pct = Math.max(0, Math.min(100, ((c.value - 1) / 4) * 100));
      return `
        <div class="index-card ${c.key}">
          <span class="label">${c.label}</span>
          <div class="value">${c.value.toFixed(1)}</div>
          <div class="bar"><i data-w="${pct}"></i></div>
        </div>`;
    })
    .join("");

  // dim list
  const dimList = $("#dim-list");
  dimList.innerHTML = DIMS.map((d) => {
    const v = dimScores[d.id];
    const pct = ((v - 1) / 4) * 100;
    return `
      <div class="dim-row">
        <span class="name">${d.id} · ${d.name}</span>
        <span class="score">${v.toFixed(1)}</span>
        <div class="track"><i data-w="${pct}"></i></div>
      </div>`;
  }).join("");

  // animate bars
  requestAnimationFrame(() => {
    document.querySelectorAll(".index-card .bar > i, .dim-row .track > i").forEach((el) => {
      el.style.width = `${el.dataset.w}%`;
    });
  });

  // radar
  drawRadar(dimScores);

  // interpret
  const extrasHtml =
    type.extras.length > 0
      ? `<p><strong>附加信号</strong><br />${type.extras.join("<br />")}</p>`
      : "";
  $("#interpret").innerHTML = `
    <h3>结果解读</h3>
    <p><strong>${type.code} · ${type.name}</strong> — ${type.brief}</p>
    <p>
      N（国家主义）=${N.toFixed(1)} · W（崇外）=${W.toFixed(1)} ·
      B（双标）=${B.toFixed(1)} · E（极端化）=${E.toFixed(1)}。
      以 3.0 为中点，&gt;3.5 视为偏高，&lt;2.8 视为偏低。
    </p>
    ${extrasHtml}
    <p style="color:var(--ink-3);font-size:13px;">
      提醒：分数反映的是态度结构，不是人品或智商。高分人群也可能在具体议题上判断正确，
      低分人群也可能判断失误。更有价值的用法是：对照自己的高分维度，检查是否存在可被证据推翻的绝对化信念。
    </p>
  `;

  // legend
  $("#radar-legend").innerHTML = DIMS.map(
    (d) => `<span><i style="background:${colorForSide(d.side)}"></i>${d.id} ${d.name} ${dimScores[d.id].toFixed(1)}</span>`
  ).join("");

  // store for copy
  window.__patResult = result;
}

function colorForSide(side) {
  return (
    { N: "#c45c26", W: "#2563eb", B: "#7c3aed", E: "#0f766e" }[side] || "#1f5c4d"
  );
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

  // grid polygons
  for (let lv = 1; lv <= levels; lv++) {
    const r = (maxR * lv) / levels;
    const pts = Array.from({ length: n }, (_, i) => pointAt(i, r).join(",")).join(" ");
    g += `<polygon points="${pts}" fill="none" stroke="#e2ddd4" stroke-width="1" />`;
  }

  // axes
  for (let i = 0; i < n; i++) {
    const [x, y] = pointAt(i, maxR);
    g += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e2ddd4" stroke-width="1" />`;
  }

  // labels
  DIMS.forEach((d, i) => {
    const [x, y] = pointAt(i, maxR + 22);
    const anchor = x < cx - 4 ? "end" : x > cx + 4 ? "start" : "middle";
    g += `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" font-size="11" fill="#4a4a4a" font-family="inherit">${d.id}</text>`;
  });

  // data polygon
  const dataPts = DIMS.map((d, i) => pointAt(i, valueToR(dimScores[d.id])).join(",")).join(" ");
  g += `<polygon points="${dataPts}" fill="rgba(31,92,77,0.18)" stroke="#1f5c4d" stroke-width="2" stroke-linejoin="round" />`;

  // dots
  DIMS.forEach((d, i) => {
    const [x, y] = pointAt(i, valueToR(dimScores[d.id]));
    g += `<circle cx="${x}" cy="${y}" r="3.5" fill="${colorForSide(d.side)}" stroke="#fff" stroke-width="1.5" />`;
  });

  svg.innerHTML = g;
}

function copySummary() {
  const r = window.__patResult;
  if (!r) return;
  const lines = [
    "【PAT-40 政治态度倾向量表 · 结果】",
    `分型：${r.type.code} · ${r.type.name}`,
    r.type.brief,
    "",
    `N 国家主义倾向：${r.N.toFixed(1)}`,
    `W 崇外倾向：${r.W.toFixed(1)}`,
    `B 双重标准：${r.B.toFixed(1)}`,
    `E 极端化思维：${r.E.toFixed(1)}`,
    "",
    "八维：",
    ...DIMS.map((d) => `  ${d.id} ${d.name}：${r.dimScores[d.id].toFixed(1)}`),
  ];
  if (r.type.extras.length) {
    lines.push("", ...r.type.extras);
  }
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
  } catch {
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
  showScreen("intro");
}

// ---------- events ----------
$("#btn-start").addEventListener("click", () => {
  state.index = 0;
  renderQuestion();
  showScreen("survey");
});
$("#btn-prev").addEventListener("click", goPrev);
$("#btn-next").addEventListener("click", goNext);
$("#btn-copy").addEventListener("click", copySummary);
$("#btn-restart").addEventListener("click", restart);

// keyboard support on desktop
document.addEventListener("keydown", (e) => {
  if (!screens.survey.classList.contains("active")) return;
  if (e.key >= "1" && e.key <= "5") {
    selectAnswer(Number(e.key));
  } else if (e.key === "ArrowLeft") {
    goPrev();
  } else if (e.key === "ArrowRight" || e.key === "Enter") {
    goNext();
  }
});
