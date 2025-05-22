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
  },
    {
    question: "哪一種動物可以睡覺時保持站立？",
    options: ["馬", "狗", "貓", "熊"],
    answer: "馬",
    explanation: "正確答案是 馬。牠們的腿部關節有特殊鎖定機制，可站著睡覺。"
  },
  {
    question: "哪一種動物打哈欠代表攻擊前警告？",
    options: ["河馬", "烏龜", "老虎", "蛇"],
    answer: "河馬",
    explanation: "正確答案是 河馬。牠張大嘴不是累，而是示威。"
  },
  {
    question: "哪一種動物的舌頭可以比身體還長？",
    options: ["變色龍", "鸚鵡", "青蛙", "獅子"],
    answer: "變色龍",
    explanation: "正確答案是 變色龍。舌頭長度可達身體的兩倍以上。"
  },
  {
    question: "哪一種食物能讓貓咪『嗨起來』？",
    options: ["貓薄荷", "魚乾", "牛奶", "起司"],
    answer: "貓薄荷",
    explanation: "正確答案是 貓薄荷。含有類似費洛蒙的化合物，會讓貓亢奮。"
  },
  {
    question: "人類哪根手指最快？",
    options: ["中指", "食指", "無名指", "小指"],
    answer: "中指",
    explanation: "正確答案是 中指。在反應測試中最靈活與用力效率最佳。"
  },
  {
    question: "最容易引起打嗝的飲品是？",
    options: ["汽水", "牛奶", "咖啡", "茶"],
    answer: "汽水",
    explanation: "正確答案是 汽水。碳酸氣體進入胃部引發打嗝反應。"
  },
  {
    question: "人在什麼情況下眼睛會自動停止眨？",
    options: ["盯著螢幕", "跳舞", "唱歌", "流汗"],
    answer: "盯著螢幕",
    explanation: "正確答案是 盯著螢幕。眼睛集中注意力時眨眼頻率會大幅減少。"
  },
  {
    question: "哪一國人平均每天喝最多咖啡？",
    options: ["芬蘭", "義大利", "美國", "巴西"],
    answer: "芬蘭",
    explanation: "正確答案是 芬蘭。每人每年平均喝約 12 公斤咖啡。"
  },
  {
    question: "哪種蔬菜其實是花的一部分？",
    options: ["花椰菜", "紅蘿蔔", "芹菜", "玉米"],
    answer: "花椰菜",
    explanation: "正確答案是 花椰菜。吃的其實是花苞。"
  },
  {
    question: "哪個器官能再生？",
    options: ["肝臟", "肺", "心臟", "腎"],
    answer: "肝臟",
    explanation: "正確答案是 肝臟。它能在部分切除後自行再生。"
  },
  {
    question: "哪個動物擁有最多心臟？",
    options: ["章魚", "螃蟹", "鴨嘴獸", "魚"],
    answer: "章魚",
    explanation: "正確答案是 章魚。牠有三顆心臟。"
  },
  {
    question: "一隻蝸牛可以睡多久？",
    options: ["三年", "三天", "三週", "三小時"],
    answer: "三年",
    explanation: "正確答案是 三年。某些蝸牛在乾燥環境中可休眠數年。"
  },
  {
    question: "哪一種動物沒有聲帶卻能發出聲音？",
    options: ["長頸鹿", "兔子", "貓頭鷹", "無尾熊"],
    answer: "長頸鹿",
    explanation: "正確答案是 長頸鹿。牠用低頻咕嚕聲與振動溝通。"
  },
  {
    question: "哪一種動物的心跳最慢？",
    options: ["樹懶", "北極熊", "獅子", "人類"],
    answer: "樹懶",
    explanation: "正確答案是 樹懶。心跳每分鐘約 8 次，代謝極慢。"
  },
  {
    question: "世界上最辣的辣椒叫什麼？",
    options: ["卡羅萊納死神", "朝天椒", "鬼椒", "泰式辣椒"],
    answer: "卡羅萊納死神",
    explanation: "正確答案是 卡羅萊納死神。辣度超過 200 萬史高維爾單位。"
  },
  {
    question: "以下哪個國家的國旗是非對稱？",
    options: ["尼泊爾", "瑞士", "義大利", "英國"],
    answer: "尼泊爾",
    explanation: "正確答案是 尼泊爾。是唯一非長方形且不對稱的國旗。"
  },
  {
    question: "哪種動物是唯一會笑的靈長類？",
    options: ["黑猩猩", "猴子", "大猩猩", "人類"],
    answer: "黑猩猩",
    explanation: "正確答案是 黑猩猩。牠們在玩耍時會發出類似笑聲。"
  },
  {
    question: "哪種水果的 DNA 與人類相似度超過 50%？",
    options: ["香蕉", "蘋果", "芒果", "葡萄"],
    answer: "香蕉",
    explanation: "正確答案是 香蕉。因為基本細胞功能基因高度相似。"
  },
  {
    question: "人一天平均會放幾次屁？",
    options: ["14次", "3次", "1次", "30次"],
    answer: "14次",
    explanation: "正確答案是 14次。產氣來自腸道菌分解與吞入氣體。"
  },
  {
    question: "哪種動物出生時的性別會改變？",
    options: ["小丑魚", "蝦", "鯊魚", "海豚"],
    answer: "小丑魚",
    explanation: "正確答案是 小丑魚。牠們會從雄性轉為雌性來領導族群。"
  },
    {
    question: "哪一個是世界上最小的鳥類？",
    options: ["蜂鳥", "麻雀", "燕子", "文鳥"],
    answer: "蜂鳥",
    explanation: "正確答案是 蜂鳥。體型非常小，甚至比一枚硬幣還輕。"
  },
  {
    question: "太空人穿太空服時不能？",
    options: ["抓耳朵", "喝水", "呼吸", "眨眼"],
    answer: "抓耳朵",
    explanation: "正確答案是 抓耳朵。太空頭盔無法碰到臉部或耳朵。"
  },
  {
    question: "海星有幾隻眼睛？",
    options: ["5隻", "0隻", "1隻", "10隻"],
    answer: "5隻",
    explanation: "正確答案是 5隻。海星的每條腕足末端各有一隻眼睛。"
  },
  {
    question: "巧克力是由哪種植物的種子製成？",
    options: ["可可樹", "咖啡樹", "可樂樹", "果樹"],
    answer: "可可樹",
    explanation: "正確答案是 可可樹。可可豆經發酵與烘焙後製成巧克力。"
  },
  {
    question: "最常見的元素是？",
    options: ["氫", "氧", "碳", "氮"],
    answer: "氫",
    explanation: "正確答案是 氫。氫約占宇宙質量的 75%。"
  },
  {
    question: "人類有幾根肋骨？",
    options: ["24根", "22根", "20根", "26根"],
    answer: "24根",
    explanation: "正確答案是 24根。左右各12根。"
  },
  {
    question: "下列哪個不是程式語言？",
    options: ["Firefox", "Java", "Python", "C++"],
    answer: "Firefox",
    explanation: "正確答案是 Firefox。它是瀏覽器，不是程式語言。"
  },
  {
    question: "哪種金屬可液態存在於室溫下？",
    options: ["汞", "鋁", "銅", "鋅"],
    answer: "汞",
    explanation: "正確答案是 汞。它是常溫下唯一天然液態金屬。"
  },
  {
    question: "冰淇淋快速融化的原因可能是？",
    options: ["脂肪含量低", "室溫高", "糖太多", "冰太厚"],
    answer: "室溫高",
    explanation: "正確答案是 室溫高。外界溫度會加速融化。"
  },
  {
    question: "哪一種飲料含最多咖啡因？",
    options: ["濃縮咖啡", "綠茶", "可樂", "巧克力奶"],
    answer: "濃縮咖啡",
    explanation: "正確答案是 濃縮咖啡。每毫升含量最高。"
  },
  {
    question: "人體有多少條染色體？",
    options: ["46條", "44條", "48條", "50條"],
    answer: "46條",
    explanation: "正確答案是 46條。每對 23 對，共 46 條染色體。"
  },
  {
    question: "哪種動物會冬眠？",
    options: ["刺蝟", "狗", "馬", "貓"],
    answer: "刺蝟",
    explanation: "正確答案是 刺蝟。牠在寒冬會降低代謝進入冬眠狀態。"
  },
  {
    question: "牛奶呈白色的原因是？",
    options: ["脂肪與蛋白質反射光線", "含糖太多", "含鐵", "鈣濃度太高"],
    answer: "脂肪與蛋白質反射光線",
    explanation: "正確答案是 脂肪與蛋白質反射光線。"
  },
  {
    question: "鯨魚是魚嗎？",
    options: ["不是，是哺乳動物", "是魚類", "不是，是爬蟲類", "不確定"],
    answer: "不是，是哺乳動物",
    explanation: "正確答案是 不是，是哺乳動物。牠們用肺呼吸並哺乳。"
  },
  {
    question: "人體中哪個器官最多水分？",
    options: ["大腦", "肝臟", "肺", "腎臟"],
    answer: "大腦",
    explanation: "正確答案是 大腦。水分占比高達約75%。"
  },
  {
    question: "手機飛航模式的功能是？",
    options: ["關閉無線傳輸", "防止病毒", "節省電量", "開啟5G"],
    answer: "關閉無線傳輸",
    explanation: "正確答案是 關閉無線傳輸。包括Wi-Fi、行動數據與藍牙。"
  },
  {
    question: "糖尿病主要是因為哪個器官失調？",
    options: ["胰臟", "腎臟", "肝臟", "心臟"],
    answer: "胰臟",
    explanation: "正確答案是 胰臟。胰島素分泌異常導致血糖失調。"
  },
  {
    question: "哪一個台灣縣市沒有靠海？",
    options: ["南投", "高雄", "宜蘭", "新竹"],
    answer: "南投",
    explanation: "正確答案是 南投。是台灣唯一完全不臨海的縣。"
  },
  {
    question: "哪一個是電腦的永久記憶裝置？",
    options: ["硬碟", "RAM", "暫存器", "快取"],
    answer: "硬碟",
    explanation: "正確答案是 硬碟。RAM 關機就會清除，硬碟才會保留。"
  },
    {
    question: "章魚有幾顆心臟？",
    options: ["3顆", "1顆", "4顆", "2顆"],
    answer: "3顆",
    explanation: "正確答案是 3顆。章魚有一顆主要心臟和兩顆鰓心。"
  },
  {
    question: "蜂蜜不會腐敗的原因是什麼？",
    options: ["低水分＋高酸性", "糖份高", "有防腐劑", "殺菌加熱"],
    answer: "低水分＋高酸性",
    explanation: "正確答案是 低水分＋高酸性。蜂蜜天然具有抗菌特性，因此幾乎不會壞。"
  },
  {
    question: "世界上最重的水果是？",
    options: ["榴槤", "南瓜", "西瓜", "酪梨"],
    answer: "南瓜",
    explanation: "正確答案是 南瓜。金氏紀錄中曾出現超過1,000公斤的巨型南瓜。"
  },
  {
    question: "香蕉實際上是？",
    options: ["草本植物", "水果樹", "蔓藤植物", "灌木類"],
    answer: "草本植物",
    explanation: "正確答案是 草本植物。雖然香蕉很高，但沒有木質莖，是草本。"
  },
  {
    question: "人的哪個器官沒有血液供應？",
    options: ["角膜", "舌頭", "皮膚", "耳朵"],
    answer: "角膜",
    explanation: "正確答案是 角膜。它透過淚液和房水獲得營養。"
  },
  {
    question: "金魚的記憶力長達多久？",
    options: ["數月", "數秒", "1分鐘", "5分鐘"],
    answer: "數月",
    explanation: "正確答案是 數月。實驗證明金魚記得聲音與餵食時間。"
  },
  {
    question: "下列哪一國是唯一沒有蚊子的國家？",
    options: ["冰島", "紐西蘭", "阿根廷", "日本"],
    answer: "冰島",
    explanation: "正確答案是 冰島。因為缺乏蚊子幼蟲可以生長的靜水。"
  },
  {
    question: "泡麵是由誰發明的？",
    options: ["安藤百福", "鄭成功", "松下幸之助", "川久保玲"],
    answer: "安藤百福",
    explanation: "正確答案是 安藤百福。他創立日清食品並發明泡麵。"
  },
  {
    question: "哪種食物會讓狗致命？",
    options: ["巧克力", "香蕉", "胡蘿蔔", "白飯"],
    answer: "巧克力",
    explanation: "正確答案是 巧克力。含有可可鹼，對狗有毒。"
  },
  {
    question: "哪一個星球的日出是藍色的？",
    options: ["火星", "木星", "金星", "地球"],
    answer: "火星",
    explanation: "正確答案是 火星。因為火星大氣中塵粒散射藍光。"
  },
  {
    question: "人在太空中會變高是因為？",
    options: ["脊椎伸展", "血液膨脹", "太空鞋", "無重力浮腫"],
    answer: "脊椎伸展",
    explanation: "正確答案是 脊椎伸展。無重力使脊椎骨頭之間的軟骨變寬。"
  },
  {
    question: "牛的胃有幾個？",
    options: ["4個", "1個", "2個", "3個"],
    answer: "4個",
    explanation: "正確答案是 4個。牛是反芻動物，有四個胃室。"
  },
  {
    question: "哈利波特的作者是誰？",
    options: ["J.K. 羅琳", "喬治·馬丁", "東野圭吾", "村上春樹"],
    answer: "J.K. 羅琳",
    explanation: "正確答案是 J.K. 羅琳。她是英國作家，創作哈利波特系列小說。"
  },
  {
    question: "世界第一個用來上網的圖像瀏覽器是？",
    options: ["Mosaic", "Internet Explorer", "Firefox", "Opera"],
    answer: "Mosaic",
    explanation: "正確答案是 Mosaic。它於1993年誕生，開啟圖像式網頁。"
  },
  {
    question: "貓能感知地震的原因之一是？",
    options: ["聽覺與觸覺敏銳", "有預知能力", "怕聲音", "天生警覺"],
    answer: "聽覺與觸覺敏銳",
    explanation: "正確答案是 聽覺與觸覺敏銳。牠們能感應到震動與聲波變化。"
  },
  {
    question: "烏龜是哺乳動物嗎？",
    options: ["不是", "是", "只有海龜是", "不一定"],
    answer: "不是",
    explanation: "正確答案是 不是。烏龜是爬蟲類，會產卵。"
  },
  {
    question: "哪一個元素是製造玻璃的主要成分？",
    options: ["矽", "鋁", "鈉", "鈣"],
    answer: "矽",
    explanation: "正確答案是 矽。砂子主要成分是二氧化矽，經加熱可製玻璃。"
  },
  {
    question: "閃電的溫度比太陽表面還高嗎？",
    options: ["是的", "不是", "兩者相同", "無法比較"],
    answer: "是的",
    explanation: "正確答案是 是的。閃電溫度可達 30,000°C，高於太陽表面約 6,000°C。"
  },
  {
    question: "哪一種血型被認為是萬能捐血者？",
    options: ["O型", "A型", "AB型", "B型"],
    answer: "O型",
    explanation: "正確答案是 O型。O型可捐給所有血型。"
  },
  {
    question: "哪一種動物可以進行光合作用？",
    options: ["海蛞蝓", "珊瑚", "水母", "青蛙"],
    answer: "海蛞蝓",
    explanation: "正確答案是 海蛞蝓。牠會吃藻類並利用其葉綠體製造能量。"
  },
   {
    question: "水的沸點是幾度C？",
    options: ["100°C", "120°C", "80°C", "90°C"],
    answer: "100°C",
    explanation: "正確答案是 100°C。"
  },
  {
    question: "下列哪一個是哺乳動物？",
    options: ["鯨魚", "章魚", "企鵝", "鱷魚"],
    answer: "鯨魚",
    explanation: "正確答案是 鯨魚。"
  },
  {
    question: "端午節吃什麼？",
    options: ["粽子", "湯圓", "月餅", "蘿蔔糕"],
    answer: "粽子",
    explanation: "正確答案是 粽子。"
  },
  {
    question: "竹子主要屬於哪一類植物？",
    options: ["草本植物", "木本植物", "蕨類植物", "藻類"],
    answer: "草本植物",
    explanation: "正確答案是 草本植物。"
  },
  {
    question: "哪一節日會掃墓？",
    options: ["清明節", "中秋節", "端午節", "重陽節"],
    answer: "清明節",
    explanation: "正確答案是 清明節。"
  },
  {
    question: "日月潭位於哪個縣？",
    options: ["南投縣", "嘉義縣", "高雄市", "台中市"],
    answer: "南投縣",
    explanation: "正確答案是 南投縣。"
  },
  {
    question: "下列哪個不是星球？",
    options: ["太陽", "木星", "金星", "火星"],
    answer: "太陽",
    explanation: "正確答案是 太陽。"
  },
  {
    question: "辛亥革命發生在哪一年？",
    options: ["1911年", "1901年", "1895年", "1921年"],
    answer: "1911年",
    explanation: "正確答案是 1911年。"
  },
  {
    question: "人體中最大的器官是？",
    options: ["皮膚", "肺臟", "肝臟", "腦"],
    answer: "皮膚",
    explanation: "正確答案是 皮膚。"
  },
  {
    question: "哪家公司開發了 Android 系統？",
    options: ["Google", "Apple", "Samsung", "Microsoft"],
    answer: "Google",
    explanation: "正確答案是 Google。"
  },
  {
    question: "過年時常見的顏色是？",
    options: ["紅色", "藍色", "白色", "綠色"],
    answer: "紅色",
    explanation: "正確答案是 紅色。"
  },
  {
    question: "鄭成功從荷蘭手中收復台灣是哪一年？",
    options: ["1662年", "1624年", "1683年", "1701年"],
    answer: "1662年",
    explanation: "正確答案是 1662年。"
  },
  {
    question: "哪一種語言主要用於網頁前端？",
    options: ["JavaScript", "C#", "Python", "Java"],
    answer: "JavaScript",
    explanation: "正確答案是 JavaScript。"
  },
  {
    question: "哪條河是台灣最長的河？",
    options: ["濁水溪", "大甲溪", "曾文溪", "淡水河"],
    answer: "濁水溪",
    explanation: "正確答案是 濁水溪。"
  },
  {
    question: "二二八事件發生在哪一年？",
    options: ["1947年", "1937年", "1945年", "1950年"],
    answer: "1947年",
    explanation: "正確答案是 1947年。"
  },
  {
    question: "清明節的主要活動是？",
    options: ["掃墓", "放煙火", "送禮", "吃粽子"],
    answer: "掃墓",
    explanation: "正確答案是 掃墓。"
  },
  {
    question: "哪個是草本植物？",
    options: ["竹子", "柳樹", "松樹", "芒果樹"],
    answer: "竹子",
    explanation: "正確答案是 竹子。"
  },
  {
    question: "地球繞太陽一圈需要多久？",
    options: ["365天", "30天", "400天", "180天"],
    answer: "365天",
    explanation: "正確答案是 365天。"
  },
  {
    question: "台灣最高峰是哪座山？",
    options: ["玉山", "合歡山", "雪山", "大霸尖山"],
    answer: "玉山",
    explanation: "正確答案是 玉山。"
  },
  {
    question: "日本的傳統服飾是什麼？",
    options: ["和服", "韓服", "旗袍", "紗麗"],
    answer: "和服",
    explanation: "和服是日本的民族服飾，有多種款式和用途。"
  },
  {
    question: "印度的主要宗教之一，擁有眾多神祇的是什麼？",
    options: ["印度教", "佛教", "伊斯蘭教", "基督教"],
    answer: "印度教",
    explanation: "印度教是印度最主要的宗教，信仰多神。"
  },
  {
    question: "在西方文化中，哪種花通常代表著愛情和浪漫？",
    options: ["玫瑰", "鬱金香", "向日葵", "菊花"],
    answer: "玫瑰",
    explanation: "紅玫瑰是西方文化中最常見的愛情象徵。"
  },
  {
    question: "哪個國家是披薩的發源地？",
    options: ["義大利", "法國", "美國", "中國"],
    answer: "義大利",
    explanation: "披薩起源於義大利那不勒斯。"
  },
  {
    question: "韓國的傳統發酵食品，也是其國菜的是什麼？",
    options: ["泡菜", "壽司", "咖哩", "餃子"],
    answer: "泡菜",
    explanation: "泡菜是韓國代表性的發酵蔬菜，家家戶戶都會製作。"
  },
  {
    question: "哪個節日是墨西哥的傳統節日，慶祝已故親友？",
    options: ["亡靈節", "感恩節", "聖誕節", "復活節"],
    answer: "亡靈節",
    explanation: "亡靈節是墨西哥獨特的文化節日，充滿色彩和歡樂氣氛。"
  },
  {
    question: "古埃及的象形文字是使用什麼書寫的？",
    options: ["紙莎草", "泥板", "竹簡", "羊皮紙"],
    answer: "紙莎草",
    explanation: "紙莎草是古埃及人重要的書寫材料。"
  },
  {
    question: "哪個國家是桑巴舞的故鄉？",
    options: ["巴西", "阿根廷", "西班牙", "古巴"],
    answer: "巴西",
    explanation: "桑巴舞是巴西最具代表性的舞蹈和音樂風格。"
  },
  {
    question: "哪種樂器是蘇格蘭的傳統樂器，聲音獨特宏亮？",
    options: ["風笛", "小提琴", "吉他", "鋼琴"],
    answer: "風笛",
    explanation: "風笛是蘇格蘭的標誌性樂器，常用於慶典和儀式。"
  },
  {
    question: "哪個國家以「泰姬瑪哈陵」這座宏偉的陵墓而聞名？",
    options: ["印度", "埃及", "土耳其", "伊朗"],
    answer: "印度",
    explanation: "泰姬瑪哈陵是印度莫臥兒王朝的愛情見證，也是世界文化遺產。"
  },
  {
    question: "在許多亞洲文化中，數字「4」常被認為是不吉利的，這是因為它的發音接近哪個字？",
    options: ["死", "失", "散", "是"],
    answer: "死",
    explanation: "「四」的發音在中文、日文、韓文中都與「死」字相近，因此被視為不吉利。"
  },
  {
    question: "哪個國家是咖啡豆的主要生產國，也是咖啡文化盛行之地？",
    options: ["巴西", "義大利", "衣索比亞", "美國"],
    answer: "巴西",
    explanation: "巴西是世界上最大的咖啡生產國，咖啡文化深植人心。"
  },
  {
    question: "英國的代表性建築，也是皇室官方住所的是什麼？",
    options: ["白金漢宮", "羅浮宮", "大笨鐘", "艾菲爾鐵塔"],
    answer: "白金漢宮",
    explanation: "白金漢宮是英國君主的行政總部和官邸。"
  },
  {
    question: "在阿拉伯文化中，人們通常用哪種飲料招待客人？",
    options: ["咖啡", "茶", "果汁", "水"],
    answer: "咖啡",
    explanation: "咖啡在阿拉伯世界是重要的社交飲品和待客之道。"
  },
  {
    question: "哪個國家是「武士道」精神的發源地？",
    options: ["日本", "中國", "韓國", "越南"],
    answer: "日本",
    explanation: "武士道是日本武士階級的道德規範和生活哲學。"
  },
  {
    question: "古羅馬競技場的用途是什麼？",
    options: ["角鬥士競技", "政治集會", "宗教儀式", "市場交易"],
    answer: "角鬥士競技",
    explanation: "羅馬競技場是古羅馬時期舉行角鬥士表演和公共娛樂的場所。"
  },
  {
    question: "在許多西方國家，結婚戒指通常戴在哪根手指上？",
    options: ["無名指", "食指", "中指", "小指"],
    answer: "無名指",
    explanation: "根據傳統，無名指被認為有「愛之脈」直通心臟。"
  },
  {
    question: "哪個國家以其獨特的「金字塔」建築而聞名？",
    options: ["埃及", "墨西哥", "秘魯", "希臘"],
    answer: "埃及",
    explanation: "埃及金字塔是古埃及法老的陵墓，也是古代世界的奇蹟。"
  },
  {
    question: "中國古代的四大發明不包含以下哪項？",
    options: ["火藥", "造紙術", "印刷術", "玻璃"],
    answer: "玻璃",
    explanation: "中國四大發明是造紙術、印刷術、火藥和指南針。"
  },
  {
    question: "哪個國家是歌劇的發源地？",
    options: ["義大利", "德國", "法國", "英國"],
    answer: "義大利",
    explanation: "歌劇起源於16世紀末的義大利佛羅倫斯。"
  },
  {
    question: "印度的傳統服飾中，女性常穿的一種長布是什麼？",
    options: ["紗麗", "和服", "旗袍", "韓服"],
    answer: "紗麗",
    explanation: "紗麗是印度女性最常見的傳統服飾。"
  },
  {
    question: "哪個國家是「佛朗明哥」舞蹈的故鄉？",
    options: ["西班牙", "葡萄牙", "義大利", "希臘"],
    answer: "西班牙",
    explanation: "佛朗明哥是源於西班牙安達魯西亞地區的藝術形式。"
  },
  {
    question: "中國的傳統藝術形式中，以臉譜和戲服為特色的是什麼？",
    options: ["京劇", "相聲", "皮影戲", "二人轉"],
    answer: "京劇",
    explanation: "京劇是中國最具代表性的戲曲藝術形式。"
  },
  {
    question: "哪個國家的人們在用餐時習慣使用筷子而不是刀叉？",
    options: ["日本", "法國", "德國", "巴西"],
    answer: "日本",
    explanation: "東亞文化圈的國家普遍使用筷子作為餐具，包括日本、中國、韓國等。"
  },
  {
    question: "在西方婚禮習俗中，新娘通常會穿什麼顏色的禮服？",
    options: ["白色", "紅色", "藍色", "金色"],
    answer: "白色",
    explanation: "白色婚紗象徵著純潔和貞潔，由維多利亞女王推廣開來。"
  },
  {
    question: "古希臘神話中，掌管海洋的神是誰？",
    options: ["波賽頓", "宙斯", "哈帝斯", "阿波羅"],
    answer: "波賽頓",
    explanation: "波賽頓是希臘神話中的海神，也是地震之神。"
  },
  {
    question: "哪個國家是「瑜伽」的發源地？",
    options: ["印度", "中國", "尼泊爾", "泰國"],
    answer: "印度",
    explanation: "瑜伽是一種源於古印度哲學的練習，旨在身心合一。"
  },
  {
    question: "復活節的代表性動物是什麼？",
    options: ["兔子", "雞", "羊", "熊"],
    answer: "兔子",
    explanation: "復活節兔子象徵著新生命和繁殖力。"
  },
  {
    question: "哪個國家以「鬱金香」而聞名，每年舉辦盛大的花卉節？",
    options: ["荷蘭", "法國", "英國", "比利時"],
    answer: "荷蘭",
    "explanation": "荷蘭是世界上最大的鬱金香生產國和出口國。"
  },
  {
    question: "在許多西方國家，握手是常見的打招呼方式，它通常表示什麼？",
    options: ["尊重和信任", "敵意和挑戰", "告別和離去", "服從和順從"],
    answer: "尊重和信任",
    explanation: "握手是西方社會中表示友好、尊重和建立聯繫的方式。"
  },
  {
    question: "哪個國家是「莎士比亞」的故鄉？",
    options: ["英國", "法國", "德國", "義大利"],
    answer: "英國",
    explanation: "威廉·莎士比亞是英國最偉大的劇作家之一。"
  },
  {
    question: "哪個國家以其「鬥牛」文化而聞名？",
    options: ["西班牙", "葡萄牙", "墨西哥", "法國"],
    answer: "西班牙",
    explanation: "鬥牛是西班牙最具爭議但也最為人熟知的傳統之一。"
  },
  {
    question: "聖誕節是慶祝誰的誕生？",
    options: ["耶穌", "佛陀", "穆罕默德", "孔子"],
    answer: "耶穌",
    explanation: "聖誕節是基督教世界慶祝耶穌基督誕生的節日。"
  },
  {
    question: "哪個國家是「壽司」的發源地？",
    options: ["日本", "中國", "韓國", "泰國"],
    answer: "日本",
    explanation: "壽司是日本獨具特色的料理，以生魚片和醋飯為主。"
  },
  {
    question: "在許多文化中，黑色通常象徵著什麼？",
    options: ["死亡與哀悼", "喜悅與慶祝", "純潔與天真", "活力與熱情"],
    answer: "死亡與哀悼",
    explanation: "黑色在許多文化中與死亡、悲傷和莊嚴相關。"
  },
  {
    question: "哪個國家是「金字塔」的另一種形式——瑪雅金字塔的所在地？",
    options: ["墨西哥", "埃及", "秘魯", "希臘"],
    answer: "墨西哥",
    explanation: "瑪雅文明在墨西哥和中美洲地區留下了許多宏偉的金字塔建築。"
  },
  {
    question: "哪個國家是「探戈」舞蹈的故鄉？",
    options: ["阿根廷", "巴西", "西班牙", "古巴"],
    answer: "阿根廷",
    explanation: "探戈是源於阿根廷布宜諾斯艾利斯地區的社交舞蹈。"
  },
  {
    question: "在許多西方文化中，哪種動物通常代表著智慧和知識？",
    options: ["貓頭鷹", "狗", "馬", "蛇"],
    answer: "貓頭鷹",
    explanation: "貓頭鷹因其夜行性和敏銳的視力，常被視為智慧的象徵。"
  },
  {
    question: "哪個國家是「牛仔」文化的發源地？",
    options: ["美國", "加拿大", "澳洲", "墨西哥"],
    answer: "美國",
    explanation: "牛仔文化是美國西部歷史和拓荒精神的重要組成部分。"
  },
  {
    question: "印度的傳統節日中，以色彩繽紛的粉末互相潑灑的是哪個節日？",
    options: ["灑紅節", "排燈節", "聖誕節", "開齋節"],
    answer: "灑紅節",
    explanation: "灑紅節是印度慶祝春天來臨的節日，充滿歡樂和色彩。"
  },
  {
    question: "古希臘的奧林匹克運動會最初是為了祭祀哪位神祇？",
    options: ["宙斯", "雅典娜", "阿波羅", "赫拉"],
    answer: "宙斯",
    explanation: "古代奧林匹克運動會是為了祭祀希臘主神宙斯而舉辦的。"
  },
  {
    question: "在許多西方國家，星期五和數字「13」組合在一起通常被認為是不吉利的，這是因為什麼？",
    options: ["耶穌受難", "女巫聚會", "黑色星期五股市崩盤", "古老傳說"],
    answer: "耶穌受難",
    explanation: "這個迷信源於《聖經》中耶穌在星期五受難，且有13位門徒的最後晚餐。"
  },
  {
    question: "哪個國家是「茶」的發源地？",
    options: ["中國", "印度", "日本", "英國"],
    answer: "中國",
    explanation: "茶起源於中國，並逐漸傳播到世界各地。"
  },
  {
    question: "法國的代表性建築，也是世界文化遺產的是什麼？",
    options: ["艾菲爾鐵塔", "羅馬競技場", "大笨鐘", "自由女神像"],
    answer: "艾菲爾鐵塔",
    explanation: "艾菲爾鐵塔是巴黎的象徵，也是法國的重要地標。"
  },
  {
    question: "哪個國家是「萬聖節」文化的發源地？",
    options: ["愛爾蘭", "美國", "英國", "加拿大"],
    answer: "愛爾蘭",
    explanation: "萬聖節起源於古凱爾特人的薩溫節，最初是為了驅趕惡靈。"
  },
  {
    question: "在伊斯蘭文化中，人們每天會朝向哪個城市的方向禱告？",
    options: ["麥加", "耶路撒冷", "巴格達", "開羅"],
    answer: "麥加",
    explanation: "麥加是伊斯蘭教最神聖的城市，穆斯林每天朝向其內的克爾白禱告。"
  },
  {
    question: "在西方文化中，哪種顏色通常代表著和平和純潔？",
    options: ["白色", "黑色", "紅色", "藍色"],
    answer: "白色",
    explanation: "白色在西方文化中常用於婚禮，象徵純潔和新的開始。"
  },
  {
    question: "哪個國家是「桑拿」文化的發源地？",
    options: ["芬蘭", "瑞典", "挪威", "俄羅斯"],
    answer: "芬蘭",
    explanation: "桑拿是芬蘭特有的洗浴文化，對芬蘭人來說是生活的一部分。"
  },
  {
    question: "美國的代表性雕塑，象徵自由與民主的是什麼？",
    options: ["自由女神像", "羅馬競技場", "艾菲爾鐵塔", "大笨鐘"],
    answer: "自由女神像",
    explanation: "自由女神像位於紐約港，是法國贈送給美國的禮物。"
  },
  {
    question: "哪個國家是「卡拉OK」的發源地？",
    options: ["日本", "韓國", "中國", "美國"],
    answer: "日本",
    explanation: "卡拉OK起源於日本，意思是「空樂隊」。"
  },
  {
    question: "在許多文化中，送鐘通常被認為是不吉利的，這是因為它的發音接近哪個字？",
    options: ["送終", "送走", "送財", "送禮"],
    answer: "送終",
    explanation: "「送鐘」在中文發音上與「送終」相似，因此在禮儀上是忌諱的。"
  },
  {
    question: "英國的傳統早餐中，通常包含哪種豆類食品？",
    options: ["烘豆", "綠豆", "黃豆", "紅豆"],
    answer: "烘豆",
    explanation: "烘豆是英式早餐中常見的配料。"
  },
  {
    question: "哪個國家以「大峽谷」這片壯麗的自然景觀而聞名？",
    options: ["美國", "加拿大", "澳洲", "墨西哥"],
    answer: "美國",
    explanation: "大峽谷位於美國亞利桑那州，是世界著名的自然奇觀。"
  },
  {
    question: "在中國傳統文化中，哪種動物是十二生肖之首？",
    options: ["鼠", "牛", "虎", "兔"],
    answer: "鼠",
    explanation: "老鼠是十二生肖的第一位。"
  },
  {
    question: "哪個國家是「芭蕾舞」的發源地？",
    options: ["法國", "義大利", "俄羅斯", "英國"],
    answer: "法國",
    explanation: "芭蕾舞起源於義大利文藝復興時期的宮廷，後在法國發展壯大。"
  },
  {
    question: "泰國的傳統節日中，人們會互相潑水慶祝的是哪個節日？",
    options: ["潑水節", "水燈節", "萬佛節", "佛誕節"],
    answer: "潑水節",
    explanation: "潑水節是泰國的新年，也是重要的宗教節日。"
  },
  {
    question: "哪個國家是「馬拉松」運動的發源地？",
    options: ["希臘", "羅馬", "英國", "美國"],
    answer: "希臘",
    explanation: "馬拉松是為了紀念古希臘士兵菲迪皮德斯從馬拉松跑到雅典報捷的故事。"
  },
  {
    question: "在西方文化中，敲木頭（Knock on wood）的習俗是為了什麼？",
    options: ["祈求好運", "避免厄運", "表示同意", "引起注意"],
    answer: "避免厄運",
    explanation: "這個習俗據說源於古代信仰，認為樹木中有精靈，敲木頭可以得到保護。"
  },
  {
    question: "哪個國家是「披頭四」樂隊的故鄉？",
    options: ["英國", "美國", "加拿大", "澳洲"],
    answer: "英國",
    explanation: "披頭四是來自英國利物浦的傳奇搖滾樂隊。"
  },
  {
    question: "哪個國家是「楓糖漿」而聞名？",
    options: ["加拿大", "美國", "法國", "德國"],
    answer: "加拿大",
    explanation: "加拿大是世界上最大的楓糖漿生產國。"
  },
  {
    question: "在印度，牛被視為神聖的動物，不能被宰殺，這是屬於哪個宗教的習俗？",
    options: ["印度教", "佛教", "伊斯蘭教", "基督教"],
    answer: "印度教",
    explanation: "牛在印度教中是濕婆神的坐騎，因此備受尊崇。"
  },
  {
    question: "哪個國家是「聖誕老人」傳說的故鄉？",
    options: ["芬蘭", "格陵蘭", "挪威", "瑞典"],
    answer: "芬蘭",
    explanation: "羅瓦涅米市的聖誕老人村是芬蘭的著名景點。"
  },
  {
    question: "在西方餐桌禮儀中，麵包通常放在餐盤的哪一邊？",
    options: ["左邊", "右邊", "上面", "下面"],
    answer: "左邊",
    explanation: "這是國際通用的餐桌禮儀之一。"
  },
  {
    question: "哪個國家是「龍舌蘭酒」的發源地？",
    options: ["墨西哥", "巴西", "古巴", "秘魯"],
    answer: "墨西哥",
    explanation: "龍舌蘭酒是以龍舌蘭植物為原料製成的蒸餾酒。"
  },
  {
    question: "日本的傳統戲劇，以面具和服裝為特色，表演嚴肅緩慢的是什麼？",
    options: ["能劇", "歌舞伎", "狂言", "文樂"],
    answer: "能劇",
    explanation: "能劇是日本最古老的戲劇形式之一，具有強烈的儀式性。"
  },
  {
    question: "哪個國家是「華爾茲」舞蹈的發源地？",
    options: ["奧地利", "德國", "法國", "英國"],
    answer: "奧地利",
    explanation: "華爾茲是一種源於18世紀奧地利的圓舞曲。"
  },
  {
    question: "在許多西方國家，收到禮物時通常會立即打開，這代表什麼？",
    options: ["感激和興奮", "缺乏耐心", "不尊重對方", "好奇心強"],
    answer: "感激和興奮",
    explanation: "立即打開禮物在西方文化中被視為對贈予者的尊重和感謝。"
  },
  {
    question: "哪個國家以其「袋鼠」和「無尾熊」而聞名？",
    options: ["澳洲", "紐西蘭", "南非", "加拿大"],
    answer: "澳洲",
    explanation: "袋鼠和無尾熊是澳洲的代表性動物。"
  },
  {
    question: "古羅馬建築中，最常見的拱形結構是什麼？",
    options: ["凱旋門", "金字塔", "萬里長城", "羅馬競技場"],
    answer: "凱旋門",
    explanation: "凱旋門是古羅馬為慶祝軍事勝利而建造的紀念性建築。"
  },
  {
    question: "哪個國家是「探戈」舞蹈的故鄉？",
    options: ["阿根廷", "巴西", "西班牙", "古巴"],
    answer: "阿根廷",
    explanation: "探戈是源於阿根廷布宜諾斯艾利斯地區的社交舞蹈。"
  },
  {
    question: "哪個國家以其「巧克力」而聞名，擁有眾多知名的巧克力品牌？",
    options: ["瑞士", "比利時", "法國", "德國"],
    answer: "瑞士",
    explanation: "瑞士以其高品質的巧克力和精湛的製作工藝而聞名於世。"
  },
  {
    question: "在許多西方國家，數字「7」通常被認為是吉利的，這源於哪裡？",
    options: ["聖經", "古羅馬神話", "希臘哲學", "數字學"],
    answer: "聖經",
    explanation: "數字7在《聖經》中多次出現，象徵著完美和完整。"
  },
  {
    question: "哪個國家是「伏特加」酒的發源地？",
    options: ["俄羅斯", "波蘭", "瑞典", "芬蘭"],
    answer: "俄羅斯",
    explanation: "伏特加是俄羅斯最具代表性的蒸餾酒。"
  },
  {
    question: "日本的傳統藝術形式中，以紙張摺疊為特色的是什麼？",
    options: ["摺紙", "浮世繪", "茶道", "花道"],
    answer: "摺紙",
    explanation: "摺紙是日本獨特的紙藝，通過摺疊將紙張變成各種形狀。"
  },
  {
    question: "哪個國家是「披薩」的發源地？",
    options: ["義大利", "法國", "美國", "中國"],
    answer: "義大利",
    explanation: "披薩起源於義大利那不勒斯。"
  },
  {
    question: "古希臘的民主制度最初發源於哪個城邦？",
    options: ["雅典", "斯巴達", "羅馬", "科林斯"],
    answer: "雅典",
    explanation: "雅典被認為是西方民主的搖籃。"
  },
  {
    question: "在許多西方國家，對著生日蛋糕吹蠟燭的習俗是為了什麼？",
    options: ["許願", "熄滅蠟燭", "測試肺活量", "節省電力"],
    answer: "許願",
    explanation: "對著蠟燭許願並吹滅，被認為可以讓願望實現。"
  },
  {
    question: "哪個國家是「咖啡」的發源地之一，其咖啡豆以風味獨特而聞名？",
    options: ["衣索比亞", "巴西", "哥倫比亞", "越南"],
    answer: "衣索比亞",
    explanation: "咖啡豆據說是在衣索比亞被發現的。"
  },
  {
    question: "哪個國家以其「冰島馬」這種獨特的馬種而聞名？",
    options: ["冰島", "挪威", "瑞典", "芬蘭"],
    answer: "冰島",
    explanation: "冰島馬是冰島特有的馬種，以其穩定性和耐力而聞名。"
  },
  {
    question: "在許多西方文化中，哪種動物通常代表著忠誠和友誼？",
    options: ["狗", "貓", "鳥", "魚"],
    answer: "狗",
    explanation: "狗因其對人類的忠誠而被稱為「人類最好的朋友」。"
  },
  {
    question: "哪個國家是「金字塔」的另一種形式——阿茲特克金字塔的所在地？",
    options: ["墨西哥", "埃及", "秘魯", "希臘"],
    answer: "墨西哥",
    explanation: "阿茲特克文明在墨西哥留下了許多金字塔式的神廟建築。"
  },
  {
    question: "古羅馬的公共浴場不僅是洗浴場所，還具有什麼功能？",
    options: ["社交中心", "軍事訓練", "貿易市場", "宗教禮拜"],
    answer: "社交中心",
    explanation: "羅馬浴場是古羅馬人社交、運動和休閒的重要場所。"
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
let timeLeft = 5;
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
  selectedQuestions = getRandomQuestions(quizData, 10);
  usernameInput.disabled = false; // 重新啟用用戶名輸入框
  document.querySelector('.score-submit button').disabled = false; // 重新啟用提交按鈕
  showQuestion();
  updateLeaderboard(); // 每次開始新遊戲時也更新一次排行榜
}

// 顯示題目
function showQuestion() {
  clearInterval(countdown);
  timeLeft = 5;
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
