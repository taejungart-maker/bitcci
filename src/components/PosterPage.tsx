import { exhibition } from '../data/exhibition';

export default function PosterPage() {
  return (
    <div className="w-full h-full flex-shrink-0 bg-white flex items-center justify-center">
      <img
        src={`${import.meta.env.BASE_URL}${exhibition.poster}`}
        alt={exhibition.title}
        className="max-w-full max-h-full object-contain"
        loading="eager"
      />
    </div>
  );
}
