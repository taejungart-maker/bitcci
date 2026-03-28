export default function PosterPage() {
  return (
    <div className="w-full h-full flex-shrink-0 bg-white flex items-center justify-center">
      <img
        src={`${import.meta.env.BASE_URL}artworks/41.jpg`}
        alt="아르떼숲"
        className="max-w-full max-h-full object-contain"
        loading="eager"
      />
    </div>
  );
}
