import { FETCHING, FETCHED, ERROR } from "../actions";

// define a few properties here.
// Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      // If only fetching trigger fetching boolean
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        // If request succeeds build out chars array
        // Set fetched boolean to true
        // Also set fetching boolean to false since no longer fetching
        chars: [...state.chars, ...action.payload],
        fetched: true,
        fetching: false
      });
    case ERROR:
      return Object.assign({}, state, {
        // Not fetching, set fetching boolean to false
        fetching: false,
        error: "Error fetching Swapi, please try again"
      });
    default:
      return state;
  }
};
