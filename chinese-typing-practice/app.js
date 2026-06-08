const PRACTICE_TEXTS = [
  {
    id: "sentence-1",
    mode: "sentence",
    title: "日常短句",
    source: "节奏",
    content: "保持稳定的节奏，比一时的速度更重要。",
  },
  {
    id: "sentence-2",
    mode: "sentence",
    title: "专注训练",
    source: "输入法",
    content: "输入中文时，先确认候选词，再观察错误位置。",
  },
  {
    id: "sentence-3",
    mode: "sentence",
    title: "标点练习",
    source: "日常",
    content: "今天的计划是：读书、写作、练习打字。",
  },
  {
    id: "sentence-4",
    mode: "sentence",
    title: "灯下",
    source: "短句",
    content: "灯光落在纸页上，夜色便有了可以安放的地方。",
  },
  {
    id: "sentence-5",
    mode: "sentence",
    title: "慢行",
    source: "短句",
    content: "慢一点也没有关系，只要每一步都走在自己的方向里。",
  },
  {
    id: "sentence-6",
    mode: "sentence",
    title: "雨后",
    source: "短句",
    content: "雨后的城市像被重新擦亮，连风都带着清新的边缘。",
  },
  {
    id: "article-1",
    mode: "article",
    title: "清晨",
    source: "现代短篇",
    content:
      "清晨的窗外有柔和的光，街道慢慢醒来。人们带着各自的事情出门，也把新的可能带进了一天。",
  },
  {
    id: "article-2",
    mode: "article",
    title: "练习的意义",
    source: "现代短篇",
    content:
      "练习不是为了立刻变得完美，而是为了让身体记住正确的方法。每一次准确的输入，都会让下一次更轻松。",
  },
  {
    id: "article-3",
    mode: "article",
    title: "窗边的书",
    source: "现代短篇",
    content:
      "午后的光停在窗台上，像一枚安静的书签。翻过一页，尘埃在空气里缓慢浮动，心也跟着落到更深的地方。",
  },
  {
    id: "article-4",
    mode: "article",
    title: "山间小路",
    source: "现代短篇",
    content:
      "山间的小路被树影分成明暗两半。脚步声落在青苔旁边，溪水从石缝里经过，把远处的鸟鸣带得更清楚。",
  },
  {
    id: "article-5",
    mode: "article",
    title: "给明天",
    source: "现代短篇",
    content:
      "把今天没有完成的事轻轻放下，不是放弃，而是给明天留一盏灯。等精神回来，再把线头重新接上。",
  },
  {
    id: "article-6",
    mode: "article",
    title: "荷塘一隅",
    source: "改写练习",
    content:
      "月光铺在荷叶之间，水面有细细的纹路。远处偶尔传来一点声响，随即又被夜色收回，只剩清凉在四周流动。",
  },
  {
    id: "poem-1",
    mode: "poem",
    title: "登鹳雀楼",
    source: "王之涣",
    content: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
  },
  {
    id: "poem-2",
    mode: "poem",
    title: "春晓",
    source: "孟浩然",
    content: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
  },
  {
    id: "poem-3",
    mode: "poem",
    title: "静夜思",
    source: "李白",
    content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
  },
  {
    id: "poem-4",
    mode: "poem",
    title: "鹿柴",
    source: "王维",
    content: "空山不见人，但闻人语响。返景入深林，复照青苔上。",
  },
  {
    id: "poem-5",
    mode: "poem",
    title: "竹里馆",
    source: "王维",
    content: "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。",
  },
  {
    id: "poem-6",
    mode: "poem",
    title: "江雪",
    source: "柳宗元",
    content: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
  },
  {
    id: "poem-7",
    mode: "poem",
    title: "山居秋暝",
    source: "王维",
    content: "空山新雨后，天气晚来秋。明月松间照，清泉石上流。",
  },
  {
    id: "poem-8",
    mode: "poem",
    title: "陋室铭节选",
    source: "刘禹锡",
    content: "山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。",
  },
  {
    id: "poem-9",
    mode: "poem",
    title: "爱莲说节选",
    source: "周敦颐",
    content: "予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝。",
  },
];

