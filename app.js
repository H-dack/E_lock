const words = [
  { en: "confirm", jp: "確認する" },
  { en: "state", jp: "述べる" },
  { en: "process", jp: "処理する" },
  { en: "accept", jp: "受け入れる" },
  { en: "approve", jp: "承認する" },
  { en: "procederu", jp: "手続き" },
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
  { en: "commission(V)", jp: "委託する" },
  { en: "commission(N)", jp: "委員会" },
  { en: "ensure", jp: "保証する" },
  { en: "eligible", jp: "資格がある" },
  { en: "extensive", jp: "詳細な" },
  { en: "assign", jp: "割り当てる" },
  { en: "imply", jp: "暗示する" },
  { en: "agenda", jp: "議題" },
  { en: "appropriate", jp: "適切な" },
  { en: "certification", jp: "認定証" }
];

let current = 0;
let score = 0;

next();

function next() {
  current = Math.floor(Math.random() * words.length);

  document.getElementById("quiz").innerText =
    "英語: " + words[current].en;
}

function check() {
  let ans = document.getElementById("answer").value;

  if (ans === words[current].jp) {
    score++;
    document.getElementById("result").innerText = "正解！";
  } else {
    document.getElementById("result").innerHTML =
  `
  <div>
  不正解</p>
    <p>英語: ${words[current].en}</p>
    <p>日本語: ${words[current].jp}</p>
  </div>
  `;
  }

  document.getElementById("answer").value = "";

  document.getElementById("progress").innerText =
    score + "/5";

  if (score >= 5) {
    document.body.innerHTML =
      "<h1>解除完了！</h1>";
    return;
  }

  next();
}
