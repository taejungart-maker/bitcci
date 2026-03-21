import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import type { Artwork } from "../data/exhibition";

interface ArtworkPageProps {
  artwork: Artwork;
}

export default function ArtworkPage({ artwork }: ArtworkPageProps) {
  const clipPath = artwork.clipPath || "inset(0% 0% 0% 0%)";
  const maxWidth = artwork.maxWidth || '85vw';
  const maxHeight = artwork.maxHeight || '45vh';
  const isDark = artwork.darkBg ?? false;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  // 스크롤 가능 여부 체크
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 4);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [artwork.description]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrolledToBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 10);
  };

  // 배경/텍스트 색상
  const bgColor = isDark ? '#111111' : '#ece4f0';
  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-800';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';
  const textDescription = isDark ? 'text-gray-300' : 'text-gray-600';
  const dividerColor = isDark ? 'bg-gray-700' : 'bg-gray-200';

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Artwork Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center shrink-0 px-[5px] pt-6 pb-3"
      >
        <img
          src={`${import.meta.env.BASE_URL}${artwork.image}`}
          alt={artwork.title}
          className="h-auto object-contain"
          style={{
            clipPath,
            maxWidth,
            maxHeight,
            width: 'auto',
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Caption - 작가명 먼저, 제목 이탤릭 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full text-center py-2 pb-2 shrink-0 px-4"
      >
        {artwork.artist && (
          <p
            className={`${textPrimary} text-base font-semibold tracking-wide mb-1`}
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {artwork.artist}
          </p>
        )}
        <p
          className={`${textSecondary} text-[15px] leading-relaxed mb-1.5 whitespace-pre-line`}
          style={{ fontFamily: "'Noto Serif', 'Noto Sans KR', serif", fontStyle: 'italic' }}
        >
          {artwork.title}
        </p>
        <p
          className={`${textSecondary} text-xs font-light leading-relaxed tracking-wide`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {artwork.material}, {artwork.size}, {artwork.year}
        </p>
      </motion.div>

      {/* Description - 남은 공간에서 세로 스크롤 */}
      {artwork.description ? (
        <div className="flex-1 relative min-h-0">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="absolute inset-0 overflow-y-auto px-6 pb-20"
            style={{ touchAction: 'pan-y pinch-zoom' }}
          >
            <div className="max-w-lg mx-auto pt-2">
              <div className={`w-8 h-[1px] ${dividerColor} mx-auto mb-4`} />
              <div
                className={`${textDescription} text-[13.5px] leading-[1.8] text-center break-keep flex flex-col gap-0`}
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {artwork.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* 스크롤 힌트 - 그라데이션 페이드 */}
          {canScroll && !scrolledToBottom && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent, ${bgColor})`,
              }}
            />
          )}
        </div>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
