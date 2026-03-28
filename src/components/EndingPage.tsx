import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function EndingPage() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md"
      >
        {/* 감사 인사 */}
        <p
          className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Thank you
        </p>

        <h2
          className="text-white font-bold mb-8 tracking-wide"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          <span className="text-2xl">전태일과 이윤복의</span>
          <br />
          <span className="text-4xl">빛씨</span>
        </h2>

        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />

        {/* 전시 정보 */}
        <div
          className="space-y-2 text-white/50 text-sm mb-8"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          <p>{exhibition.period}</p>
          <p>{exhibition.venue}</p>
        </div>

        <div className="w-8 h-[1px] bg-white/10 mx-auto mb-8" />

        {/* 아르떼숲 로고 */}
        <img
          src={`${import.meta.env.BASE_URL}artworks/44.png`}
          alt="아르떼숲"
          className="mx-auto"
          style={{ maxHeight: '40px', opacity: 0.6 }}
        />
      </motion.div>
    </div>
  );
}
