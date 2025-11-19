# Z-Index 레이어 구조 (선택지 클릭 문제 해결)

## 📊 현재 레이어 순서 (높은 순서대로)

1. **z-100**: 선택지 버튼 컨테이너 및 버튼들 ✨ **최우선 클릭 가능** (큰 화면 대응)
2. **z-100**: RewardModal (보상 모달)
3. **z-60**: HOME 버튼 (fixed positioning)
4. **z-40**: ProgressBar (진행도 바), EmotionLog (감정 로그)
5. **z-15**: CollectibleItem (수집 아이템)
6. **z-10**: 메인 콘텐츠 컨테이너 (absolute positioning)
7. **z-5**: 하단 장식
8. **z-0**: ParallaxBackground, 이펙트 레이어

## 🎯 Pointer-Events 설정

### ✅ 클릭 가능 (pointer-events-auto)
- 선택지 버튼 컨테이너 (z-50)
- 각 선택지 버튼 (type="button", touchAction: "manipulation")
- ProgressBar (z-40)
- EmotionLog (z-40)
- CollectibleItem (z-15)

### ❌ 클릭 불가 (pointer-events-none)
- 메인 콘텐츠 컨테이너 (z-10)
- 극단이 캐릭터
- 대화창
- 버튼 내부의 텍스트/아이콘 요소

## 🔧 주요 수정 사항

### 큰 화면 대응 (최종 수정)
1. **메인 컨테이너 레이아웃 변경**: `h-screen` → `absolute inset-0`
   - 화면 크기와 무관하게 전체 화면 차지
   - 큰 화면에서 `max-w-3xl` 중앙 정렬 유지
   - 레이아웃 안정성 확보

2. **선택지 버튼 z-index 최우선**: z-30 → z-100
   - 모든 요소 위에 표시
   - 큰 화면에서도 클릭 보장

3. **HOME 버튼 positioning 변경**: `absolute` → `fixed`, z-50 → z-60
   - 스크롤과 무관하게 항상 고정
   - 선택지보다는 낮지만 다른 UI보다 높음

### 기본 수정 사항
4. **메인 컨테이너 pointer-events 차단**: pointer-events-none 추가
5. **선택지 컨테이너만 활성화**: pointer-events-auto, z-100
6. **CollectibleItem z-index 하향**: z-20 → z-15
7. **버튼 type 명시**: type="button" 추가
8. **이벤트 핸들러 강화**: 
   - e.preventDefault()
   - e.stopPropagation()
   - onPointerDown 추가

## 🎮 테스트 방법

1. 브라우저 새로고침
2. 개발자 콘솔 열기 (F12)
3. Scene 1 미니게임 완료 또는 닫기
4. 선택지 버튼 클릭 시 콘솔 확인:
   ```
   👆 포인터 다운: [버튼 텍스트]
   🖱️ 버튼 클릭됨: [버튼 텍스트]
   🎯 선택지 클릭: [버튼 텍스트] → [다음 씬]
   🎭 성격 설정: [성격]
   ```

## 🐛 디버깅

콘솔에서 다음 정보 확인:
- `📊 상태`: showMiniGame, showReward, shouldShowContent
- 버튼이 보이는데 클릭이 안 되면: 다른 요소가 버튼을 가리고 있는지 확인
- 요소 검사 (Inspect)로 버튼의 실제 z-index 확인

## 🎯 문제 발생 시 체크리스트

- [ ] `showMiniGame === false`
- [ ] `showReward === false`
- [ ] `shouldShowContent === true`
- [ ] 콘솔에 "👆 포인터 다운" 로그 표시
- [ ] 버튼 위에 다른 투명 레이어 없음
- [ ] EmotionLog나 ProgressBar가 버튼과 겹치지 않음

