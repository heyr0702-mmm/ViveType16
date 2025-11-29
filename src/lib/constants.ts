import { Character, Question } from './types';

export const QUESTIONS: Question[] = [
    // Axis 1: Power (D vs R)
    { id: 1, text: "複数人で歩いているとき、気づけば自分が先頭か、行先を決めるポジションにいる。", axis: 'Power', reversed: false },
    { id: 2, text: "「誰か決めてよ」という沈黙が流れると、イライラして自分が口火を切る。", axis: 'Power', reversed: false },
    { id: 3, text: "グループLINEで、日程調整やお店の予約を率先してやることが多い。", axis: 'Power', reversed: false },
    { id: 4, text: "自分の意見が通らないと、露骨にやる気が下がるか、顔に出る方だ。", axis: 'Power', reversed: false },
    { id: 5, text: "会議や話し合いでは、誰かの案に乗っかる方が楽だと感じる。", axis: 'Power', reversed: true },
    { id: 6, text: "「あなたはどう思う？」と聞かれるまで、自分の意見は言わずに待つ。", axis: 'Power', reversed: true },
    { id: 7, text: "リーダーをやるより、リーダーの補佐役（副リーダー）の方が向いている。", axis: 'Power', reversed: true },

    // Axis 2: Temperature (E vs C)
    { id: 8, text: "友達が泣いて相談してきたら、解決策より先に「わかるよ」と一緒に悲しむ。", axis: 'Temperature', reversed: false },
    { id: 9, text: "「空気が読めない」と言われることより、「嘘をつく」ことの方が嫌いだ。", axis: 'Temperature', reversed: false },
    { id: 10, text: "集団において「正解」であることより、「みんなが仲良くできる」ことの方が重要だ。", axis: 'Temperature', reversed: false },
    { id: 11, text: "映画やドラマを見て、感情移入して泣いてしまうことがよくある。", axis: 'Temperature', reversed: false },
    { id: 12, text: "悩み相談を受けた時、すぐに具体的な解決策（ToDo）を提示したくなる。", axis: 'Temperature', reversed: true },
    { id: 13, text: "感情論で話が進まないとき、「要するに何が言いたいの？」と思ってしまう。", axis: 'Temperature', reversed: true },
    { id: 14, text: "みんなが盛り上がっていても、一歩引いて「楽しそうだね」と観察している自分がいる。", axis: 'Temperature', reversed: true },

    // Axis 3: Speed (I vs S)
    { id: 15, text: "会話の「間（沈黙）」が怖いので、とりあえず何か喋って埋める。", axis: 'Speed', reversed: false },
    { id: 16, text: "予想外の質問をされても、その場で適当にそれっぽい答えを返すのが得意だ。", axis: 'Speed', reversed: false },
    { id: 17, text: "ノリと勢いで約束をしてしまい、後になって「なんでOKしたんだろ」と後悔することがある。", axis: 'Speed', reversed: false },
    { id: 18, text: "説明書を読むより、とりあえず触ってみて走りながら考えるタイプだ。", axis: 'Speed', reversed: false },
    { id: 19, text: "発言する前には、頭の中で文章を組み立ててから口に出したい。", axis: 'Speed', reversed: true },
    { id: 20, text: "急に話を振られると、頭が真っ白になって言葉が出てこない。", axis: 'Speed', reversed: true },
    { id: 21, text: "LINEの返信は、即レスするより、一度時間を置いて内容を確認してから送る。", axis: 'Speed', reversed: true },

    // Axis 4: Volume (X vs Z)
    { id: 22, text: "「楽しそうだね」「怒ってる？」など、何も言わなくても感情がバレる。", axis: 'Volume', reversed: false },
    { id: 23, text: "リアクションが大きいと言われる、または身振り手振りが大きい自覚がある。", axis: 'Volume', reversed: false },
    { id: 24, text: "自分の考えや体験談を、SNSや会話でアウトプットするのが好きだ。", axis: 'Volume', reversed: false },
    { id: 25, text: "声が大きい、または通る声をしているとよく言われる。", axis: 'Volume', reversed: false },
    { id: 26, text: "「何を考えているのか分からない」と人からよく言われる。", axis: 'Volume', reversed: true },
    { id: 27, text: "大人数の飲み会では、自分から話すより聞き役に徹して気配を消している。", axis: 'Volume', reversed: true },
    { id: 28, text: "自分の本音や弱みを見せるのは、負けた気がして苦手だ。", axis: 'Volume', reversed: true },
];

export const CHARACTERS: Character[] = [
    { code: 'DEIX', name: '主人公', catchphrase: '圧倒的な華と行動力。周りを巻き込む台風の目。誰もが認めるメインキャラ。', description: '' },
    { code: 'DEIZ', name: '番長', catchphrase: '言葉数は少ないが、圧倒的な「圧」と「仁義」で場を仕切る。頼れるボス。', description: '' },
    { code: 'DESX', name: '生徒会長', catchphrase: 'みんなの意見を聞き入れつつ、優等生的にまとめ上げる。正義感の塊。', description: '' },
    { code: 'DESZ', name: '黒幕', catchphrase: '表には出ないが、裏で糸を引き、全てをコントロールしている実力者。', description: '' },
    { code: 'DCIX', name: '一匹狼', catchphrase: '群れず、媚びず、鋭いツッコミを一撃放って去る。孤高のアウトロー。', description: '' },
    { code: 'DCIZ', name: '鬼軍曹', catchphrase: '妥協を許さず、自分にも他人にも厳しい。正論で詰める怖いけど凄い人。', description: '' },
    { code: 'DCSX', name: '裁判官', catchphrase: '感情に流されず、良いか悪いかをバシッと決める。議論のジャッジマン。', description: '' },
    { code: 'DCSZ', name: 'スナイパー', catchphrase: '普段は気配を消しているが、重要な局面で急所を射抜く発言をする。', description: '' },
    { code: 'REIX', name: '親衛隊', catchphrase: '推し（相手）を全力で肯定し、コール＆レスポンスで場を盛り上げる特攻隊長。', description: '' },
    { code: 'REIZ', name: 'オカン', catchphrase: '細かいことは言わず、全てを「ええよええよ」と受け入れる。圧倒的包容力。', description: '' },
    { code: 'RESX', name: '執事', catchphrase: '一歩下がって空気を読み、先回りして気遣いができる完璧なサポーター。', description: '' },
    { code: 'RESZ', name: '保護者', catchphrase: '騒ぐみんなを微笑ましく見守り、何かあった時だけ助けてくれる安心感。', description: '' },
    { code: 'RCIX', name: '道化師', catchphrase: '場の空気を読んで、わざとおどけたり皮肉を言ったりして場を回すトリックスター。', description: '' },
    { code: 'RCIZ', name: '宇宙人', catchphrase: '独自の電波を受信しており、会話の文脈を無視して斜め上の発言をする天才肌。', description: '' },
    { code: 'RCSX', name: '探偵', catchphrase: '納得いかないことは質問攻めにして、真実を暴こうとする。好奇心の塊。', description: '' },
    { code: 'RCSZ', name: '仙人', catchphrase: '俗世の会話に興味がなく、山奥で悟りを開いたかのように達観している。', description: '' },
];
