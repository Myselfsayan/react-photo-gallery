import { useState, useReducer, useCallback, useMemo } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initialFavourites } from '../reducers/favouritesReducer';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, dispatch] = useReducer(favouritesReducer, [], initialFavourites);
  //3rd argument initializer function only runs once on the initial mount

  //useCallback caches the actual function definitions so their memory reference stays identical across renders.
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, []);
// useMemo caches the calculated result of an expensive calculation.
  const filteredPhotos = useMemo(() => { //Array of photos filtered
    if (!searchTerm.trim()) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="mt-1 text-sm text-gray-500">Explore photos from Unsplash via Picsum</p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          filteredPhotos.length === 0 ? (
            <p className="text-center text-gray-500 py-12">No photos found for "{searchTerm}".</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavourite={favourites.includes(photo.id)}
                  onToggleFavourite={handleToggleFavourite}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
