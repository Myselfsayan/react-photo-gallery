export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
      <div className="relative aspect-[4/3] bg-gray-100">
        <img
          src={`https://picsum.photos/id/${photo.id}/400/300`}
          alt={photo.author}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button
          onClick={() => onToggleFavourite(photo.id)}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition"
          aria-label="Toggle favourite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${isFavourite ? 'fill-red-500 text-red-500' : 'fill-none stroke-current'}`}
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-500">Author</p>
        <p className="text-sm font-medium text-gray-800 truncate">{photo.author}</p>
      </div>
    </div>
  );
}