const HANZI_BATCH_SIZE = 50;
const HANZI_DATA = Array.isArray(window.COMMON_HANZI) ? window.COMMON_HANZI : [];
const HANZI_TEXTS = HANZI_DATA.reduce((batches, _item, index) => {
  if (index % HANZI_BATCH_SIZE !== 0) {
    return batches;
  }

  const items = HANZI_DATA.slice(index, index + HANZI_BATCH_SIZE);
  const start = String(index + 1).padStart(4, "0");
  const end = String(index + items.length).padStart(4, "0");
  batches.push({
    id: `hanzi-${start}-${end}`,
    mode: "hanzi",
    title: `常用字 ${start}-${end}`,
    content: items.map((item) => item.char).join(""),
    items,
  });
  return batches;
}, []);
const ALL_TEXTS = [...PRACTICE_TEXTS, ...HANZI_TEXTS];
const STORAGE_KEY = "chineseTypingPracticeHistory";

const state = {
  currentText: ALL_TEXTS[0],
  target: ALL_TEXTS[0].content,
  startedAt: null,
  endedAt: null,
  timerId: null,
  isComposing: false,
  completed: false,
  mistakes: [],
};

const els = {
  textSelect: document.querySelector("#textSelect"),
  modeSelect: document.querySelector("#modeSelect"),
  punctuationField: document.querySelector("#punctuationField"),
  punctuationToggle: document.querySelector("#punctuationToggle"),
  pinyinHintField: document.querySelector("#pinyinHintField"),
  pinyinHintToggle: document.querySelector("#pinyinHintToggle"),
  restartButton: document.querySelector("#restartButton"),
  nextButton: document.querySelector("#nextButton"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  textTitle: document.querySelector("#textTitle"),
  textHint: document.querySelector("#textHint"),
  textLength: document.querySelector("#textLength"),
  referenceText: document.querySelector("#referenceText"),
  typingInput: document.querySelector("#typingInput"),
  compositionStatus: document.querySelector("#compositionStatus"),
  speedValue: document.querySelector("#speedValue"),
  speedUnit: document.querySelector("#speedUnit"),
  accuracyValue: document.querySelector("#accuracyValue"),
  timeValue: document.querySelector("#timeValue"),
  progressValue: document.querySelector("#progressValue"),
  progressBar: document.querySelector("#progressBar"),
  resultState: document.querySelector("#resultState"),
  historyList: document.querySelector("#historyList"),
};

function normalizeContent(content) {
  if (els.punctuationToggle.checked) {
    return content;
  }

  return content.replace(/[，。！？；：、“”‘’（）《》,.!?;:()[\]\s]/g, "");
}

function getFilteredTexts() {
  return ALL_TEXTS.filter((item) => item.mode === els.modeSelect.value);
}

function populateTextSelect() {
  const selectedId = els.textSelect.value;
  const texts = getFilteredTexts();
  els.textSelect.innerHTML = texts
    .map((item) => `<option value="${item.id}">${item.title}</option>`)
    .join("");

  const nextSelected = texts.some((item) => item.id === selectedId) ? selectedId : texts[0]?.id;
  els.textSelect.value = nextSelected;
}

function selectText(id) {
  const text = ALL_TEXTS.find((item) => item.id === id) || getFilteredTexts()[0] || ALL_TEXTS[0];
  state.currentText = text;
  state.target = isHanziMode() ? text.items.map((item) => item.plain).join(" ") : normalizeContent(text.content);
  resetSession();
}

function resetSession() {
  window.clearInterval(state.timerId);
  state.startedAt = null;
  state.endedAt = null;
  state.timerId = null;
  state.isComposing = false;
  state.completed = false;
  state.mistakes = [];
  els.typingInput.value = "";
  els.typingInput.disabled = false;
  syncModeControls();
  els.textTitle.textContent = state.currentText.title;
  els.textLength.textContent = getLengthLabel();
  els.textHint.textContent = isHanziMode()
    ? "看汉字输入拼音，用空格分隔每个音节。"
    : `${state.currentText.source || "练习文本"} · 输入框获得焦点后开始计时。`;
  setCompositionStatus("等待输入", false);
  renderReference("");
  updateStats("");
  els.resultState.innerHTML = "<p>完成一段练习后，这里会展示速度、准确率和错字复盘。</p>";
}

function syncModeControls() {
  const hanziMode = isHanziMode();
  els.punctuationField.classList.toggle("is-hidden", hanziMode);
  els.pinyinHintField.classList.toggle("is-hidden", !hanziMode);
  els.speedUnit.textContent = hanziMode ? " 音/分" : " 字/分";
  els.typingInput.placeholder = hanziMode
    ? "输入拼音并用空格分隔，例如：wo ai zhong wen。ü 可以输入为 v。"
    : "在这里输入上方文字，确认候选词后系统会判断正确与错误。";
}

function setCompositionStatus(text, isComposing) {
  els.compositionStatus.textContent = text;
  els.compositionStatus.classList.toggle("is-composing", isComposing);
}

function startTimer() {
  if (state.startedAt) {
    return;
  }

  state.startedAt = Date.now();
  state.timerId = window.setInterval(() => updateStats(els.typingInput.value), 250);
  els.textHint.textContent = isHanziMode() ? "正在练习拼音，注意音节之间的空格。" : "正在练习，保持节奏。";
}

function getElapsedSeconds() {
  if (!state.startedAt) {
    return 0;
  }

  const end = state.endedAt || Date.now();
  return Math.max(0, Math.floor((end - state.startedAt) / 1000));
}

function splitChars(text) {
  return Array.from(text);
}

function isHanziMode() {
  return state.currentText?.mode === "hanzi";
}

function getLengthLabel() {
  const total = getTargetUnits().length;
  return isHanziMode() ? `${total} 音节` : `${total} 字`;
}

function getTargetUnits() {
  if (isHanziMode()) {
    return state.currentText.items.map((item) => item.plain);
  }

  return splitChars(state.target);
}

function getInputUnits(input) {
  if (isHanziMode()) {
    return input
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(normalizePinyinInput)
      .slice(0, getTargetUnits().length);
  }

  return splitChars(input).slice(0, getTargetUnits().length);
}

function normalizePinyinInput(value) {
  const toneMap = new Map([
    ["ā", "a"],
    ["á", "a"],
    ["ǎ", "a"],
    ["à", "a"],
    ["ē", "e"],
    ["é", "e"],
    ["ě", "e"],
    ["è", "e"],
    ["ī", "i"],
    ["í", "i"],
    ["ǐ", "i"],
    ["ì", "i"],
    ["ō", "o"],
    ["ó", "o"],
    ["ǒ", "o"],
    ["ò", "o"],
    ["ū", "u"],
    ["ú", "u"],
    ["ǔ", "u"],
    ["ù", "u"],
    ["ǖ", "v"],
    ["ǘ", "v"],
    ["ǚ", "v"],
    ["ǜ", "v"],
    ["ü", "v"],
  ]);

  return value
    .toLowerCase()
    .replaceAll("u:", "v")
    .split("")
    .map((char) => toneMap.get(char) || char)
    .join("")
    .replace(/[^a-zv]/g, "");
}

function analyzeInput(input) {
  const targetChars = getTargetUnits();
  const inputChars = getInputUnits(input);
  let correct = 0;
  const mistakes = [];

  inputChars.forEach((actual, index) => {
    const expected = targetChars[index];
    if (actual === expected) {
      correct += 1;
    } else {
      mistakes.push({
        index,
        expected,
        actual,
        label: isHanziMode() ? state.currentText.items[index].char : expected,
      });
    }
  });

  return {
    targetChars,
    inputChars,
    correct,
    wrong: mistakes.length,
    mistakes,
    typed: inputChars.length,
  };
}

function renderReference(input) {
  if (isHanziMode()) {
    renderHanziReference(input);
    return;
  }

  const { targetChars, inputChars } = analyzeInput(input);
  const currentIndex = Math.min(inputChars.length, targetChars.length - 1);
  const html = targetChars
    .map((char, index) => {
      const typed = inputChars[index];
      const classes = ["char"];

      if (typed === undefined) {
        classes.push(index === currentIndex ? "current" : "pending");
      } else if (typed === char) {
        classes.push("correct");
      } else {
        classes.push("wrong");
      }

      return `<span class="${classes.join(" ")}">${escapeHtml(char)}</span>`;
    })
    .join("");

  els.referenceText.innerHTML = html;
}

function renderHanziReference(input) {
  const { targetChars, inputChars } = analyzeInput(input);
  const currentIndex = Math.min(inputChars.length, targetChars.length - 1);
  const showPinyin = els.pinyinHintToggle.checked;
  const html = state.currentText.items
    .map((item, index) => {
      const typed = inputChars[index];
      const classes = ["hanzi-card"];

      if (typed === undefined) {
        classes.push(index === currentIndex ? "current" : "pending");
      } else if (typed === targetChars[index]) {
        classes.push("correct");
      } else {
        classes.push("wrong");
      }

      return `
        <span class="${classes.join(" ")}">
          <strong>${escapeHtml(item.char)}</strong>
          ${showPinyin ? `<small>${escapeHtml(item.pinyin)}</small>` : "<small>&nbsp;</small>"}
        </span>
      `;
    })
    .join("");

  els.referenceText.innerHTML = `<div class="hanzi-grid">${html}</div>`;
}

function updateStats(input) {
  const { correct, wrong, typed, targetChars } = analyzeInput(input);
  const elapsed = getElapsedSeconds();
  const minutes = Math.max(elapsed / 60, 1 / 60);
  const speed = state.startedAt ? Math.round(correct / minutes) : 0;
  const accuracy = typed === 0 ? 100 : Math.max(0, Math.round((correct / typed) * 100));
  const progress = targetChars.length === 0 ? 0 : Math.min(100, Math.round((typed / targetChars.length) * 100));

  els.speedValue.textContent = String(speed);
  els.accuracyValue.textContent = String(accuracy);
  els.timeValue.textContent = formatTime(elapsed);
  els.progressValue.textContent = String(progress);
  els.progressBar.style.width = `${progress}%`;

  return { correct, wrong, typed, targetChars, elapsed, speed, accuracy, progress };
}

function handleCommittedInput() {
  if (state.completed) {
    return;
  }

  startTimer();

  const maxLength = getTargetUnits().length;
  if (isHanziMode()) {
    const tokens = els.typingInput.value.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > maxLength) {
      els.typingInput.value = tokens.slice(0, maxLength).join(" ");
    }
  } else {
    const chars = splitChars(els.typingInput.value);
    if (chars.length > maxLength) {
      els.typingInput.value = chars.slice(0, maxLength).join("");
    }
  }

  const input = els.typingInput.value;
  renderReference(input);
  const result = updateStats(input);

  if (result.typed >= result.targetChars.length) {
    finishSession(result);
  }
}

