import { GET_POPULAR, GET_THEATRE } from "../actions/types";

const INITIAL_STATE = { popular: [], theatre: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POPULAR:
      return { ...state, popular: action.payload.data.results };
    case GET_THEATRE:
      return { ...state, theatre: action.payload.data.results };
    default:
      return state;
  }
}
