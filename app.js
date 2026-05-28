const wordQuestions = [
  { en: "appropriate", jp: "適切な" },
  { en: "ingredient", jp: "食材" },
  { en: "process", jp: "処理する" },
  { en: "accept", jp: "受け入れる" },
  { en: "approve", jp: "承認する" },
  { en: "procedure", jp: "手続き" },
  { en: "distribute", jp: "分配する" },
  { en: "immediately", jp: "すぐに" },
  { en: "expense", jp: "費用" },
  { en: "insurance", jp: "保険" },
  { en: "aspect", jp: "側面" },
  { en: "involved", jp: "関わった" },
  { en: "represent", jp: "代表を務める" },
  { en: "institution", jp: "機関" },
  { en: "assure", jp: "保証する" },
  { en: "relatively", jp: "比較的" },
  { en: "regard", jp: "みなす" },
  { en: "ensure", jp: "保証する" },
  { en: "eligible", jp: "資格がある" },
  { en: "extensive", jp: "詳細な" },
  { en: "assign", jp: "割り当てる" },
  { en: "imply", jp: "暗示する" },
  { en: "certification", jp: "認定証" },
  { en: "beverage", jp: "飲料" },
  { en: "lease", jp: "賃貸借" },
  { en: "inspect", jp: "検査する" },
  { en: "appliance", jp: "電化製品" },
  { en: "approximately", jp: "おおよそ" },
  { en: "hold X accountable", jp: "Xに責任があると考える" },
  { en: "omission", jp: "除外" },
  { en: "deliberate", jp: "故意の" },
  { en: "anticipate X", jp: "Xを楽しみに待つ" },
  { en: "look as if SV", jp: "SVのようだ" },
  { en: "underneath X", jp: "Xの下に" },
  { en: "consistent", jp: "一貫性のある" },
  { en: "credit X to Y", jp: "XをYのおかげとする" },
  { en: "in accordance with X", jp: "Xに従って" },
  { en: "evoke", jp: "呼び起こす" },
  { en: "adequate", jp: "十分な" },
  { en: "astound", jp: "愕然とする" },
  { en: "relief", jp: "安らぎ" },
  { en: "barely", jp: "ほとんど〜ない" },
  { en: "turn down X", jp: "Xを却下する" },
  { en: "stranded", jp: "立ち往生した" },
  { en: "across from X", jp: "Xの向かいに" },
  { en: "provided to SV", jp: "SVという条件で" },
  { en: "futhermore", jp: "さらに" },
  { en: "besides X", jp: "Xに加えて" },
  { en: "assign", jp: "割り当てる" },
  { en: "in order that SV", jp: "SVするために" },
  { en: "whenever SV", jp: "SVする時はいつでも" },
  { en: "evaluate", jp: "評価する" },
  { en: " thorough", jp: "徹底的な" },
  { en: "via", jp: "を経由して" },
  { en: "substancial", jp: "かなりの" },
  { en: "acquire", jp: "買収する" },
  { en: "above X", jp: "Xより上の" },
];

/* ---------------------------
   品詞問題
----------------------------*/
const partQuestions = [
  {word: "as of", answer: "前置詞"},
  {word: "such as", answer: "前置詞"},
  {word: "prior to", answer: "前置詞"},
  {word: "as of", answer: "前置詞"},
  {word: "such as", answer: "前置詞"},
  {word: "during", answer: "前置詞"},
  {word: "becouse of", answer: "前置詞"},
  {word: "due to", answer: "前置詞"},
  {word: "despite", answer: "前置詞"},
  {word: "in spite of", answer: "前置詞"},
  {word: "whereas", answer: "接続詞"},
  {word: "when", answer: "接続詞"},
  {word: "while", answer: "接続詞"},
  {word: "as soon as", answer: "接続詞"},
  {word: "once", answer: "接続詞"},
  {word: "if", answer: "接続詞"},
  {word: "unless", answer: "接続詞"},
  {word: "becouse", answer: "接続詞"},
  {word: "now that", answer: "接続詞"},
  {word: "so that", answer: "接続詞"},
  {word: "though, asthough, even though", answer: "接続詞"},
  {word: "whenever", answer: "接続詞"},
  {word: "even if", answer: "接続詞"},
  {word: "provided that", answer: "接続詞"},
  {word: "in case", answer: "接続詞"},
  {word: "lockily", answer: "副詞"},
  {word: "however", answer: "副詞"},
  {word: "therefore", answer: "副詞"},
  {word: "if not", answer: "その他"}
];

/* ---------------------------
   品詞の四択
----------------------------*/
const partChoices = [
  "接続詞",
  "前置詞",
  "副詞",
  "その他"
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
