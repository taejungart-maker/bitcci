export default function PosterPage() {
  return (
    <div className="w-full h-full flex-shrink-0 bg-white flex items-center justify-center">
      <div className="flex items-center gap-3 select-none">
        {/* 아르떼 텍스트 */}
        <span
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 'clamp(28px, 6vw, 48px)',
            fontWeight: 700,
            color: '#2a2a2a',
            letterSpacing: '-0.02em',
          }}
        >
          아르떼
        </span>
        {/* 숲 아이콘 - 원본 색감 재현 */}
        <svg
          viewBox="0 0 60 60"
          style={{
            width: 'clamp(40px, 9vw, 64px)',
            height: 'clamp(40px, 9vw, 64px)',
          }}
        >
          {/* 나무 윗부분 (보라+초록 그라데이션) */}
          <defs>
            <linearGradient id="treeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ecdc4" />
              <stop offset="50%" stopColor="#7b68ee" />
              <stop offset="100%" stopColor="#9b59b6" />
            </linearGradient>
          </defs>
          <polygon points="30,4 50,28 10,28" fill="url(#treeTop)" />
          <polygon points="30,14 46,34 14,34" fill="url(#treeTop)" opacity="0.85" />
          {/* 집 (하단) */}
          <rect x="16" y="34" width="28" height="20" rx="1" fill="#5b6abf" />
          <rect x="22" y="34" width="16" height="20" rx="1" fill="#7986cb" />
          {/* 창문 */}
          <rect x="20" y="38" width="6" height="5" rx="0.5" fill="#e8eaf6" />
          <rect x="34" y="38" width="6" height="5" rx="0.5" fill="#e8eaf6" />
          {/* 문 */}
          <rect x="26" y="44" width="8" height="10" rx="1" fill="#3f51b5" />
          <circle cx="32" cy="50" r="1" fill="#e8eaf6" />
          {/* 지붕 삼각형 */}
          <polygon points="14,34 30,24 46,34" fill="#7c4dff" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