function finishSession(result) {
  state.completed = true;
  state.endedAt = Date.now();
  window.clearInterval(state.timerId);

  const finalStats = {
    ...result,
    elapsed: getElapsedSeconds(),
    mistakes: analyzeInput(els.typingInput.value).mistakes,
  };

  state.mistakes = finalStats.mistakes;
  els.typingInput.disabled = true;
  els.textHint.textContent = "练习完成，可以重新开始或换一段。";
  setCompositionStatus("已完成", false);
  renderResult(finalStats);
  saveHistory(finalStats);
  renderHistory();
}

function renderResult(result) {
  const unit = isHanziMode() ? "音/分" : "字/分";
  const mistakeHtml = result.mistakes.length
    ? `<div class="mistake-list">${result.mistakes
        .slice(0, 24)
        .map((item) => {
          const actual = item.actual.trim() ? item.actual : "空格";
          const expected = isHanziMode() ? `${item.label} ${item.expected}` : item.expected;
          return `<span class="mistake-chip">${escapeHtml(expected)} → ${escapeHtml(actual)}</span>`;
        })
        .join("")}</div>`
    : `<p>没有错字，手感很漂亮。</p>`;

  els.resultState.innerHTML = `
    <div class="result-grid">
      <div class="result-box"><span>速度</span><strong>${result.speed} ${unit}</strong></div>
      <div class="result-box"><span>准确率</span><strong>${result.accuracy}%</strong></div>
      <div class="result-box"><span>用时</span><strong>${formatTime(result.elapsed)}</strong></div>
      <div class="result-box"><span>错字</span><strong>${result.mistakes.length}</strong></div>
    </div>
    ${mistakeHtml}
  `;
}

