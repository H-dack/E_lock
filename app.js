const words = [
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

let current = 0;

/* ---------------------------
   未正解リスト
----------------------------*/
let remainingIndexes = [];

/* 最初に全部入れる */
for (let i = 0; i < words.length; i++) {
  remainingIndexes.push(i);
}

/* ---------------------------
   最初の問題
----------------------------*/
next();

/* ---------------------------
   次の問題
----------------------------*/
function next() {

  /* 全問クリア */
  if (remainingIndexes.length === 0) {

    document.getElementById("quiz").innerText = "";

    document.getElementById("end").innerHTML = `
      <h1>全問クリア！</h1>

      <button onclick="restartQuiz()">
        もう1回やる
      </button>

      <button onclick="closePage()">
        サイトを閉じる
      </button>
    `;

    return;
  }

  /* 未正解からランダム出題 */
  let randomIndex =
    Math.floor(Math.random() * remainingIndexes.length);

  current = remainingIndexes[randomIndex];

  document.getElementById("quiz").innerText =
    "英語: " + words[current].en;

  document.getElementById("answer").value = "";

  document.getElementById("result").innerHTML = "";

  /* 進捗 */
  document.getElementById("progress").innerText =
    "残り " + remainingIndexes.length + " 問";
}

/* ---------------------------
   回答チェック
----------------------------*/
function check() {

  let ans =
    document.getElementById("answer").value.trim();

  /* 正解 */
  if (ans === words[current].jp) {

    document.getElementById("result").innerHTML = `
      <div>
        <p>正解！</p>

        <p>
          ${words[current].en}
          =
          ${words[current].jp}
        </p>
      </div>
    `;

    /* 正解した問題をリストから削除 */
    remainingIndexes =
      remainingIndexes.filter(
        index => index !== current
      );

  }

  /* 不正解 */
  else {

    document.getElementById("result").innerHTML = `
      <div>
        <p>不正解</p>

        <p>
          英語:
          ${words[current].en}
        </p>

        <p>
          日本語:
          ${words[current].jp}
        </p>
      </div>
    `;

    /* 不正解はそのまま残る */
  }

  /* 次の問題 */
  setTimeout(() => {
    next();
  }, 1200);
}

/* ---------------------------
   リスタート
----------------------------*/
function restartQuiz() {

  remainingIndexes = [];

  for (let i = 0; i < words.length; i++) {
    remainingIndexes.push(i);
  }

  document.getElementById("result").innerHTML = "";

  document.getElementById("progress").innerText = "";

  document.getElementById("end").innerHTML = "";

  next();
}

/* ---------------------------
   疑似終了
----------------------------*/
function closePage() {

  window.location.href = "about:blank";

}