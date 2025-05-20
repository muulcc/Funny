// Firebase 配置 - 請使用您自己的專案金鑰
const firebaseConfig = {
  apiKey: "AIzaSyBQuIPDMc3sOfSkfO7FwVIprFKSKSZo8aE",
  authDomain: "data-a8ffa.firebaseapp.com",
  databaseURL: "https://data-a8ffa-default-rtdb.firebaseio.com", // Realtime Database 的 URL
  projectId: "data-a8ffa",
  storageBucket: "data-a8ffa.firebasestorage.app",
  messagingSenderId: "938758976769",
  appId: "1:938758976769:web:86c65a16b6dd12c03f9700"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // **使用 Firebase Realtime Database**

// 題目資料 (完整的題目列表)
const quizData = [
  {
    question: "台灣最高峰是哪一座山？",
    options: ["雪山", "合歡山", "玉山", "大霸尖山"],
    answer: "玉山",
    explanation: "玉山是台灣最高峰，海拔3,952公尺。"
  },
  {
    question: "每年的地球日是幾月幾日？",
    options: ["4月22日", "3月21日", "6月5日", "5月1日"],
    answer: "4月22日",
    explanation: "地球日訂在每年的4月22日，是推廣環境保護的重要日子。"
  },
  {
    question: "泡麵發明國是哪一國？",
    options: ["日本", "韓國", "台灣", "中國"],
    answer: "日本",
    explanation: "泡麵由日本人安藤百福於1958年發明。"
  },
  {
    question: "台灣的國花是什麼？",
    options: ["菊花", "蓮花", "梅花", "櫻花"],
    answer: "梅花",
    explanation: "梅花象徵堅毅與純潔，是台灣的國花。"
  },
  {
    question: "2024年巴黎奧運的官方吉祥物是？",
    options: ["貓頭鷹", "法國鬥牛犬", "自由帽精靈", "獅子"],
    answer: "自由帽精靈",
    explanation: "名為“Phryges”，象徵自由與法國精神。"
  },
  {
    question: "哪一個不是 HTML 的標籤？",
    options: ["<div>", "<span>", "<link>", "<stylee>"],
    answer: "<stylee>",
    explanation: "stylee 是錯誤標籤，正確為 <style>。"
  },
  {
    question: "人體中最大的器官是？",
    options: ["肺", "肝", "皮膚", "腦"],
    answer: "皮膚",
    explanation: "皮膚是人體面積最大的器官。"
  },
  {
    question: "台灣第一間大學是？",
    options: ["台灣大學", "成功大學", "交通大學", "中興大學"],
    answer: "台灣大學",
    explanation: "前身為日治時期的台北帝國大學，1928年創立。"
  },
  {
    question: "哪一種能源屬於再生能源？",
    options: ["石油", "天然氣", "風力", "煤炭"],
    answer: "風力",
    explanation: "風力是可再生能源，不會耗竭。"
  },
  {
    question: "下列哪一位是諾貝爾和平獎得主？",
    options: ["馬丁路德金恩", "馬克祖克柏", "史蒂夫賈伯斯", "馬斯克"],
    answer: "馬丁路德金恩",
    explanation: "他因推動非暴力的民權運動獲獎。"
  },
  {
    question: "哪一個是台灣的原住民族？",
    options: ["阿美族", "朝鮮族", "納西族", "漢族"],
    answer: "阿美族",
    explanation: "阿美族是台灣原住民族之一。"
  },
  {
    question: "以下哪一種垃圾屬於資源回收？",
    options: ["用過的衛生紙", "鋁罐", "廚餘", "保麗龍碗"],
    answer: "鋁罐",
    explanation: "鋁罐可回收，能重新製造成新產品。"
  },
  {
    question: "2022年世界盃足球賽在哪個國家舉行？",
    options: ["卡達", "俄羅斯", "美國", "英國"],
    answer: "卡達",
    explanation: "2022 世界盃首次在中東國家卡達舉辦。"
  },
  {
    question: "哪一種程式語言常用來設計網站前端？",
    options: ["Python", "Java", "C#", "JavaScript"],
    answer: "JavaScript",
    explanation: "JavaScript 是網頁前端的主要語言。"
  },
  {
    question: "最早登陸月球的國家是？",
    options: ["中國", "俄羅斯", "美國", "英國"],
    answer: "美國",
    explanation: "阿姆斯壯於1969年代表美國登月。"
  },
  {
    question: "貓咪聽得見的音頻比人類多幾倍？",
    options: ["2倍", "4倍", "10倍", "20倍"],
    answer: "4倍",
    explanation: "貓的聽覺可感知高頻聲音，是人類的4倍範圍。"
  },
  {
    question: "紙錢焚燒造成的主要污染物是？",
    options: ["二氧化碳", "PM2.5", "臭氧", "氨氣"],
    answer: "PM2.5",
    explanation: "燒金紙會產生懸浮微粒PM2.5，影響空氣品質。"
  },
  {
    question: "手機在飛機上需開飛航模式是為了？",
    options: ["省電", "不干擾導航", "防爆炸", "防中毒"],
    answer: "不干擾導航",
    explanation: "手機訊號可能干擾飛機導航與通訊。"
  },
  {
    question: "哪一個台灣夜市以大腸包小腸聞名？",
    options: ["士林夜市", "瑞豐夜市", "逢甲夜市", "六合夜市"],
    answer: "逢甲夜市",
    explanation: "台中逢甲夜市是大腸包小腸的發源地之一。"
  },
  {
    question: "台灣最早的火車是哪一年通車？",
    options: ["1887年", "1891年", "1900年", "1925年"],
    answer: "1891年",
    explanation: "台灣第一段鐵路由劉銘傳建於1891年。"
  }
];

// 從題庫中隨機選取指定數量的題目
function getRandomQuestions(data, count) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 遊戲狀態變數
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let countdown;
let timeLeft = 15;
let answered = false;

// DOM 元素引用 (確保在任何函數使用前被宣告和初始化)
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const timerDisplay = document.getElementById("time");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");
const usernameInput = document.getElementById("username");
const leaderboardList = document.getElementById("leaderboard-list");


// 遊戲開始
function startGame() {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
  currentIndex = 0;
  score = 0;
  selectedQuestions = getRandomQuestions(quizData, 5);
  usernameInput.disabled = false; // 重新啟用用戶名輸入框
  document.querySelector('.score-submit button').disabled = false; // 重新啟用提交按鈕
  showQuestion();
  updateLeaderboard(); // 每次開始新遊戲時也更新一次排行榜
}

// 顯示題目
function showQuestion() {
  clearInterval(countdown);
  timeLeft = 15;
  answered = false;
  timerDisplay.textContent = timeLeft;
  nextButton.disabled = true;
  feedbackElement.textContent = "";

  const q = selectedQuestions[currentIndex];
  questionElement.textContent = `第 ${currentIndex + 1} 題：${q.question}`;

  optionsList.innerHTML = "";
  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(opt, li);
    optionsList.appendChild(li);
  });

  startCountdown();
}

