const wordQuestions = [
  { en: "appropriate", jp: "適切な" },
  { en: "ingredient", jp: "食材" },
  { en: "process", jp: "処理する" },
  { en: "accept", jp: "受け入れる" },
  { en: "approve", jp: "承認する" },
  { en: "procedure", jp: "手続き" },
  { en: "property", jp: "不動産" },
  { en: "distribute", jp: "分配する" },
  { en: "immediately", jp: "すぐに" },
  { en: "expense", jp: "費用" },
  { en: "insurance", jp: "保険" },
  { en: "district", jp: "地区" },
  { en: "generous", jp: "寛大な" },
  { en: "aspect", jp: "側面" },
  { en: "involved", jp: "関わった" },
  { en: "represent", jp: "代表を務める" },
  { en: "institution", jp: "機関" },
  { en: "assure", jp: "保証する" },
  { en: "permit", jp: "許可証" },
  { en: "relatively", jp: "比較的" },
  { en: "regard", jp: "みなす" },
  { en: "commission (V)", jp: "委託する" },
  { en: "commission (N)", jp: "委員会" },
  { en: "ensure", jp: "保証する" },
  { en: "eligible", jp: "資格がある" },
  { en: "extensive", jp: "詳細な" },
  { en: "assign", jp: "割り当てる" },
  { en: "imply", jp: "暗示する" },
  { en: "agenda", jp: "議題" },
  { en: "certification", jp: "認定証" },
  { en: "beverage", jp: "飲料" },
  { en: "lease", jp: "賃貸借" },
  { en: "grocery", jp: "食品雑貨" },
  { en: "inspect", jp: "検査する" },
  { en: "appliance", jp: "電化製品" },
  { en: "approximately", jp: "おおよそ" }
];

/* ---------------------------
   品詞問題
----------------------------*/
const partQuestions = [
  {
    word: "appropriate",
    answer: "形容詞"
  },
  {
    word: "approve",
    answer: "動詞"
  },
  {
    word: "immediately",
    answer: "副詞"
  }
];

/* ---------------------------
   品詞の四択
----------------------------*/
const partChoices = [
  "名詞",
  "動詞",
  "形容詞",
  "副詞"
];

let mode = "";
let current = 0;
let remainingIndexes = [];

/* ---------------- */
function startWordQuiz() {

  mode = "word";

  startQuiz(wordQuestions);

}

/* ---------------- */
function startPartQuiz() {

  mode = "part";

  startQuiz(partQuestions);

}

/* ---------------- */
function startQuiz(list) {

  document.getElementById("menu").style.display =
    "none";

  document.getElementById("quizArea").style.display =
    "block";

  remainingIndexes = [];

  for (let i = 0; i < list.length; i++) {
    remainingIndexes.push(i);
  }

  next();

}

/* ---------------- */
function next() {

  let list =
    mode === "word"
      ? wordQuestions
      : partQuestions;

  /* 全問クリア */
  if (remainingIndexes.length === 0) {

    document.getElementById("quiz").innerText =
      "全問クリア！";

    document.getElementById("choices").innerHTML =
      "";

    document.getElementById("answer").style.display =
      "none";

    document.getElementById("answerButton").style.display =
      "none";

    return;
  }

  /* ランダム */
  let rand =
    Math.floor(Math.random() * remainingIndexes.length);

  current = remainingIndexes[rand];

  document.getElementById("result").innerText = "";

  document.getElementById("progress").innerText =
    "残り " + remainingIndexes.length + " 問";

  /* 単語問題 */
  if (mode === "word") {

    document.getElementById("quiz").innerText =
      list[current].en;

    document.getElementById("answer").style.display =
      "block";

    document.getElementById("answerButton").style.display =
      "block";

    document.getElementById("choices").innerHTML =
      "";

    document.getElementById("answer").value =
      "";

  }

  /* 品詞問題 */
  else {

    document.getElementById("quiz").innerText =
      list[current].word;

    document.getElementById("answer").style.display =
      "none";

    document.getElementById("answerButton").style.display =
      "none";

    let html = "";

    for (let choice of partChoices) {

      html += `
        <button onclick="checkPart('${choice}')">
          ${choice}
        </button>
      `;

    }

    document.getElementById("choices").innerHTML =
      html;

  }

}

/* ---------------- */
function check() {

  let ans =
    document.getElementById("answer").value.trim();

  let correct =
    wordQuestions[current].jp;

  judge(ans === correct, correct);

}

/* ---------------- */
function checkPart(choice) {

  let correct =
    partQuestions[current].answer;

  judge(choice === correct, correct);

}

/* ---------------- */
function judge(isCorrect, correctAnswer) {

  if (isCorrect) {

    document.getElementById("result").innerText =
      "正解！";

    remainingIndexes =
      remainingIndexes.filter(
        index => index !== current
      );

  }

  else {

    document.getElementById("result").innerText =
      "不正解 正解: " + correctAnswer;

  }

  setTimeout(() => {
    next();
  }, 1000);

}