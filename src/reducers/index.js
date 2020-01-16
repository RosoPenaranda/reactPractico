const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: state.myList.some(items => items.id === action.payload.id)
          ? [...state.myList]
          : [...state.myList, action.payload],
      };
      break;

    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter(
          items => items.id !== Number(action.payload)
        ),
      };
      break;

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
      break;

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
      break;

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
      break;

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          [],
      };
      break;

    case "IS_SEARCHING":
      return {
        ...state,
        isSearching: action.payload,
      };

      break;

    case "GET_VIDEOS":
      return {
        ...state,
        searching: state.trends
          .concat(state.originals)
          .filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
