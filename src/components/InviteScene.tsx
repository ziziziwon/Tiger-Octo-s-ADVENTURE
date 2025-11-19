import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InviteScene: React.FC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas 별 파티클 시스템
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas 크기 설정
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 별 파티클 생성
    interface Star {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
      twinkleSpeed: number;
      twinklePhase: number;
    }

    const stars: Star[] = [];
    const starCount = 150;
    const colors = [
      '#FFE4E1', // 파스텔 핑크
      '#E0F4FF', // 파스텔 블루
      '#FFF9E3', // 파스텔 옐로우
      '#FFE4F0', // 파스텔 로즈
      '#E8F5E9', // 파스텔 민트
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // 애니메이션 루프
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = '#0b0c10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // 반짝임 효과
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        
        // 별 그리기
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // 십자 반짝임 (큰 별에만)
        if (star.size > 1.5) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = star.opacity * twinkle * 0.5;
          
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }

        // 별 이동 (느리게 아래로)
        star.y += star.speedY;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0c10]">
      {/* Canvas 배경 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* 메인 컨텐츠 */}
      <motion.main
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.3, 1] }}
      >
        {/* 달 장식 */}
        <motion.div
          className="absolute top-20 right-10 text-8xl opacity-30"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🌕
        </motion.div>

        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="font-pixel text-3xl md:text-4xl text-yellow-300 mb-2">
            🌕 SECRET INVITE
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-8" />
        </motion.div>

        {/* 초대 메시지 */}
        <motion.div
          className="max-w-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="font-sans text-base md:text-lg mb-4 leading-relaxed" style={{ lineHeight: '1.8' }}>
            극동아시아 타이거즈 비공식 공연에<br />
            당신을 초대합니다.
          </p>
          <div className="bg-white/5 border border-white/20 rounded-lg p-4 backdrop-blur-sm mb-6">
            <p className="font-sans text-sm opacity-80 mb-2">
              📍 장소
            </p>
            <p className="font-pixel text-sm text-pink-300 mb-4">
              (MEMORY STAGE)
            </p>
            <p className="font-sans text-xs opacity-60 italic">
              "너도 이제, 우리의 노래 안에 있구나."
            </p>
          </div>
        </motion.div>

        {/* 입장 버튼 */}
        <motion.button
          onClick={() => navigate('/memory-stage')}
          className="font-pixel text-sm md:text-base px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.6)] border-4 border-yellow-500 hover:shadow-[0_0_50px_rgba(255,215,0,0.9)] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 50px rgba(255,215,0,1)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          enjoy!
        </motion.button>

        {/* 하단 안내 */}
        <motion.p
          className="font-sans text-xs opacity-40 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
        >
          모든 추억을 수집한 당신만이 볼 수 있는 특별한 무대입니다.
        </motion.p>

        {/* 홈 버튼 */}
        <motion.button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 font-sans text-sm px-4 py-2 bg-white/10 border border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← 홈으로
        </motion.button>
      </motion.main>

      {/* 빛나는 하단 그라데이션 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255,215,0,0.1), transparent)',
        }}
      />
    </div>
  );
};

export default InviteScene;
