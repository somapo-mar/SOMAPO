// 共通: 運動データ（list.html 由来）
window.CATEGORIES = {
  sowasowa: {
    name: 'そわそわ・じっとできない',
    emoji: '🌀',
    gradient: 'linear-gradient(135deg,#43E97B 0%,#38F9D7 40%,#4FACFE 100%)',
    exercises: [
      { name:'壁押し',          icon:'🧱', ic:'ic-teal',  color:'card-teal',   tags:['固有感覚','道具なし'], meta:'🕐 1〜2分 · 3歳〜', mode:'solo' },
      { name:'重い荷物運び',    icon:'📚', ic:'ic-yellow', color:'card-yellow', tags:['固有感覚','本'],      meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'タオル引っ張り合い', icon:'🧺', ic:'ic-pink', color:'card-pink',  tags:['固有感覚','タオル'],  meta:'🕐 3〜5分 · 3歳〜', mode:'pair' },
      { name:'くるみ巻き',      icon:'🛏', ic:'ic-blue',  color:'card-blue',   tags:['触覚','毛布'],        meta:'🕐 3〜5分 · 2歳〜', mode:'pair' },
      { name:'ぎゅっとハグ',    icon:'🫂', ic:'ic-green', color:'card-teal',   tags:['触覚','道具なし'],    meta:'🕐 1〜2分 · 2歳〜', mode:'pair' },
      { name:'雑巾がけ競争',    icon:'🧹', ic:'ic-orange',color:'card-yellow', tags:['体幹','雑巾'],        meta:'🕐 3〜5分 · 4歳〜', mode:'both' },
      { name:'クッション挟みジャンプ', icon:'🛋', ic:'ic-purple', color:'card-purple', tags:['固有感覚','クッション'], meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'腕立て伏せキープ', icon:'🏋️', ic:'ic-teal', color:'card-teal',  tags:['体幹','道具なし'],    meta:'🕐 1〜2分 · 5歳〜', mode:'solo' },
      { name:'重い本を背中にハイハイ', icon:'📖', ic:'ic-blue', color:'card-blue', tags:['固有感覚','本'],  meta:'🕐 3〜5分 · 4歳〜', mode:'both' },
      { name:'椅子の下くぐりUターン', icon:'🪑', ic:'ic-red', color:'card-pink',  tags:['感覚統合','椅子'], meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
    ]
  },
  posture: {
    name: '姿勢が崩れやすい', emoji: '🧍',
    gradient: 'linear-gradient(135deg,#FF6B9D,#FF8E53)',
    exercises: [
      { name:'クマ歩き',         icon:'🐻', ic:'ic-teal',  color:'card-teal',   tags:['体幹','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'カニ歩き',         icon:'🦀', ic:'ic-pink',  color:'card-pink',   tags:['体幹','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'ブリッジ',         icon:'🌉', ic:'ic-yellow', color:'card-yellow', tags:['体幹','道具なし'],  meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'飛行機ポーズ',     icon:'✈️', ic:'ic-blue',  color:'card-blue',   tags:['バランス','道具なし'], meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'ボールうつ伏せ',   icon:'🟡', ic:'ic-yellow', color:'card-yellow', tags:['体幹','バランスボール'], meta:'🕐 5〜10分 · 4歳〜', mode:'solo' },
      { name:'本を頭に乗せて歩く', icon:'📚', ic:'ic-blue', color:'card-blue',  tags:['姿勢','本'],        meta:'🕐 3〜5分 · 5歳〜', mode:'solo' },
      { name:'壁に背をつけて立つ', icon:'🧱', ic:'ic-teal', color:'card-teal',  tags:['姿勢','道具なし'],  meta:'🕐 1〜2分 · 3歳〜', mode:'solo' },
      { name:'タオルを背中に挟んで歩く', icon:'🧺', ic:'ic-orange', color:'card-yellow', tags:['姿勢','タオル'], meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'うつ伏せで足バタバタ', icon:'🦵', ic:'ic-green', color:'card-teal', tags:['背筋','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'タオルの綱引き',   icon:'🪢', ic:'ic-pink',  color:'card-pink',   tags:['体幹','タオル'],    meta:'🕐 3〜5分 · 4歳〜', mode:'pair' },
    ]
  },
  balance: {
    name: 'バランスが苦手', emoji: '⚖️',
    gradient: 'linear-gradient(135deg,#FFD93D,#FF9F43)',
    exercises: [
      { name:'飛び石渡り',         icon:'🪨', ic:'ic-yellow', color:'card-yellow', tags:['バランス','クッション'], meta:'🕐 5〜10分 · 3歳〜', mode:'solo' },
      { name:'ケンケンパ',         icon:'🦶', ic:'ic-teal',  color:'card-teal',   tags:['バランス','道具なし'],  meta:'🕐 5分 · 4歳〜', mode:'solo' },
      { name:'スローモーション歩き', icon:'🚶', ic:'ic-blue', color:'card-blue',   tags:['バランス','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'目閉じ片足立ち',     icon:'🧘', ic:'ic-purple', color:'card-purple', tags:['バランス','道具なし'],  meta:'🕐 1〜2分 · 5歳〜', mode:'solo' },
      { name:'ボールに座ってバランス', icon:'🟡', ic:'ic-yellow', color:'card-yellow', tags:['体幹','バランスボール'], meta:'🕐 5〜10分 · 4歳〜', mode:'solo' },
      { name:'ラインの上を歩く',   icon:'➡️', ic:'ic-pink',  color:'card-pink',   tags:['バランス','テープ'],    meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'後ろ歩き',           icon:'🔙', ic:'ic-green', color:'card-teal',   tags:['バランス','道具なし'],  meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'目閉じその場足踏み', icon:'👣', ic:'ic-purple', color:'card-purple', tags:['バランス','道具なし'],  meta:'🕐 2〜3分 · 5歳〜', mode:'solo' },
      { name:'枕の上でバランス',   icon:'🛏', ic:'ic-blue',  color:'card-blue',   tags:['バランス','枕'],        meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'タオル丸めて片足立ち', icon:'🧺', ic:'ic-orange', color:'card-yellow', tags:['バランス','タオル'],   meta:'🕐 2〜3分 · 4歳〜', mode:'solo' },
    ]
  },
  focus: {
    name: '集中力が続かない', emoji: '🎯',
    gradient: 'linear-gradient(135deg,#74B9FF,#4FACFE)',
    exercises: [
      { name:'風船キープ',          icon:'🎈', ic:'ic-pink',  color:'card-pink',   tags:['集中','風船'],      meta:'🕐 5分 · 3歳〜', mode:'both' },
      { name:'豆つかみリレー',      icon:'🫘', ic:'ic-yellow', color:'card-yellow', tags:['集中','小豆・皿'],  meta:'🕐 5〜10分 · 4歳〜', mode:'solo' },
      { name:'足でジャンケン',      icon:'👣', ic:'ic-blue',  color:'card-blue',   tags:['集中','道具なし'],  meta:'🕐 3〜5分 · 4歳〜', mode:'both' },
      { name:'キャンドル呼吸カウント', icon:'🕯️', ic:'ic-teal', color:'card-teal', tags:['集中','道具なし'],  meta:'🕐 3分 · 3歳〜',  mode:'solo' },
      { name:'バランスボールでキャッチ', icon:'🟡', ic:'ic-yellow', color:'card-yellow', tags:['集中','ボール'], meta:'🕐 5〜10分 · 4歳〜', mode:'pair' },
      { name:'まねっこ体操',        icon:'🤸', ic:'ic-green', color:'card-teal',   tags:['集中','道具なし'],  meta:'🕐 5〜10分 · 3歳〜', mode:'pair' },
      { name:'手拍子リズム遊び',    icon:'👏', ic:'ic-blue',  color:'card-blue',   tags:['集中','道具なし'],  meta:'🕐 5分 · 3歳〜',   mode:'both' },
      { name:'ろうそく呼吸',        icon:'💨', ic:'ic-purple', color:'card-purple', tags:['集中','道具なし'],  meta:'🕐 3分 · 3歳〜',   mode:'solo' },
      { name:'風船を頭で当てる',    icon:'🎈', ic:'ic-pink',  color:'card-pink',   tags:['集中','風船'],      meta:'🕐 5分 · 4歳〜',   mode:'both' },
      { name:'紙風船バレー',        icon:'📰', ic:'ic-orange', color:'card-yellow', tags:['集中','新聞紙'],    meta:'🕐 5分 · 3歳〜',   mode:'pair' },
    ]
  },
  finemotor: {
    name: '手先が不器用', emoji: '✋',
    gradient: 'linear-gradient(135deg,#A29BFE,#6C5CE7)',
    exercises: [
      { name:'洗濯バサミつけ外し',  icon:'🧺', ic:'ic-purple', color:'card-purple', tags:['指先','洗濯バサミ'], meta:'🕐 5〜10分 · 3歳〜', mode:'solo' },
      { name:'スポンジ絞り',        icon:'🧽', ic:'ic-blue',  color:'card-blue',   tags:['握力','スポンジ'],   meta:'🕐 5分 · 3歳〜',   mode:'solo' },
      { name:'新聞紙ちぎり',        icon:'📰', ic:'ic-orange', color:'card-yellow', tags:['指先','新聞紙'],     meta:'🕐 5分 · 2歳〜',   mode:'solo' },
      { name:'豆つまみ',            icon:'🥢', ic:'ic-yellow', color:'card-yellow', tags:['指先','小豆・箸'],   meta:'🕐 5〜10分 · 4歳〜', mode:'solo' },
      { name:'テープはがし',        icon:'🖊️', ic:'ic-teal',  color:'card-teal',   tags:['指先','マスキングテープ'], meta:'🕐 5分 · 2歳〜', mode:'solo' },
      { name:'ひも通し',            icon:'🪡', ic:'ic-blue',  color:'card-blue',   tags:['両手協調','ひも'],   meta:'🕐 5〜10分 · 4歳〜', mode:'solo' },
      { name:'スポンジでスタンプ',  icon:'🎨', ic:'ic-pink',  color:'card-pink',   tags:['指先','スポンジ'],   meta:'🕐 5〜10分 · 2歳〜', mode:'solo' },
      { name:'輪ゴムの引っ張り',    icon:'🔵', ic:'ic-purple', color:'card-purple', tags:['指先','輪ゴム'],     meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'ペットボトルキャップ開け閉め', icon:'🍶', ic:'ic-green', color:'card-teal', tags:['手首','ペットボトル'], meta:'🕐 5分 · 4歳〜', mode:'solo' },
      { name:'紐結び練習',          icon:'🪢', ic:'ic-orange', color:'card-yellow', tags:['両手協調','紐'],     meta:'🕐 5〜10分 · 5歳〜', mode:'solo' },
    ]
  },
  sensory: {
    name: '感覚過敏・感覚鈍麻', emoji: '👐',
    gradient: 'linear-gradient(135deg,#55EFC4,#00B894)',
    exercises: [
      { name:'足裏ころころ',       icon:'🦶', ic:'ic-teal',  color:'card-teal',   tags:['触覚','ペットボトル'], meta:'🕐 3〜5分 · 2歳〜', mode:'solo' },
      { name:'砂・豆の手遊び',     icon:'🫘', ic:'ic-yellow', color:'card-yellow', tags:['触覚','小豆・砂'],    meta:'🕐 5〜10分 · 2歳〜', mode:'solo' },
      { name:'新聞紙ぐしゃぐしゃ', icon:'📰', ic:'ic-orange', color:'card-yellow', tags:['触覚','新聞紙'],      meta:'🕐 3〜5分 · 2歳〜', mode:'solo' },
      { name:'背中トントン',       icon:'👋', ic:'ic-green', color:'card-teal',   tags:['触覚','道具なし'],    meta:'🕐 3〜5分 · 2歳〜', mode:'pair' },
      { name:'霧吹き遊び',         icon:'💧', ic:'ic-blue',  color:'card-blue',   tags:['触覚','霧吹き'],      meta:'🕐 5分 · 2歳〜',   mode:'both' },
      { name:'タオルでこすりこすり', icon:'🧺', ic:'ic-pink', color:'card-pink',   tags:['触覚','タオル'],      meta:'🕐 3〜5分 · 2歳〜', mode:'pair' },
      { name:'氷を手に乗せる',     icon:'🧊', ic:'ic-blue',  color:'card-blue',   tags:['触覚','氷'],          meta:'🕐 1〜2分 · 3歳〜', mode:'solo' },
      { name:'泡立て遊び',         icon:'🫧', ic:'ic-teal',  color:'card-teal',   tags:['触覚','石鹸・水'],    meta:'🕐 5〜10分 · 2歳〜', mode:'solo' },
      { name:'足裏スタンプ',       icon:'👣', ic:'ic-purple', color:'card-purple', tags:['足裏感覚','絵の具'],  meta:'🕐 10分 · 2歳〜',  mode:'both' },
      { name:'綿をほぐす',         icon:'🌸', ic:'ic-pink',  color:'card-pink',   tags:['触覚','綿'],          meta:'🕐 5〜10分 · 2歳〜', mode:'solo' },
    ]
  },
  stamina: {
    name: '体力・持久力が弱い', emoji: '💪',
    gradient: 'linear-gradient(135deg,#FDCB6E,#E17055)',
    exercises: [
      { name:'その場行進',          icon:'🚶', ic:'ic-yellow', color:'card-yellow', tags:['持久力','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'スローバーピー',      icon:'🏋️', ic:'ic-orange', color:'card-yellow', tags:['全身','道具なし'],   meta:'🕐 3〜5分 · 5歳〜', mode:'solo' },
      { name:'壁よりかかりスクワット', icon:'🧱', ic:'ic-teal', color:'card-teal', tags:['脚力','道具なし'],   meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'階段上り下り',        icon:'🪜', ic:'ic-blue',  color:'card-blue',   tags:['有酸素','階段'],      meta:'🕐 5〜10分 · 3歳〜', mode:'solo' },
      { name:'風船ふくらまし',      icon:'🎈', ic:'ic-pink',  color:'card-pink',   tags:['肺活量','風船'],      meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'タオルジャンプ',      icon:'🧺', ic:'ic-orange', color:'card-yellow', tags:['脚力','タオル'],      meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'音楽に合わせて踊る',  icon:'🎵', ic:'ic-purple', color:'card-purple', tags:['持久力','道具なし'],  meta:'🕐 5〜10分 · 2歳〜', mode:'both' },
      { name:'カエルジャンプ',      icon:'🐸', ic:'ic-green', color:'card-teal',   tags:['全身','道具なし'],    meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'親子でスクワット',    icon:'👨‍👧', ic:'ic-blue', color:'card-blue',  tags:['脚力','道具なし'],    meta:'🕐 3〜5分 · 4歳〜', mode:'pair' },
      { name:'1分間ステップ',       icon:'⏱', ic:'ic-yellow', color:'card-yellow', tags:['有酸素','道具なし'],  meta:'🕐 1〜3分 · 3歳〜', mode:'solo' },
    ]
  },
  sound: {
    name: '音・光に敏感', emoji: '👂',
    gradient: 'linear-gradient(135deg,#FF7675,#D63031)',
    exercises: [
      { name:'耳ふさぎ深呼吸',       icon:'🙉', ic:'ic-red',   color:'card-pink',   tags:['聴覚','道具なし'],  meta:'🕐 2〜3分 · 2歳〜', mode:'solo' },
      { name:'低い声でハミング',     icon:'🎵', ic:'ic-pink',  color:'card-pink',   tags:['聴覚統合','道具なし'], meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'暗い部屋でくるまる',   icon:'🌙', ic:'ic-purple', color:'card-purple', tags:['視覚','毛布'],      meta:'🕐 5〜10分 · 2歳〜', mode:'solo' },
      { name:'ゆっくり深呼吸',       icon:'💨', ic:'ic-teal',  color:'card-teal',   tags:['自律神経','道具なし'], meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'テント遊び',           icon:'⛺', ic:'ic-green', color:'card-teal',   tags:['感覚遮断','毛布・椅子'], meta:'🕐 10〜15分 · 2歳〜', mode:'solo' },
      { name:'手でグーパー体操',     icon:'✊', ic:'ic-orange', color:'card-yellow', tags:['覚醒調整','道具なし'], meta:'🕐 2〜3分 · 2歳〜', mode:'solo' },
      { name:'重いもの抱えて歩く',   icon:'📦', ic:'ic-blue',  color:'card-blue',   tags:['固有感覚','本'],    meta:'🕐 3〜5分 · 3歳〜', mode:'solo' },
      { name:'目を閉じて音あて',     icon:'👂', ic:'ic-purple', color:'card-purple', tags:['聴覚','道具なし'],  meta:'🕐 3〜5分 · 3歳〜', mode:'pair' },
      { name:'小さな音を聞く瞑想',   icon:'🔇', ic:'ic-pink',  color:'card-pink',   tags:['聴覚','道具なし'],  meta:'🕐 3〜5分 · 4歳〜', mode:'solo' },
      { name:'ゆっくりストレッチ＆深呼吸', icon:'🧘', ic:'ic-teal', color:'card-teal', tags:['自律神経','道具なし'], meta:'🕐 5〜10分 · 3歳〜', mode:'solo' },
    ]
  },
  social: {
    name: 'お友達との距離感（社会性）', emoji: '🤝',
    gradient: 'linear-gradient(135deg,#00CEC9,#0984E3)',
    exercises: [
      { name:'背中合わせ立ち上がり', icon:'🤜', ic:'ic-teal',  color:'card-teal',   tags:['協調','道具なし'],  meta:'🕐 3〜5分 · 4歳〜', mode:'pair' },
      { name:'風船バレー（2人）',   icon:'🎈', ic:'ic-pink',  color:'card-pink',   tags:['協調','風船'],      meta:'🕐 5〜10分 · 3歳〜', mode:'pair' },
      { name:'まねっこ鏡ゲーム',    icon:'🪞', ic:'ic-blue',  color:'card-blue',   tags:['共感','道具なし'],  meta:'🕐 5〜10分 · 3歳〜', mode:'pair' },
      { name:'手のひらプッシュ',    icon:'🤜', ic:'ic-teal',  color:'card-teal',   tags:['距離感','道具なし'], meta:'🕐 3〜5分 · 3歳〜', mode:'pair' },
      { name:'二人三脚',            icon:'🏃', ic:'ic-yellow', color:'card-yellow', tags:['協調','タオル'],    meta:'🕐 3〜5分 · 5歳〜', mode:'pair' },
      { name:'ボール転がしキャッチ', icon:'⚽', ic:'ic-green', color:'card-teal',   tags:['順番','ボール'],    meta:'🕐 5〜10分 · 3歳〜', mode:'pair' },
      { name:'新聞紙運び（2人）',   icon:'📰', ic:'ic-orange', color:'card-yellow', tags:['協力','新聞紙'],    meta:'🕐 5〜10分 · 4歳〜', mode:'pair' },
      { name:'リズム手合わせ',      icon:'👏', ic:'ic-purple', color:'card-purple', tags:['タイミング','道具なし'], meta:'🕐 5分 · 3歳〜', mode:'pair' },
      { name:'肩組み歩き',          icon:'🤝', ic:'ic-blue',  color:'card-blue',   tags:['距離感','道具なし'], meta:'🕐 3〜5分 · 5歳〜', mode:'pair' },
      { name:'背中に文字を書く',    icon:'✏️', ic:'ic-pink',  color:'card-pink',   tags:['触覚','道具なし'],  meta:'🕐 5〜10分 · 5歳〜', mode:'pair' },
    ]
  }
};
