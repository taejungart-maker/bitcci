export default function PosterPage() {
  return (
    <div className="w-full h-full flex-shrink-0 bg-white flex items-center justify-center">
      <img
        src={`${import.meta.env.BASE_URL}artworks/41.jpg`}
        alt="아르떼숲"
        className="object-contain"
        style={{
          maxWidth: '80%',
          maxHeight: '30%',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.5) saturate(1.8)',
        }}
        loading="eager"
      />
    </div>
  );
}
