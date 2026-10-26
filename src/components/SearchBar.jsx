export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search by author name..."
          className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        <svg
          className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
