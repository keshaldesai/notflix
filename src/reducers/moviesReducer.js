import { GET_POPULAR } from "../actions/types";

const INITIAL_STATE = { popular: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POPULAR:
      return { ...state, popular: action.payload.results };
    default:
      return state;
  }
}
