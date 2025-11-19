# 🐯🐙 극단이의 우당탕 모험 (Tiger Octo's Adventure)

이 프로젝트는 “호랑이 문어 캐릭터 극단이”의 세계관을 웹에서 인터랙티브하게 풀어낸 경험 중심 작품입니다.  
픽셀 아트 감성과 모션 디자인을 결합해 하나의 작은 ‘웹 모험’처럼 플레이할 수 있도록 설계했으며,  
React + TypeScript를 기반으로 Framer Motion, Zustand 등 인터랙션 중심 기술을 활용했습니다.

단순히 게임이 아니라, **사용자가 극단이의 감정·기억·여정을 함께 경험**할 수 있도록  
‘스토리–미니게임–수집–보상–갤러리’가 자연스럽게 연결되는 구조로 제작했습니다.


## ✨ 주요 기능

- 🎮 **인터랙티브 미니게임**
  - 별 잡기 게임
  - 빗방울 기억 게임
  - 아이템 캐치 게임

- 🎨 **비주얼 이펙트**
  - 라이트 블룸 효과
  - 패럴랙스 배경
  - 빗방울 & 반짝임 효과

- 📖 **스토리 요소**
  - 다양한 장면 전환
  - 감정 로그 시스템
  - 추억 수집 시스템
  - 인터랙티브 초대장 카드

- 🖼️ **갤러리 & 컬렉션**
  - 수집 가능한 아이템
  - 비하인드 씬 콘텐츠
  - 보상 시스템과 모달

## 🛠️ 기술 스택

- **프론트엔드 프레임워크**: React 18 with TypeScript
- **SPA 라우팅, 씬 전환 관리**: React Router v6
- **스타일링**: Tailwind CSS
- **상태 관리**: Zustand
- **애니메이션**: Framer Motion
- **빌드 도구**: Create React App

## 📦 설치 방법

```bash
# 저장소 클론
git clone https://github.com/ziziziwon/Tiger-Octo-s-ADVENTURE.git

# 프로젝트 디렉토리로 이동
cd Tiger-Octo-s-ADVENTURE

# 의존성 설치
npm install
```

## 🚀 실행 명령어

### `npm start`

개발 모드로 앱을 실행합니다.  
[http://localhost:3004/game](http://localhost:3004/game)을 열어서 브라우저에서 확인할 수 있습니다.

코드를 수정하면 페이지가 자동으로 새로고침됩니다.  
콘솔에서 lint 오류도 확인할 수 있습니다.

### `npm test`

인터랙티브 watch 모드로 테스트 러너를 실행합니다.

### `npm run build`

프로덕션용 앱을 `build` 폴더에 빌드합니다.  
React를 프로덕션 모드로 정확하게 번들링하고 최상의 성능을 위해 최적화합니다.

빌드는 최소화되며 파일 이름에 해시가 포함됩니다.

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── effects/          # 비주얼 이펙트 컴포넌트
│   ├── minigames/        # 인터랙티브 게임 컴포넌트
│   ├── LandingPage.tsx   # 메인 랜딩 페이지
│   ├── GamePage.tsx      # 게임 인터페이스
│   ├── GalleryPage.tsx   # 갤러리 뷰
│   └── ...
├── store/
│   ├── memoryStore.ts    # 메모리 상태 관리
│   └── useSceneStore.ts  # 장면 전환 상태
├── data/
│   └── scenes.ts         # 장면 설정 데이터
├── utils/
│   └── posterGenerator.ts # 유틸리티 함수
└── theme.ts              # 테마 설정
```

## 🎯 주요 컴포넌트

- **MemoryStage**: 추억 수집 메커니즘이 있는 메인 게임 스테이지
- **InviteScene**: 인터랙티브 초대장 카드 시스템
- **SceneLoader**: 동적 장면 전환 관리자
- **ProgressBar**: 시각적 진행 상황 추적
- **RewardModal**: 업적 및 보상 표시

## 📚 문서

- [타이거 초대장 가이드](./TIGERS_INVITE_GUIDE.md)
- [디버그 레이어 참고자료](./DEBUG_LAYERS.md)

## 🎨 디자인 철학

이 프로젝트는 다음을 결합합니다:
- **픽셀 아트 미학**: 향수를 불러일으키는 비주얼 스타일
- **모션 디자인**: 부드러운 애니메이션과 전환 효과
- **인터랙티브 스토리텔링**: 사용자 주도의 내러티브 경험
- **캐릭터 중심 경험**: 호랑이 문어의 여정에 집중

## 🎮 게임 플레이

사용자는 극단이와 함께 다양한 장면을 탐험하며:
- 추억을 수집하고
- 미니게임을 즐기고
- 감정을 기록하며
- 특별한 보상을 획득할 수 있습니다

## 🤝 기여하기

기여, 이슈 제보, 기능 요청을 환영합니다!

## 📝 라이선스

이 프로젝트는 [MIT](./LICENSE) 라이선스를 따릅니다.

## 👤 제작자

**ziziziwon**

---

❤️MADE WITH LOVE 💕 BY 극단이
