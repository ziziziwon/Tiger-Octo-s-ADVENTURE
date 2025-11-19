// 동적으로 포스터 이미지를 생성하는 유틸리티

export const generatePoster = (): string => {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 1300;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  // 배경 그라데이션 (밤하늘 → 심해빛)
  const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  bgGradient.addColorStop(0, '#0b0b15');
  bgGradient.addColorStop(0.5, '#1a1035');
  bgGradient.addColorStop(1, '#0b0b15');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 별 배경 (파스텔 톤)
  const starColors = ['#FFD100', '#FFB7D5', '#ACD9FF', '#FFFFFF'];
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2.5 + 0.5;
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    ctx.fillStyle = color;
    ctx.globalAlpha = Math.random() * 0.6 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // 상단 장식 라인
  const lineGradient = ctx.createLinearGradient(100, 150, canvas.width - 100, 150);
  lineGradient.addColorStop(0, 'transparent');
  lineGradient.addColorStop(0.5, '#FFD100');
  lineGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 150);
  ctx.lineTo(canvas.width - 100, 150);
  ctx.stroke();

  // 메인 타이틀 - 극동아시아 타이거즈
  ctx.font = 'bold 52px "Galmuri11", "Press Start 2P", monospace';
  ctx.fillStyle = '#FFD100';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(255, 209, 0, 0.8)';
  ctx.shadowBlur = 20;
  ctx.fillText('극동아시아 타이거즈', canvas.width / 2, 230);
  ctx.shadowBlur = 0;

  // 서브 타이틀 - SECRET SHOW
  ctx.font = '28px "Press Start 2P", monospace';
  ctx.fillStyle = '#FFB7D5';
  ctx.fillText('✦ SECRET SHOW ✦', canvas.width / 2, 290);

  // 중앙 극단이 실루엣 (픽셀 아트 느낌)
  const centerX = canvas.width / 2;
  const centerY = 550;
  
  // 극단이 실루엣 (간단한 원형으로 표현)
  ctx.fillStyle = '#FFD100';
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // 극단이 이모지 (크게)
  ctx.font = '120px Arial';
  ctx.fillText('🐙', centerX, centerY + 40);

  // 기타 픽 실루엣
  ctx.font = '60px Arial';
  ctx.fillText('🎸', centerX - 100, centerY + 10);
  
  // 별 아이콘
  ctx.fillText('⭐', centerX + 100, centerY + 10);

  // 중앙 장식 링 (픽셀 느낌)
  ctx.strokeStyle = '#FFD100';
  ctx.lineWidth = 4;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // 픽셀 장식 (상단)
  const pixelColors = ['#FFD100', '#FFB7D5', '#ACD9FF'];
  for (let i = 0; i < 20; i++) {
    const x = 200 + i * 25;
    const y = 380 + Math.sin(i * 0.5) * 20;
    ctx.fillStyle = pixelColors[i % pixelColors.length];
    ctx.globalAlpha = 0.6;
    ctx.fillRect(x, y, 12, 12);
  }
  ctx.globalAlpha = 1;

  // MEMORY STAGE 텍스트
  ctx.font = 'bold 36px "Press Start 2P", monospace';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('MEMORY STAGE', canvas.width / 2, 800);

  // 하단 정보
  ctx.font = '20px "Galmuri11", monospace';
  ctx.fillStyle = '#ACD9FF';
  ctx.fillText('2025 Limited Poster', canvas.width / 2, 870);

  // 하단 장식 라인
  const bottomLineGradient = ctx.createLinearGradient(100, 950, canvas.width - 100, 950);
  bottomLineGradient.addColorStop(0, 'transparent');
  bottomLineGradient.addColorStop(0.5, '#FFD100');
  bottomLineGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = bottomLineGradient;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 950);
  ctx.lineTo(canvas.width - 100, 950);
  ctx.stroke();

  // 하단 메시지
  ctx.font = '16px "Galmuri11", monospace';
  ctx.fillStyle = '#FFFFFF';
  ctx.globalAlpha = 0.7;
  ctx.fillText('극단이의 모험을 완료한 당신에게', canvas.width / 2, 1020);
  ctx.fillText('이 포스터를 선물합니다', canvas.width / 2, 1050);
  ctx.globalAlpha = 1;

  // 작은 별 장식 (하단)
  ctx.font = '20px Arial';
  for (let i = 0; i < 5; i++) {
    const x = 250 + i * 100;
    ctx.fillStyle = pixelColors[i % pixelColors.length];
    ctx.globalAlpha = 0.6 + Math.random() * 0.4;
    ctx.fillText('✨', x, 1120);
  }
  ctx.globalAlpha = 1;

  // 서명 (우측 하단)
  ctx.font = '14px "Galmuri11", monospace';
  ctx.fillStyle = '#666666';
  ctx.textAlign = 'right';
  ctx.fillText('© 극단이 프로젝트', canvas.width - 50, canvas.height - 40);

  // Canvas를 Data URL로 변환
  return canvas.toDataURL('image/png');
};

export const downloadPoster = () => {
  const dataUrl = generatePoster();
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'Tigers_Secret_Poster.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