// 啟動計時器
function startCountdown() {
  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0 && !answered) {
      clearInterval(countdown);
      answered = true;
      feedbackElement.textContent = "時間到！正確答案是：" + selectedQuestions[currentIndex].answer;
      disableOptions();
      nextButton.disabled = false;
    }
  }, 1000);
}

// 檢查答案
function checkAnswer(selected, clickedLi) {
  if (answered) return;
  answered = true;
  clearInterval(countdown);

  const q = selectedQuestions[currentIndex];
  const isCorrect = selected === q.answer;

  feedbackElement.textContent =
    (isCorrect ? "答對了！" : "答錯了！") + " " + q.explanation;
  if (isCorrect) {
    score += 10;
  } else {
    // 如果答錯，也顯示正確答案
    optionsList.querySelectorAll("li").forEach(li => {
        if (li.textContent === q.answer) {
            li.classList.add("correct");
        }
    });
  }

  optionsList.querySelectorAll("li").forEach(li => {
    li.onclick = null;
    li.classList.add("disabled");
    if (li.textContent === q.answer) {
      li.classList.add("correct");
    } else if (li === clickedLi && !isCorrect) { // 只有在點擊錯誤時才加 incorrect class
      li.classList.add("incorrect");
    }
  });

  nextButton.disabled = false;
}

