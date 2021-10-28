const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH": {
      return { ...state, stateUser: action.payload };
    }
    case "SET_ADD_FAVORITES": {
      const fav = [...state.favorites];
      if (!fav.find((x) => x.id === action.payload.id)) {
        //not repeat item
        fav[fav.length] = action.payload;
      }
      return { ...state, favorites: fav };
    }
    case "SET_DELETE_FAVORITES": {
      const fav = [...state.favorites];
      const favoritesDelete = fav.filter((obj) => obj.id !== action.payload.id);
      return {
        ...state,
        favorites: favoritesDelete,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
