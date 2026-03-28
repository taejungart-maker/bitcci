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
  poster: "artworks/2.png",

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
    // 김영순
    {
      id: 2,
      artist: "김영순",
      title: "불꽃이 되어",
      material: "캔버스 위에 유화",
      size: "53×45.5cm",
      year: "2026",
      image: "artworks/kimyoungsun-bulggot.jpg",
      description: "눈을 감은 인물은 고통 중에도 꺼지지 않는 빛씨를 붉은 꽃으로 피우고 있다.\n이제 우리가 할 일이 남았을 뿐, 그는 말이 없다.",
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
      description: "냉혹한 현실 앞에 선 그는 모진 추위 속에서도 꽃을 피워내던 시간을 기억한다.\n그 기꺼운 꽃을 바라보며 생명의 존엄과 꺼지지 않는 희망을 마주한다.\n혹한의 겨울 속에서도 대지는 빛씨를 머금고 있는 것처럼.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 13,
      artist: "김영순",
      title: "젊은 날의 초상",
      material: "캔버스에 아크릴",
      size: "53×45.5cm",
      year: "2026",
      image: "artworks/kimyoungsun-portrait.jpg",
      description: "응시하는 것인지, 글썽이는지 알 수 없는\n젊은이의 눈길에는 지나온 시간이 쌓여 있다.\n태일은 글과 영화로 윤복을 알았고,\n윤복은 분신한 노동자의 뉴스로 태일을 알았다.\n태일은 22살 나이로, 윤복은 38살 나이로 세상을 떠났지만,\n서로 얼굴도 모르면서 주고받은 빛씨는 오늘 우리에게 심어졌다.\n우리는 어떻게 살아갈 것인가?",
      maxHeight: "calc(100vh - 350px)",
    },
    // 김재석
    {
      id: 19,
      artist: "김재석",
      title: "노동하는 몸",
      material: "장지에 수간채색×색연필",
      size: "160×80cm",
      year: "2026",
      image: "artworks/kimjaeseok-labor.jpg",
      description: "그게 말이지, 종일 노동에 시달리다 보면 파김치가 된 몸이 짐이 되더란 말이지. 집에 와 널브러져서 생각해보면 '이 몸이 없으면 뭣해서 먹고사나?'싶더군.\n그래, 마르긴 해도 통뼈잖아, 이 몸이 날 살리는 도구더라구.\n겨우 몸을 일으켜 씻는데, 자주 거울에 눈길이 가데.\n내 살아온 시간이 화석처럼 박혀있더군.\n내 아버지가 그랬고, 나도 그런.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 김재홍
    {
      id: 3,
      artist: "김재홍",
      title: "보고 싶은",
      material: "캔버스에 유화",
      size: "50×90cm",
      year: "2021~2026",
      image: "artworks/kimjaehong-bogosipeun.jpg",
      description: "어느 청년 노동자가\n편의점에서 컵라면 하나로 점심을 때우고 '깜빡잠'이 들었던 모양이다.\n이 장면을 본 작가는 청년이 꾸고 있을 것 같은 고향마을을 그렸다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 김지소
    {
      id: 1,
      artist: "김지소",
      title: "Subaltern Seed",
      material: "자연석+철",
      size: "120×500×120mm",
      year: "2026",
      image: "artworks/kimjiso-subaltern-seed.jpg",
      description: "Subaltern은 권력의 중심에서 배제된 존재이다.\n전태일과 이윤복은\n사회적 주체로 서지 못했지만 가장 낮은 자리에서 정의를 증언한 존재였다.\n녹슨 금속의 머리와 바닥에 길게 끌린 돌의 질량은\n억압된 시간과 구조를 시각화한다.\n그러나 이 '눕혀진 몸'은 끝이 아니라 시작이다.\n빛씨는 낮은 자리에서 발화하기 때문이다.",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true,
    },
    // 김태연
    {
      id: 9,
      artist: "김태연",
      title: "鎭魂曲",
      material: "흙벽에 채색",
      size: "81×81×2.5cm",
      year: "2024~2026",
      image: "artworks/kimtaeyeon-jinhongok.jpg",
      description: "2016년 5월 28일.\n구의역에서 스크린도어를 고치다가 숨진 '김군'이라 불리는 이 청년 노동자의 10주기가 다가온다.\n왜 위험한 일은 외주화되고, 비정규직이 떠맡아야 할까?\n사망한 '김군'의 가방에서 나온 \"천천히 먹어\"라는 쪽지가 붙은 컵라면 하나.\n그렇다. 태일과 윤복이 겪어야 했던 기울어진 세상은 오늘까지 이어지고 있다.\n'육개장 사발면'은 전태일이며, 이윤복이고, '김군'이다.",
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
      id: 38,
      artist: "김태연",
      title: "응신(應身)",
      material: "흙벽에 채색",
      size: "20.5×20.5×3cm",
      year: "2024~2026",
      image: "artworks/7.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
    },
    // 남진현
    {
      id: 15,
      artist: "남진현",
      title: "정의의 이름으로 연대하라",
      material: "캔버스에 아크릴",
      size: "117×91cm",
      year: "2026",
      image: "artworks/namjinhyun-solidarity.jpg",
      description: "우리는 자연재해에서 비롯된 가난과 그 고통에 분노하는 것이 아니다.\n이기적인 사회제도가 주는 불평등과 불의는\n약자를 짓밟은 대가로써 얻는 것이기에 저항하는 것이다.\n이같이 마땅한 저항은 양심을 지닌 시민의 연대로써 쟁취할 수 있다.\n서로 다른 모습처럼 다른 생각을 가진 이들이여, 정의의 이름으로 연대하자!",
      maxHeight: "calc(100vh - 350px)",
    },
    // 박건재
    {
      id: 20,
      artist: "박건재",
      title: "검은 눈물",
      material: "폴리코트 (F.R.P)",
      size: "지름700×높이1980mm",
      year: "2026",
      image: "artworks/23.jpg",
      description: "상처와 흔적을 간직한 채\n새로운 빛을 내는 존재에 관한 이야기다.\n인간과 시대에 얽힌 기억과 감정을 이야기하고 있다,\n우리가 잃어버린 것들, 버려진 것들의 아픔을 느끼며 공감할 때,\n우리는 비로소 깨어나며, 눈물을 통해 치유의 카타르시스를 제공하며,\n연결을 느끼고 또 새로움을 발견할 수 있을지 묻는다.",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true,
    },
    {
      id: 21,
      artist: "박건재",
      title: "각인된 사람!",
      material: "나무 캔버스×납",
      size: "1)300×300×80mm 2)300×300×200mm",
      year: "2026",
      image: "artworks/38.jpg",
      description: "인간이 자행한 상흔,\n무심코 남겨진 피해와 잔재들이 어떻게 다시 태어날 수 있는지 고민한다.\n기억'되어지는' 행위는 과거로 돌아가는 단순한 회복이 아닌,\n고통과 상처를 껴안고 새로운 생명으로 피어나는 과정이다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 박성완
    {
      id: 8,
      artist: "박성완",
      title: "대구 전태일 옛집",
      material: "Oil on canvas",
      size: "72.7×60.6cm",
      year: "2026",
      image: "artworks/chaehanri-oh-jesus-2.jpg",
      description: "대구의 전태일 옛집에서 아들 '해와'가 민들레 홀씨를 불고 있다.\n시민들의 모금으로 복원된 이곳은 태일이 \"가장 행복한 때\"로 기억하는 곳이다.\n윤복의 '저 하늘에도 슬픔이'라는 책과 영화를 접한 때이기도 하다.\n대게의 기념관은 그 주인공이 소유하고 살던 곳인데,\n이곳은 태일의 가족이 단칸방에 세를 살던 곳이다.\n그런데 주인집은 복원되었으나 정작 태일이 살던 단칸방은 표식만 해두었다.\n제 기념관에서조차 지붕을 두른 제 집을 가지지 못하는구나 싶어 씁쓸했다.\n태일이 살던 집에서 꽃씨를 날리는 모습이 '빛씨'의 표현과 닿았다고 생각했다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 박형필
    {
      id: 30,
      artist: "박형필",
      title: "작업화",
      material: "양철+철사",
      size: "800×1100×500mm",
      year: "2026",
      image: "artworks/30.png",
      description: "겨울철 건설 현장에서 사용되던 불깡통과 폐깡통을 활용하여\n안전화라 불리우는 작업화를 형상화 하였다.\n거칠게 남은 금속의 흔적은 노동의 시간과 소모된 몸을 드러낸다.\n전태일의 외침 이후에도 노동자의 인권은 여전히 위태롭다.",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true,
    },
    // 성효숙
    {
      id: 31,
      artist: "성효숙",
      title: "전해온 빛씨",
      material: "캔버스에 아크릴",
      size: "100×80.2cm",
      year: "2026",
      image: "artworks/31.jpg",
      description: "전태일을 알게 되고 노동 현장을 가게 된 지 수십 년이 된 어느 날,\n<아르떼숲>이 놓은 징검다리에서\n전태일의 빛씨를 머금고 있음을 알게 되었다.\n우리가 꽃피울 차례다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 송주웅
    {
      id: 4,
      artist: "송주웅",
      title: "'청맹(靑盲)과니'의 노래",
      material: "캔버스 위 아크릴",
      size: "112×145.5cm",
      year: "2026",
      image: "artworks/abstract-painting.jpg",
      description: "'청맹과니'라는 존재는 겉보기에는 멀쩡한 것 같지만 앞을 보지 못하는,\n혹은 사리 분별을 못하는 사람을 비유적으로 일컫는 말이다.\n울산화력 붕괴 사고와 중동 전쟁의 어린이 그림이 겹쳐 보이는 건 왜일까?\n정의, 약자 배려와 같이 국제사회가 현실을 대하는 방식은 건강할까?",
      maxHeight: "calc(100vh - 350px)",
    },
    // 신현경
    {
      id: 25,
      artist: "신현경",
      title: "태일의 불꽃",
      material: "한국화 재료, 벽화기법",
      size: "90×63cm",
      year: "2026",
      image: "artworks/25.jpg",
      description: "폭압 착취자들은 약자의 피를 먹고 득세한다.\n그들만의 도시는 휘황찬란하지만\n윤복의 저 하늘에는 슬픔이 가시지 않았고,\n태일의 '집'은 어디에도 없다.\n하지만 태일의 불꽃은\n키세쓰(Kisses)로 다시 살아나 세상을 비춘다.\n나도 촛불을 든다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 26,
      artist: "신현경",
      title: "태일의 집과 천부경",
      material: "한국화 재료, 벽화기법",
      size: "53×45cm",
      year: "2026",
      image: "artworks/26.jpg",
      description: "살아서도 죽어서도\n어디에도 없는 태일의 집에 천부경이 들어선다.\n하나가 시작되나 시작이 없는 하나는 일시무시일(一始無始一)\n삼(三)을 낳고 다시 돌아와 그 하나는 끝나지만\n끝나지 않는 태일(太一)의 하나이다.\n일시무시일(一始無始一),\n그곳에는 스스로 살라 빛을 밝힌 광명(光明) 태일이 있다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 유대수
    {
      id: 32,
      artist: "유대수",
      title: "나는 너다",
      material: "한지 목판",
      size: "53×35cm, Ed.50",
      year: "2026",
      image: "artworks/32.jpg",
      description: "생의 지층이 쌓일수록\n꿈의 씨, 빛씨도 함께 쌓이고 자란다.\n가난은 죄가 아니고, 노동은 삶의 전체다.\n그러므로 너는 나다.\n'그대들이 아는 그대들의 전체의 일부인 나'는 너다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 35,
      artist: "유대수",
      title: "묏비나리",
      material: "한지 목판",
      size: "53×35cm, Ed.50",
      year: "2021",
      image: "artworks/35.jpg",
      description: "\"다만 저 거덜난 잿더미 속 자네의 맨 밑두리엔\n우주의 깊이보다 더 위대한 노여움\n꺼질 수 없는 사람의 목숨이 있을지니\n바로 그 불꽃으로 하여 자기를 지피시라\" (백기완)\n\n그때는 그랬다.\n술을 마시거나 연애를 하거나\n선생이 되고 싶어도 목숨을 걸으라 했다.\n진짜가 되려거든 그만한 각성과 진정을 가지라는 말이다.\n지금도 그렇다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 이경성
    {
      id: 18,
      artist: "이경성",
      title: "불의 트리거; 빛씨에 대한 은유",
      material: "목판 위에 혼합재료",
      size: "122×80cm",
      year: "2026",
      image: "artworks/leekyungsung-trigger.jpg",
      description: "타오르는 장작은 개인의 죽음이\n사회적 운동으로 확장되는 과정을 은유한다.\n불은 사상과 행동, 역사적 에너지를 품고 있다.\n검게 그을린 장작은 신체라는 외면을,\n붉은 생걸은 의식의 내면을 드러낸다.\n상단의 책과 권총의 중첩된 형상은\n의식이 실천으로 전환되는 '트리거(Trigger)'를 상징한다.\n촛불은 개별 형상이 아닌 불꽃 전체에 내재하며 집합적 에너지를 암시한다.\n이 작품은 소멸이 아닌 생성으로서,\n세계를 움직이는 의식과 실천을 시각화했다.\n............\n생걸 : 불이 다시 살아날 수 있는 불씨를 일컫는 토박이말",
      maxHeight: "calc(100vh - 350px)",
    },
    // 이달비
    {
      id: 22,
      artist: "이달비",
      title: "재가 된 몸에서 자라는 빛씨",
      material: "나무패널에 아크릴×혼합재료",
      size: "30.3×97.0cm",
      year: "2026",
      image: "artworks/33.png",
      description: "불에 타서 재가 된 줄 알았던 몸뚱이.\n그러나 봄바람이 스미자 그 속에서 새순이 튼다.\n그의 죽음은 끝이 아니었다.\n오히려 수많은 움이 돋아나 노동의 봄을 열었다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 24,
      artist: "이달비",
      title: "검게 탄 나무에 움이 트다",
      material: "Mixed Media on Panel",
      size: "97.0×97.0cm",
      year: "2026",
      image: "artworks/34.png",
      description: "검게 탄 나무에 봄볕이 스몄다.\n그 속에 빛씨가 꿈틀거리더니 새 움이 튼다.\n그의 죽음은 끝이 아니었다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 이운구
    {
      id: 27,
      artist: "이운구",
      title: "빛씨들의 이어진 시간",
      material: "캔버스에 아크릴",
      size: "130.3×80.3cm",
      year: "2026",
      image: "artworks/27.jpg",
      description: "전태일, 이재명, 이윤복. 이들의 따뜻한 연대는\n우리 공동체가 지향할 대동(大同)세상을 꿈꾸게 한다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 이흥덕
    {
      id: 16,
      artist: "이흥덕",
      title: "낮잠",
      material: "oil on canvas",
      size: "100×100cm",
      year: "1989~2026",
      image: "artworks/leeheungdeok-nap.jpg",
      description: "고단한 낮잠을 든 어느 그림쟁이를 그렸다.\n그를 위무할 깜냥으로 그렸지만\n이런 잠마저 태일과 윤복에게는 허락되지 않았을 것이다.\n잠든 몸 위로 말간 하늘씨가 떠있다.\n고단한 숨결은 평화롭고, 창은 하늘로 열려있는데,\n너머의 섬에는 꿈이 자란다. 거기가 빛이다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 장경희
    {
      id: 5,
      artist: "장경희",
      title: "저 하늘에도 슬픔이",
      material: "원목 채색",
      size: "47×22×22cm",
      year: "2026",
      image: "artworks/bust-sculpture-1.png",
      darkBg: true,
      description: "\"선생님, 이렇게 배가 고픈데 이 빵을 훔쳐 먹으면 죄가 되나요?\"\n며칠을 굶어서 '먹고 싶다'는 본능만 남은 소년 이윤복의 절규이다.\n늘 배가 고팠던 윤복,\n껌을 판 돈으로 국수를 사서 다섯 식구 끼니를 겨우 때워야 했지만\n엄마 젖을 파고들며 배가 고프다고 우는 어린아이를 보고\n국수 살 돈을 다 주고 만다.\n배가 고파봤기 때문이다. 배가 고프다는 게 어떤 고통인지 알기 때문이다.",
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
      description: "태일의 분신은 \"공돌이새끼가...\"라며 낮잡아보는 세상에\n겁 없이 대든 사건이었다.\n처지와 이상의 거리가 멀어 세상과 불화를 겪고 있던 태일은\n배운 친구 하나만이라도 있기를 바랐다.\n공돌이가 학생 신분 친구를 가지고 싶어한 대가는,\n넘을 수 없는 벽으로 돌아왔다. 높은 사람들이 정한 법은 엄연히 존재하는데,\n그 법대로만 해달라는 요구를 무시하고 멸시한 사회에게 태일은 분노한 것이다.\n공돌이가 책을 끼고 살지 말아야 했다. 정의 따위에 관심을 가지지 말았어야 했다.",
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
      description: "하필이면 태일의 집이 어느 여고 곁이었다.\n열여섯 사춘기에 그는 날마다 반짝이는 교복을 입은 여학생들과 마주쳐야 했다.\n그때마다 고개를 숙이거나 전봇대 뒤로 몸을 숨겼다.\n후줄근한 일복, 도시락 가방에서 나는 묵은김치 냄새가 부끄러웠다.\n같은 또래이면서 그들은 버스를 탈 때 '학생토큰'을,\n가난한 태일은 그보다 더 비싼 '일반토큰'을 내야 했다.\n그들이 부르는 최신 팝송은 넘볼 수 없는 신분의 증표였다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 전진경
    {
      id: 28,
      artist: "전진경",
      title: "사건을 바라보는 위치",
      material: "캔버스에 아크릴",
      size: "72×60cm",
      year: "2026",
      image: "artworks/28.jpg",
      description: "해고된 노동자가 자신의 일터 앞에서\n고공농성을 하고 있다.\n나는 그 현장에서 드로잉을 수행한다.\n나의 드로잉은 기록이 아니라\n동참하는 것이다.\n지나가는 사람들은\n내가 무엇을 그리는지 궁금해하며\n걸음을 멈추고 바라본다.\n그 순간 드로잉은\n공적 행위가 되고 사건이 된다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 정영창
    {
      id: 17,
      artist: "정영창",
      title: "전태일과 이윤복의 빛씨",
      material: "캔버스 천에 파인아트 프린트, 아크릴",
      size: "64×56cm",
      year: "2026",
      image: "artworks/jungyoungchang-bitcci.jpg",
      description: "어두운 시대의 밤을 뚫고\n스스로 빛이 된 이들의 뒷모습.\n그 빛은\n누군가에게는 정의였고,\n누군가에게는 희망이었습니다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 정현수
    {
      id: 23,
      artist: "정현수",
      title: "호의에 대하여",
      material: "도기판(陶器板) 위에 옻칠",
      size: "35×41cm",
      year: "2026",
      image: "artworks/junghyunsu-goodwill.jpg",
      description: "\"나의 일상을 풍요롭게 채우는 건 어떤 의미인가, 우리는 타인의 삶을 온전히 이해할 수 있는가, 사람과 사회는 바뀔 수 있는가. 그리고, 호의는 사람을, (또한) 세상을 어떻게 바꾸는가.\n주위에 불행한 사람이 있는 한 우리는 행복해질 수 없다.\"\n\n- 문형배 전 헌법재판소 소장 대행의 책 중에서 -",
      maxHeight: "calc(100vh - 350px)",
    },
    // 채한리
    {
      id: 7,
      artist: "채한리",
      title: "Oh! Jesus! We are all les Miserables!\n오! 주여! 우리는 모두 불쌍한 존재들입니다!",
      material: "린넨에 유채",
      size: "65.1×90.9cm",
      year: "2026",
      image: "artworks/chaehanri-oh-jesus.jpg",
      description: "우리는 저마다의 고통이 있다. 모두 불쌍한 존재들이다.\n그러나 나의 불행에 짓눌려 타인의 고통을 외면하고 그 신음에 냉소할 때,\n우리는 더욱 불쌍한 존재가 된다.",
      maxHeight: "calc(100vh - 350px)",
    },
    // 천광호
    {
      id: 36,
      artist: "천광호",
      title: "양철지붕 3.8평 남산동 전태일",
      material: "골판지+헝겊+아크릴 채색",
      size: "",
      year: "2026",
      image: "artworks/36.jpg",
      description: "호박은 거친 들에서 줄기를 뻗으며\n끈질기게 자란다.\n태일의 가족이 살았던 대구 남산동 집은\n양철 지붕에 벽체는 판자와 골판지로\n얼기설기 바람만 막았다.\n그 좁은 단칸방에 미싱 한 대와\n일곱의 식구가 살았다.\n그러나 태일은 그때가 인생에서\n가장 행복했다고 했다.\n껌을 팔기 위해 나선 윤복은\n태일의 집 지나간다.",
      maxHeight: "calc(100vh - 350px)",
    },
    {
      id: 37,
      artist: "천광호",
      title: "내 생애 가장 행복했던 집 남산동 전태일",
      material: "골판지+아크릴 채색",
      size: "60.5×85cm",
      year: "2020~2026",
      image: "artworks/37.jpg",
      description: "전태일이 살았던 집은\n지금 자취가 없다.\n태일은 그 시절이\n(윤복이 다니던 명덕국민학교 안에 있던\n야학을 다니던) 가장 행복했단다.\n어느날 그 곳에 호박꽃이\n활짝 피어 있었다.\n태일이 웃고 있는 모습 같아서\n크게 확대해서 그렸다.\n(당시 내가 본 모습은\n지붕이 내려앉아 있었다.\n지금은 시민의 모금으로\n'전태일기념관'이 들어서 있다.)",
      maxHeight: "calc(100vh - 350px)",
    },
    // 하성흡
    {
      id: 29,
      artist: "하성흡",
      title: "우공이산 \"빛씨로부터\"",
      material: "한지에 목탄 먹",
      size: "96×112cm",
      year: "2026",
      image: "artworks/29.jpg",
      description: "전태일과 이윤복의\n가난을 극복하려는 저항은\n새로운 봄볕을 데려왔다.\n윤복이 어둠을 이겨\n태일에게 그 빛씨를 심었기 때문이고,\n태일이 태산을 옮겨\n그 빛씨를 우리에게 심은 까닭이다.\n이제 우리가 이 빛씨를 피워내야 한다.",
      maxHeight: "calc(100vh - 350px)",
    },
  ]
};
