# Photo Gallery

A responsive photo gallery web app built with React, Vite, and Tailwind CSS.

## Features
- Fetches 30 photos from the Picsum API on load.
- Real-time search filter by author name without extra API calls or page reloads.
- Responsive grid (4 columns on desktop, 2 on tablet, 1 on mobile).
- Favourites managed via `useReducer` and persisted in `localStorage`.
- Custom hook (`useFetchPhotos`) to isolate fetching logic.
- Performance optimizations using `useCallback` and `useMemo`.

## Setup & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
