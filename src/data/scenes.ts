export interface Choice {
  text: string;
  emoji: string;
  next: string;
  effect?: 'happy' | 'cute' | 'rush' | 'friend' | 'bold' | 'excited' | 'peaceful';
  emotion?: string; // 모든 이모지 허용
  personality?: 'careful' | 'hasty' | 'kind';
}

export interface CollectibleItem {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface Scene {
  sceneId: string;
  title: string;
  text: string;
  subText?: string; // 추가 텍스트 (감정 표현)
  options: Choice[];
  background: string;
  bgColor: string;
  music?: string;
  musicTone?: 'lofi' | 'jazz' | 'synth';
  effect?: 'rain' | 'sparkle' | 'light_bloom' | 'particles';
  characterEmotion: string;
  collectibles?: CollectibleItem[]; // 수집 가능한 아이템
  emotionalTheme?: string; // 감정 테마
  progressPercent?: number; // 진행도
  miniGame?: 'itemCatch' | 'rainMemory' | 'starCatcher'; // 미니게임 타입
  reward?: {
    id: string;
    text: string;
    type: 'lyric' | 'thought' | 'memory';
  };
  memoryCard?: {
    title: string;
    description: string;
    image?: string;
  };
}

export interface StoryData {
  title: string;
  scenes: { [key: string]: Scene };
}

export const storyData: StoryData = {
  title: "극단이의 우당탕 모험",
  scenes: {
    // Scene 1: 준비 / 설렘 (20%)
    scene1: {
      sceneId: "scene1",
      title: "극동아시아타이거즈의 공연 날",
      text: "오늘은 드디어 공연날이에요! 극단이는 서둘러 짐을 챙겨야 해요.",
      subText: '"우에이야~"',
      miniGame: 'itemCatch',
      reward: {
        id: 'memory_Myonmok',
        text: '흘러가 버린 그때엔 할말이 있었는데...',
        type: 'memory'
      },
      options: [
        { 
          text: "긴치전 호랑이를 꼼꼼히 챙긴다", 
          emoji: "🐯", 
          next: "scene1_guitar", 
          effect: "happy",
          emotion: "😊",
          personality: "careful"
        },
        { 
          text: "젤리부터 챙긴다", 
          emoji: "🍬", 
          next: "scene1_candy", 
          effect: "cute",
          emotion: "😊",
          personality: "kind"
        },
        { 
          text: "티켓만 들고 급하게 나간다", 
          emoji: "🎫", 
          next: "scene1_rush", 
          effect: "rush",
          emotion: "😤",
          personality: "hasty"
        }
      ],
      background: "bg-gradient-to-b from-yellow-300 via-orange-200 to-pink-200",
      bgColor: "#FFD37F",
      characterEmotion: "😊",
      musicTone: "lofi",
      emotionalTheme: "기대와 두근거림",
      progressPercent: 20,
      collectibles: [
        { id: "guitar", name: "긴치전 슬로건", emoji: "🐯", description: "펜타에서 잃어버렸다가 극단이가 찾아준 슬로건" },
        { id: "ticket", name: "공연 티켓", emoji: "🎫", description: "6개월을 기다려서 예매한 소중한 티켓" },
        { id: "candy", name: "용기 젤리", emoji: "🍬", description: "공연 전 긴장을 풀어주는 달콤한 젤리" }
      ],
      memoryCard: {
        title: "두근거리는 시작",
        description: "6개월을 기다린 오늘, 드디어 공연장으로 향하는 첫 걸음"
      }
    },

    // Scene 1-1: 기타를 챙긴 경우
    scene1_guitar: {
      sceneId: "scene1_guitar",
      title: "소중한 긴치전 슬로건",
      text: "긴치전 호랑이를 소중히 가방에 넣었어요.",
      subText: '"펜타에서 잃어 버렸다가 극단이가 찾아준 슬로건이에요!"',
      options: [
        { text: "출발!", emoji: "🚶", next: "scene2", emotion: "😊" }
      ],
      background: "bg-gradient-to-b from-yellow-300 via-orange-200 to-pink-200",
      bgColor: "#FFD37F",
      characterEmotion: "😊",
      progressPercent: 25
    },

    // Scene 1-2: 젤리를 챙긴 경우
    scene1_candy: {
      sceneId: "scene1_candy",
      title: "달콤한 용기",
      text: "젤리 하나를 입에 넣었어요. 달콤한 맛이 입안 가득!<br/> 긴장이 풀리고 용기가 솟아나요.",
      subText: '"이 젤리 하나면 어떤 순간도 이겨낼 수 있어! 공연장에서 무슨 일이 일어나든!"',
      options: [
        { text: "출발!", emoji: "🚶", next: "scene2", emotion: "😊" }
      ],
      background: "bg-gradient-to-b from-yellow-300 via-orange-200 to-pink-200",
      bgColor: "#FFD37F",
      characterEmotion: "😋",
      progressPercent: 25
    },

    // Scene 1-3: 급하게 나간 경우
    scene1_rush: {
      sceneId: "scene1_rush",
      title: "출발 진행!",
      text: "티켓! 티켓만 있으면 돼! <br/>극단이는 신발끈도 안 묶고 급하게 뛰쳐나갔어요.",
      subText: '"늦으면 안 돼! 앞자리에서 즐기고 싶어!"',
      options: [
        { text: "달려!", emoji: "🏃", next: "scene2", emotion: "😤" }
      ],
      background: "bg-gradient-to-b from-yellow-300 via-orange-200 to-pink-200",
      bgColor: "#FFD37F",
      characterEmotion: "😤",
      progressPercent: 25
    },

    // Scene 2: 길 위의 우연 (40%)
    scene2: {
      sceneId: "scene2",
      title: "버스 창가에서",
      text: "버스 창밖으로 도시가 흘러가네요.<br/> 옆 자리에 그리운 친구인 토마토 문어가 앉았어요!",
      subText: '"맑은 날씨에 하얀 구름에 그리운 너와 이 거리를 걷고"',
      options: [
        { 
          text: "같이 가자고 제안한다", 
          emoji: "🤝", 
          next: "scene2_friend",
          emotion: "😊"
        },
        { 
          text: "인사만 하고 조용히 간다", 
          emoji: "👋", 
          next: "scene2_alone",
          emotion: "🤔"
        }
      ],
      background: "bg-gradient-to-b from-sky-300 via-blue-200 to-cyan-200",
      bgColor: "#AEE2FF",
      characterEmotion: "😯",
      musicTone: "lofi",
      emotionalTheme: "호기심과 설렘",
      progressPercent: 40,
      collectibles: [
        { id: "bus_card", name: "교통카드", emoji: "💳", description: "공연장으로 가는 설렘 가득한 여정의 동반자" }
      ],
      memoryCard: {
        title: "음악으로 이어진 인연",
        description: "같은 음악을 사랑하는 사람을 만난 특별한 순간"
      }
    },

    // Scene 2-1: 친구와 함께
    scene2_friend: {
      sceneId: "scene2_friend",
      title: "음악으로 통하는 친구",
      text: "토마토 문어가 환하게 웃으며 좋다고 해요!<br/>서로 서로 좋아하는 곡을 이야기하며 즐겁게 가요.",
      subText: '"같은 밴드를 좋아하는 친구와 함께 공연을 보다니!<br/> 오늘 공연은 두 배로 특별할 거야!"',
      options: [
        { text: "계속 가기", emoji: "🚶", next: "scene3", emotion: "😊" }
      ],
      background: "bg-gradient-to-b from-sky-300 via-blue-200 to-cyan-200",
      bgColor: "#AEE2FF",
      characterEmotion: "😊",
      progressPercent: 45
    },

    // Scene 2-2: 혼자 가기
    scene2_alone: {
      sceneId: "scene2_alone",
      title: "나만의 음악 시간",
      text: "조용히 미소로 인사하고 이어폰을 꽂았어요. <br/> 노래를 들으며 창밖을 한참 바라봐요.",
      subText: '"이렇게 혼자 음악에 빠져있는 시간도 소중해. <br/> 곧 실제로 라이브로 들을 수 있다니 기대되는구나"',
      options: [
        { text: "계속 가기", emoji: "🎧", next: "scene3", emotion: "😌" }
      ],
      background: "bg-gradient-to-b from-sky-300 via-blue-200 to-cyan-200",
      bgColor: "#AEE2FF",
      characterEmotion: "😌",
      progressPercent: 45
    },

    // Scene 3: 시련 / 비 (60%)
    scene3: {
      sceneId: "scene3",
      title: "비냄새",
      text: "버스에서 내렸는데 갑자기 비가 내려요. 우산을 두고 왔네요...",
      subText: '"우리 처음 만난 그날 처럼 다시 비냄새가 나고 있고"',
      miniGame: 'rainMemory',
      reward: {
        id: 'lyric_rain',
        text: '그대를 그리다 오늘 하루가 흘러가고',
        type: 'lyric'
      },
      options: [
        { 
          text: "비를 맞으며 계속 걷는다", 
          emoji: "🌧️", 
          next: "scene3_rain",
          emotion: "😢"
        },
        { 
          text: "처마 밑에서 비를 피한다", 
          emoji: "🏠", 
          next: "scene3_wait",
          emotion: "😌"
        }
      ],
      background: "bg-gradient-to-b from-slate-400 via-purple-300 to-indigo-300",
      bgColor: "#C1B4E1",
      characterEmotion: "😢",
      effect: "rain",
      musicTone: "jazz",
      emotionalTheme: "외로움과 회상",
      progressPercent: 60,
      collectibles: [
        { id: "umbrella", name: "낡은 우산", emoji: "🌂", description: "비 냄새와 함께 떠오른 첫 만남의 기억" }
      ],
      memoryCard: {
        title: "비냄새와 추억",
        description: "빗소리 속에서 떠오른 그날의 설렘"
      }
    },

    // Scene 3-1: 비를 맞으며 걷기
    scene3_rain: {
      sceneId: "scene3_rain",
      title: "빗속의 추억",
      text: "오늘은 비가 와도 좋을 것같아요.",
      subText: '"흐려진 마음에 잠깐의 비가 내리면 어떨까?"',
      options: [
        { text: "계속 걷기", emoji: "🚶", next: "scene4", emotion: "😌" }
      ],
      background: "bg-gradient-to-b from-slate-400 via-purple-300 to-indigo-300",
      bgColor: "#C1B4E1",
      characterEmotion: "😌",
      effect: "rain",
      progressPercent: 65
    },

    // Scene 3-2: 비를 피하기
    scene3_wait: {
      sceneId: "scene3_wait",
      title: "잠시 쉬어가기",
      text: "처마 밑에서 비를 피했어요. 빗소리를 들으며 잠시 숨을 고르네요.",
      subText: '"급하게 갈 필요 없어. 비도 감상하면서 천천히 가자."',
      options: [
        { text: "다시 출발", emoji: "🚶", next: "scene4", emotion: "😊" }
      ],
      background: "bg-gradient-to-b from-slate-400 via-purple-300 to-indigo-300",
      bgColor: "#C1B4E1",
      characterEmotion: "😊",
      effect: "rain",
      progressPercent: 65
    },

    // Scene 4: 공연장 앞 / 위기 (80%)
    scene4: {
      sceneId: "scene4",
      title: "별빛 아래",
      text: "드디어 공연장이에요! 입구에서 티켓을 꺼내려는데... ",
      subText: '"티켓이 안 보여요! 가방 어딘가에 있을 텐데..."',
      options: [
        { 
          text: "당황하며 가방을 뒤진다", 
          emoji: "😰", 
          next: "scene4_resolve",
          emotion: "😰"
        },
        { 
          text: "깊게 숨을 쉬고 차분히 찾는다", 
          emoji: "🧘", 
          next: "scene4_resolve",
          emotion: "😌"
        }
      ],
      background: "bg-gradient-to-b from-purple-500 via-pink-400 to-rose-400",
      bgColor: "#FFB6C1",
      characterEmotion: "😱",
      emotionalTheme: "긴장과 위기",
      progressPercent: 80,
      collectibles: [
        { id: "poster", name: "공연 포스터", emoji: "🎪", description: "벽에 붙여두고 매일 보던 오늘의 증거" }
      ],
      memoryCard: {
        title: "가슴 졸인 순간",
        description: "6개월을 기다린 티켓을 잃을 뻔한 아찔한 순간"
      }
    },

    // Scene 4.5: 해결
    scene4_resolve: {
      sceneId: "scene4_resolve",
      title: "찾았다!",
      text: "있었다! 가방 안에서 티켓을 찾았어요! <br/> 토마토 문어가 함께 기뻐해요.",
      subText: '"다행이야... 이순간을 기다렸는데.<br/> 이제 드디어 들어갈 수 있어!"',
      options: [
        { 
          text: "고마워, 들어갈게!", 
          emoji: "🚪", 
          next: "scene5",
          emotion: "😊"
        }
      ],
      background: "bg-gradient-to-b from-purple-500 via-pink-400 to-rose-400",
      bgColor: "#FFB6C1",
      characterEmotion: "😌",
      emotionalTheme: "안도와 감사",
      progressPercent: 85,
      memoryCard: {
        title: "함께라서 든든해",
        description: "힘든 순간에 옆에 있어준 친구의 따뜻함"
      }
    },

    // Scene 5: 공연 시작 / 해소 (95%)
    scene5: {
      sceneId: "scene5",
      title: "별이 되어",
      text: "객석이 어두워지고... 무대 위로 조명이 쏟아져요. 드디어!",
      subText: '"첫 코드가 울려 퍼지는 순간, 나도 별이 된 것 같아."',
      miniGame: 'starCatcher',
      reward: {
        id: 'lyric_star',
        text: '숨겨진 별들이 내별일거야!',
        type: 'lyric'
      },
      options: [
        { 
          text: "열정적으로 환호한다", 
          emoji: "🙌", 
          next: "scene5_cheer",
          emotion: "😆"
        },
        { 
          text: "조용히 눈물 흘리며 감상한다", 
          emoji: "🥲", 
          next: "scene5_emotional",
          emotion: "😌"
        }
      ],
      background: "bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400",
      bgColor: "#FF69B4",
      characterEmotion: "🤩",
      effect: "light_bloom",
      musicTone: "synth",
      emotionalTheme: "감동과 해소",
      progressPercent: 95,
      collectibles: [
        { id: "setlist", name: "세트리스트", emoji: "📝", description: "손글씨로 적힌 오늘의 공연 곡 목록" },
        { id: "pick", name: "기타 픽", emoji: "🎸", description: "기타리스트가 관객석으로 던져준 픽" }
      ],
      memoryCard: {
        title: "첫 코드가 울려 퍼진 순간",
        description: "꿈에 그리던 무대, 실제로 마주한 마법 같은 순간"
      }
    },

    // Scene 5-1: 열정적으로 즐기기
    scene5_cheer: {
      sceneId: "scene5_cheer",
      title: "흔들리는 시간속에 함께 만드는 무대",
      text: "극단이는 가사를 외워온 노래를 목청껏 따라 불러요!",
      subText: '"관객도 밴드도 모두 함께 만드는 무대!<br/> 이게 바로 라이브의 매력이지!"',
      options: [
        { text: "계속 즐기기", emoji: "🎉", next: "scene6", emotion: "🤩" }
      ],
      background: "bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400",
      bgColor: "#FF69B4",
      characterEmotion: "🤩",
      effect: "light_bloom",
      progressPercent: 98
    },

    // Scene 5-2: 감동받으며 감상
    scene5_emotional: {
      sceneId: "scene5_emotional",
      title: "시간이 멈춘 순간",
      text: "조용히 눈을 감고 음악에 몸을 맡겨요. 행복의 눈물이 흘러요.",
      subText: '"이 목소리, 이 멜로디...<br/> 이어폰으로 수천 번 들었지만, 지금 이 순간만큼 완벽한 적은 없었어."',
      options: [
        { text: "여운에 잠기기", emoji: "🥲", next: "scene6", emotion: "😌" }
      ],
      background: "bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400",
      bgColor: "#FF69B4",
      characterEmotion: "🥲",
      effect: "light_bloom",
      progressPercent: 98
    },

    // Scene 6: 엔딩 / 추억 (100%)
    scene6: {
      sceneId: "scene6",
      title: "별빛이 된 추억",
      text: "앵콜까지 모두 끝나고 공연장을 나왔어요.<br/> 밤하늘에 별이 반짝이고 있어요.",
      subText: '"하얀별들 사이에 오늘 추억이 내 안에 별처럼 영원히 빛날 거야."',
      options: [
        { 
          text: "추억을 돌아본다", 
          emoji: "📸", 
          next: "gallery",
          emotion: "😌"
        },
        { 
          text: "처음부터 다시", 
          emoji: "🔁", 
          next: "scene1",
          emotion: "😊"
        }
      ],
      background: "bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700",
      bgColor: "#E6E6FA",
      characterEmotion: "🥲",
      effect: "sparkle",
      musicTone: "lofi",
      emotionalTheme: "여운과 성장",
      progressPercent: 100,
      collectibles: [
        { id: "photo", name: "공연 사진", emoji: "📸", description: "시간이 지나도 색바래지 않을 그날의 모습" },
        { id: "memory", name: "그날의 기억", emoji: "💫", description: "별빛처럼 반짝일 평생의 보물" }
      ],
      memoryCard: {
        title: "별이 된 추억",
        description: "오늘 하루가 가슴 속 별빛으로 영원히 빛날 거예요"
      }
    },

   
  }
};

