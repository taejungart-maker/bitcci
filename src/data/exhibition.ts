export interface Artwork {
  id: number;
  artist: string;
  title: string;
  material: string;
  size: string;
  year: string;
  image: string;
  description: string;
  clipPath?: string;
  maxWidth?: string;
  maxHeight?: string;
  darkBg?: boolean; // 조각/설치 작품 등 어두운 배경이 어울리는 작품
  bgTheme?: 'green' | 'purple'; // 연한 녹색 또는 연한 보라색 배경
}

export interface ExhibitionData {
  title: string;
  period: string;
  venue: string;
  opening: string;
  organizer: string;
  organizerContact: string;
  poster: string;
  foreword: string;
  forewordAuthor: string;
  artists: string[];
  artworks: Artwork[];
}

export const exhibition: ExhibitionData = {
  title: "전태일과 이윤복의 빛씨",
  period: "2026. 4. 1 (물날) ~ 4. 6 (달날)",
  venue: "인사아트센터 5층 (서울 종로구 인사동길 41-1)",
  opening: "4월 1일 늦은 4시",
  organizer: "아르떼숲",
  organizerContact: "으뜸일꾼 정요섭 / 010-8441-5009",
  poster: "artworks/poster-vertical.jpg",

  foreword: `'이윤복'을 아시나요? <저 하늘에도 슬픔이>라는 이 영화는 매일 주린 배를 움켜쥐어야 했던 11살 윤복의 일기를 영화로 만들어 온 국민을 울렸습니다. '전태일'은 아실 테지요? 제 몸을 불살라 노동인권을 부르짖은 태일의 일대기 <아름다운 청년 전태일>이라는 영화는 노동자의 인권에 무심했던 한국 사회를 흔들어 깨웠습니다.

태일은 1948년, 윤복은 1952년에 대구에서 태어났습니다. 이 둘은 지지리도 가난했습니다. 윤복이 거적때기를 이어 붙인 움막에서 몸이 아픈 아버지와 동생 셋과 살고 있을 때, 태일은 두 평도 안 되는 단칸셋방에서 재봉틀 한 대와 일곱 식구가 옹기옹기 살았지요. 윤복은 어린 나이에 껌팔이로 가족을 건사하면서 그 나날의 일들을 일기로 남겼고, 이를 어느 출판사가 '저 하늘에도 슬픔이'라는 제목으로 책을 냈으니, 그때가 윤복이 11살 때였습니다. 윤복의 책은 국내는 물론 일본을 비롯한 해외에서도 출간돼 독자들을 울렸고, 이듬해에는 같은 제목으로 영화로도 나와서 그 시절 사람 중에 이 영화를 안 본 사람이 거의 없을 정도였습니다.

같은 시기, 윤복과 한 울타리 안의 배움터에 다녔던 태일이 윤복의 책과 영화를 모를 리 없겠지요. 이는 태일의 동생 전태삼씨께도 확인한 사실입니다. 11살 윤복이 머금은 빛씨가, 16살 태일의 가슴에 심어진 것입니다. 태일은 그 빛씨를 활활 꽃으로 피워 우리에게 전했습니다. 당신은 태일로부터 받은 그 빛씨를 머금고 있나요? 당신이 머금은 빛씨는 어떤 빛깔로 세상을 비추고 있나요?

《전태일과 이윤복의 빛씨》展은 태일과 윤복 두 청ㆍ소년이 겪어야 했던 고통의 시간과 그로 인해 그들에게 서리게 된 맞섬의 용기와 이겨냄의 '빛씨'를 미술로써 톺아보는 전시입니다. 오늘의 미술은 앎의 자랑과 결핍의 충족, 가진 자의 선민의식, 재화 가치를 고려한 투자의 수단으로 전락하고 있습니다. 그러나 인류사에 빛나는 미술은 시대의 아픔을 비켜가지 않았고, 극복의 빛을 담아냈지요.

'평화의 힘'보다 '힘으로 유지되는 평화'를 믿는 야만의 시대, 강대국이 약소국에게 가하는 전쟁과 같은 폭력 앞에 오늘의 미술은 그 빛씨를 길어 올려 저항해야 합니다. 이는 곧 미술의 참 쓸모를 보여주는 것입니다. 전태일과 이윤복, 그 둘이 세상을 향해 던진 외마디는 어둠에서 벗어나려는 의지의 빛씨였습니다. 11살 윤복의 "가난은 죄인가요?"라는 물음은 내 죄 없이 겪어야 하는 빈곤의 구조적 폭력을 드러내는 고발이었고, 22살 태일의 "우리는 기계가 아니다"라는 외침은 소외된 노동자의 존엄을 환기하는 선언이었습니다.`,

  forewordAuthor: "전시기획·글 | 정요섭 문화비평·아르떼숲 으뜸일꾼",

  artists: [
    "김영순", "김재석", "김재홍", "김지소", "김태연",
    "남진현", "노경근", "박건재", "박성완", "박형필",
    "성효숙", "송주웅", "신현경", "유대수", "이경성",
    "이달비", "이운구", "이흥덕", "장경희", "전진경",
    "정영창", "정현수", "채한리", "천광호", "하성흡"
  ],

  artworks: [
    {
      id: 2,
      artist: "김영순",
      title: "불꽃이 되어",
      material: "캔버스 위에 유화",
      size: "53×45.5cm",
      year: "2026",
      image: "artworks/kimyoungsun-bulggot.jpg",
      description: "눈을 감은 인물은 고통 중에도 꺼지지 않는 빛씨를 붉은 꽃으로 피우고 있다. 이제 우리가 할 일이 남았을 뿐, 그는 말이 없다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 1,
      artist: "김지소",
      title: "Subaltern Seed",
      material: "자연석+철",
      size: "120×500×120mm",
      year: "2026",
      image: "artworks/kimjiso-subaltern-seed.jpg",
      description: "Subaltern은 권력의 중심에서 배제된 존재이다. 전태일과 이윤복은 사회적 주체로 서지 못했지만 가장 낮은 자리에서 정의를 증언한 존재였다. 녹슨 금속의 머리와 바닥에 길게 끌린 돌의 질량은 억압된 시간과 구조를 시각화한다. 그러나 이 '눕혀진 몸'은 끝이 아니라 시작이다. 빛씨는 낮은 자리에서 발화하기 때문이다.",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true,
    },
    {
      id: 3,
      artist: "김재홍",
      title: "보고 싶은",
      material: "캔버스에 유화",
      size: "50×90cm",
      year: "2021~2026",
      image: "artworks/kimjaehong-bogosipeun.jpg",
      description: "어느 청년 노동자가 편의점에서 컵라면 하나로 점심을 때우고 '깜빡잠'이 들었던 모양이다. 이 장면을 본 작가는 청년이 꾸고 있을 것 같은 고향마을을 그렸다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 4,
      artist: "송주웅",
      title: "'청맹(靑盲)과니'의 노래",
      material: "캔버스 위 아크릴",
      size: "112×145.5cm",
      year: "2026",
      image: "artworks/abstract-painting.jpg",
      description: "'청맹과니'라는 존재는 겉보기에는 멀쩡한 것 같지만 앞을 보지 못하는, 혹은 사리 분별을 못하는 사람을 비유적으로 일컫는 말이다. 울산화력 붕괴 사고와 중동 전쟁의 어린이 그림이 겹쳐 보이는 건 왜일까? 정의, 약자 배려와 같이 국제사회가 현실을 대하는 방식은 건강할까?",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 5,
      artist: "장경희",
      title: "저 하늘에도 슬픔이",
      material: "원목 채색",
      size: "47×22×22cm",
      year: "2026",
      image: "artworks/bust-sculpture-1.png",
      darkBg: true,
      description: "\"선생님, 이렇게 배가 고픈데 이 빵을 훔쳐 먹으면 죄가 되나요?\" 며칠을 굶어서 '먹고 싶다'는 본능만 남은 소년 이윤복의 절규이다. 늘 배가 고팠던 윤복, 껌을 판 돈으로 국수를 사서 다섯 식구 끼니를 겨우 때워야 했지만 엄마 젖을 파고들며 배가 고프다고 우는 어린아이를 보고 국수 살 돈을 다 주고 만다.\n\n배가 고파봤기 때문이다. 배가 고프다는 게 어떤 고통인지 알기 때문이다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 6,
      artist: "장경희",
      title: "아름다운 청년",
      material: "원목 채색",
      size: "63×26×30cm",
      year: "2026",
      image: "artworks/bust-sculpture-2.png",
      darkBg: true,
      description: "태일의 분신은 \"공돌이새끼가...\"라며 낮잡아보는 세상에 겁 없이 대든 사건이었다. 처지와 이상의 거리가 멀어 세상과 불화를 겪고 있던 태일은 배운 친구 하나만이라도 있기를 바랐다. 공장뱅이가 학생 신분을 지닌 친구를 가지고 싶어 한 죄는 신분의 넘을 수 없는 벽으로 돌아왔다. 높은 사람들이 정한 법은 엄연히 존재하는데, 그 법대로만 해달라는 요구를 무시하고 멸시한 사회에게 태일은 분노한 것이다. 공장뱅이면서 책을 끼고 살지 말았어야 했다. 공장뱅이면서 정의 따위에 관심을 가지지 말았어야 했다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 7,
      artist: "채한리",
      title: "Oh! Jesus! We are all les Miserables!\n오! 주여! 우리는 모두 불쌍한 존재들입니다!",
      material: "린넨에 유채",
      size: "65.1×90.9cm",
      year: "2026",
      image: "artworks/chaehanri-oh-jesus.jpg",
      description: "우리는 저마다의 고통이 있습니다. 모두 불쌍한 존재들입니다. 그러나 나의 불행에 짓눌려 타인의 고통을 외면하고 그 신음에 냉소할 때, 우리는 더욱 불쌍한 존재가 됩니다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 8,
      artist: "박성완",
      title: "대구 전태일 옛집",
      material: "Oil on canvas",
      size: "72.7×60.6cm",
      year: "2026",
      image: "artworks/chaehanri-oh-jesus-2.jpg",
      description: "대구의 전태일 옛집에서 아들 '해와'가 민들레 홀씨를 불고 있다. 시민들의 모금으로 복원된 이곳은 태일이 \"가장 행복한 때\"로 기억하는 곳이다. 윤복의 '저 하늘에도 슬픔이'라는 책과 영화를 접한 때이기도 하다. 대게의 기념관은 그 주인공이 소유하고 살던 곳인데, 이곳은 태일의 가족이 단칸방에 세를 살던 곳이다. 그런데 주인집은 복원되었으나 정작 태일이 살던 단칸방은 표식만 해두었다. 제 기념관에서조차 지붕을 두른 제 집을 가지지 못하는구나 싶어 씁쓸했다. 태일이 살던 집에서 꽃씨를 날리는 모습이 '빛씨'의 표현과 닿았다고 생각했다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 9,
      artist: "김태연",
      title: "鎭魂曲",
      material: "흙벽에 채색",
      size: "81×81×2.5cm",
      year: "2024~2026",
      image: "artworks/kimtaeyeon-jinhongok.jpg",
      description: "2016년 5월 28일. 구의역에서 스크린도어를 고치다가 숨진 '김군'이라 불리는 이 청년 노동자의 10주기가 다가온다. 왜 위험한 일은 외주화되고, 비정규직이 떠맡아야 할까? 사망한 '김군'의 가방에서 나온 \"천천히 먹어\"라는 쪽지가 붙은 컵라면 하나. 그렇다. 태일과 윤복이 겪어야 했던 기울어진 세상은 오늘까지 이어지고 있다.\n\n'육개장 사발면'은 전태일이며, 이윤복이고, '김군'이다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 10,
      artist: "김태연",
      title: "육개장 사발면의 전속모델",
      material: "흙벽에 채색",
      size: "25×25×3cm",
      year: "2024~2026",
      image: "artworks/kimtaeyeon-model.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 11,
      artist: "김태연",
      title: "응신(應身)",
      material: "흙벽에 채색",
      size: "20.5×20.5×3cm",
      year: "2024~2026",
      image: "artworks/kimtaeyeon-eungsin.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 12,
      artist: "김영순",
      title: "엄동설한에 피는 꽃",
      material: "캔버스 위에 유채",
      size: "72.7×60.6cm",
      year: "2026",
      image: "artworks/kimyoungsun-winter-flower.jpg",
      description: "냉혹한 현실 앞에 선 그는 모진 추위 속에서도 꽃을 피워내던 시간을 기억한다.\n\n그 기꺼운 꽃을 바라보며 생명의 존엄과 꺼지지 않는 희망을 마주한다.\n\n혹한의 겨울 속에서도 대지는 빛씨를 머금고 있는 것처럼.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 13,
      artist: "김영순",
      title: "젊은 날의 초상",
      material: "캔버스에 유채",
      size: "53×45.5cm",
      year: "2026",
      image: "artworks/kimyoungsun-portrait.jpg",
      description: "응시하는 것인지, 글썽이는지 알 수 없는 젊은이의 눈길에는 지나온 시간이 쌓여 있다. 태일은 글과 영화로 윤복을 알았고, 윤복은 분신한 노동자의 뉴스로 태일을 알았다. 태일은 22살 나이로, 윤복은 38살 나이로 세상을 떠났지만, 서로 얼굴도 모르면서 주고받은 빛씨는\n\n오늘 우리에게 심어졌다. 우리는 어떻게 살아갈 것인가?",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 14,
      artist: "장경희",
      title: "빛나는 교복",
      material: "나무판에 채색",
      size: "100×48cm",
      year: "2026",
      image: "artworks/jangkyunghee-uniform.png",
      description: "하필이면 태일의 집이 어느 여고 곁이었다. 열여섯 사춘기에 그는 날마다 반짝이는 교복을 입은 여학생들과 마주쳐야 했다. 그때마다 고개를 숙이거나 전봇대 뒤로 몸을 숨겼다. 후줄근한 일복, 도시락 가방에서 나는 묵은김치 냄새가 부끄러웠다.\n\n같은 또래이면서 그들은 버스를 탈 때 '학생토큰'을, 가난한 태일은 그보다 더 비싼 '일반토큰'을 내야 했다. 그들이 부르는 최신 팝송은 넘볼 수 없는 신분의 증표였다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 15,
      artist: "남진현",
      title: "정의의 이름으로 연대하라",
      material: "캔버스에 아크릴",
      size: "117×91cm",
      year: "2026",
      image: "artworks/namjinhyun-solidarity.jpg",
      description: "우리는 자연재해에서 비롯된 가난과 그 고통에 분노하는 것이 아니다. 이기적인 사회제도가 주는 불평등과 불의는 약자를 짓밟은 대가로써 얻는 것이기에 저항하는 것이다.\n\n이같이 마땅한 저항은 양심을 지닌 시민의 연대로써 쟁취할 수 있다. 서로 다른 모습처럼 다른 생각을 가진 이들이여, 정의의 이름으로 연대하자!",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 16,
      artist: "이흥덕",
      title: "낮잠",
      material: "oil on canvas",
      size: "100×100cm",
      year: "1989~2026",
      image: "artworks/leeheungdeok-nap.jpg",
      description: "고단한 낮잠을 든 어느 그림쟁이를 그렸다. 그를 위무할 깜냥으로 그렸지만 이런 잠마저 태일과 윤복에게는 허락되지 않았을 것이다.\n\n잠든 몸 위로 말간 하늘씨가 떠있다. 고단한 숨결은 평화롭고 창은 하늘로 열려있는데, 너머의 섬에는 꿈이 자란다. 거기가 빛이다.",
      maxHeight: "calc(100vh - 350px)",
    },
  ]
};