function saveHistory(result) {
  const history = loadHistory();
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: state.currentText.title,
    date: new Date().toLocaleString("zh-CN", { hour12: false }),
    speed: result.speed,
    unit: state.currentText.mode === "hanzi" ? "音/分" : "字/分",
    accuracy: result.accuracy,
    elapsed: result.elapsed,
    mistakes: result.mistakes.length,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...history].slice(0, 12)));
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function renderHistory() {
  const history = loadHistory();
  if (history.length === 0) {
    els.historyList.innerHTML = `<li class="empty-history">还没有记录。</li>`;
    return;
  }

  els.historyList.innerHTML = history
    .map(
      (item) => `
        <li>
          <strong>${escapeHtml(item.title)} · ${item.speed} ${item.unit || "字/分"}</strong>
          <span>${escapeHtml(item.date)} · 准确率 ${item.accuracy}% · 错字 ${item.mistakes}</span>
        </li>
      `,
    )
    .join("");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function chooseNextText() {
  const texts = getFilteredTexts();
  const currentIndex = texts.findIndex((item) => item.id === state.currentText.id);
  const next = texts[(currentIndex + 1) % texts.length];
  els.textSelect.value = next.id;
  selectText(next.id);
  els.typingInput.focus();
}

els.modeSelect.addEventListener("change", () => {
  populateTextSelect();
  selectText(els.textSelect.value);
});

els.textSelect.addEventListener("change", () => selectText(els.textSelect.value));

els.punctuationToggle.addEventListener("change", () => {
  state.target = normalizeContent(state.currentText.content);
  resetSession();
});

els.pinyinHintToggle.addEventListener("change", () => {
  renderReference(els.typingInput.value);
});

els.restartButton.addEventListener("click", () => {
  resetSession();
  els.typingInput.focus();
});

els.nextButton.addEventListener("click", chooseNextText);

els.clearHistoryButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
});

els.typingInput.addEventListener("compositionstart", () => {
  state.isComposing = true;
  setCompositionStatus("正在选词", true);
});

els.typingInput.addEventListener("compositionend", () => {
  state.isComposing = false;
  setCompositionStatus("已确认", false);
  handleCommittedInput();
});

els.typingInput.addEventListener("input", () => {
  if (!state.isComposing) {
    setCompositionStatus("正在输入", false);
    handleCommittedInput();
  }
});

els.typingInput.addEventListener("paste", (event) => {
  event.preventDefault();
  setCompositionStatus("请手动输入", false);
});

populateTextSelect();
selectText(els.textSelect.value);
renderHistory();