// 禁用所有選項的點擊
function disableOptions() {
  optionsList.querySelectorAll("li").forEach(li => {
    li.onclick = null;
    li.classList.add("disabled");
  });
}

// 前往下一題
function nextQuestion() {
  currentIndex++;
  if (currentIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// 顯示結果頁面
function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreDisplay.textContent = score;
  usernameInput.value = ""; // 清空用戶名輸入框
  usernameInput.disabled = false; // 確保輸入框可編輯
  document.querySelector('.score-submit button').disabled = false; // 確保按鈕可點擊
  updateLeaderboard();
}

// 提交分數到 Firebase Realtime Database
function submitScore() {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("請輸入您的暱稱！");
    return;
  }

  // 將分數和名稱提交到 Realtime Database 的 'leaderboard' 節點
  // 使用 push() 會自動生成一個唯一的 ID 作為子節點
  db.ref("leaderboard").push({
    name: name,
    score: score,
    timestamp: firebase.database.ServerValue.TIMESTAMP // 記錄伺服器時間，用於排序
  })
  .then(() => {
    alert("分數已成功提交！");
    usernameInput.disabled = true; // 提交後禁用輸入框
    document.querySelector('.score-submit button').disabled = true; // 提交後禁用提交按鈕
    updateLeaderboard(); // 重新載入排行榜以顯示新分數
  })
  .catch((error) => {
    console.error("提交分數失敗：", error);
    alert("提交分數時發生錯誤，請稍後再試。");
  });
}

// 從 Firebase Realtime Database 讀取並更新排行榜
function updateLeaderboard() {
  // Realtime Database 查詢：按 'score' 降序排列，取前 10 名
  // 注意：Realtime Database 的 orderByChild().limitToLast() 配合反向排序來實現降序前N名
  db.ref("leaderboard").orderByChild("score").limitToLast(10).on("value", (snapshot) => {
    leaderboardList.innerHTML = ""; // 清空現有列表

    if (!snapshot.exists() && snapshot.numChildren() === 0) {
      leaderboardList.innerHTML = '<li>目前沒有排行榜資料。</li>';
      return;
    }

    const scores = [];
    snapshot.forEach(childSnapshot => {
      scores.push(childSnapshot.val());
    });

    // Realtime Database 的 limitToLast 取的是值最大的 N 個（如果是數字），
    // 或是最後 N 個（如果是時間戳），所以我們需要將這些結果進行反向排序來顯示最高分。
    // 這裡仍然需要先按分數降序排序，確保最高分在前
    const sortedScores = scores.sort((a, b) => b.score - a.score); // 按分數降序排序

    if (sortedScores.length === 0) {
        leaderboardList.innerHTML = '<li>目前沒有排行榜資料。</li>';
        return;
    }

    // 這次直接顯示「玩家名字：分數 分」，不再添加名次編號
    sortedScores.forEach((entry) => { // 注意：不再需要 index 參數
      const li = document.createElement("li");
      li.textContent = `${entry.name}：${entry.score} 分`; // 只顯示名字和分數
      leaderboardList.appendChild(li);
    });
  }, (error) => {
    console.error("讀取排行榜失敗：", error);
    leaderboardList.innerHTML = '<li>讀取排行榜失敗。</li>';
  });
}

// 頁面載入完成後初始化
// 將 startGame() 移到 DOMContentLoaded 外部，因為它會被 HTML 的 onclick 屬性觸發
// updateLeaderboard() 仍然在 DOMContentLoaded 中，確保頁面載入時就顯示排行榜
document.addEventListener('DOMContentLoaded', () => {
  updateLeaderboard();
});