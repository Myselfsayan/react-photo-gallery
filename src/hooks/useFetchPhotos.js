import { useState, useEffect } from 'react';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]); // An array holding the fetched photo objects
  const [loading, setLoading] = useState(true);//A boolean flag indicating whether the network request is still pending
  const [error, setError] = useState(null);//  Either null or a descriptive error string.

  useEffect(() => {
    let active = true;

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://picsum.photos/v2/list?limit=30');
        if (!res.ok) { //To Check API fails
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        if (active) { // Active cleanup flag in useEffect. If the component unmounts before the fetch finishes, active becomes false
          setPhotos(data);
          setLoading(false);
        }
      } catch (err) { // Handled API fails
        if (active) {
          setError(err.message || 'Failed to fetch photos');
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => {
      active = false;
    };
  }, []);

  return { photos, loading, error };
}
