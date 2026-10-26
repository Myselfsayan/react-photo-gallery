const STORAGE_KEY = 'photo_gallery_favourites';

export const initialFavourites = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export function favouritesReducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'TOGGLE_FAVOURITE': { //Handles the TOGGLE_FAVOURITE action
      const id = action.payload;// Unique photo id
      nextState = state.includes(id)
        ? state.filter((item) => item !== id)//Remove
        : [...state, id];//Append
      break;
    }
    default:
      return state;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));// Updated State to LS
  return nextState;
}
