import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

const fetchSwapi = () => {
  const promise = axios.get("https://swapi.co/api/people/");
  return dispatch => {
    // dispatch FETCHING (first state)
    dispatch({ type: FETCHING })
    promise
      .then(response => {
        // 2nd state dispatch if success, response.data.RESULTS (check api)
        console.log('success', response.data.results)
        dispatch({ type: FETCHED, payload: response.data.results })
      })
      .catch(error => {
        console.log(error);
        // 2nd state dispatch if fail -> error
        dispatch({ type: ERROR });
      });
  };
};

export default fetchSwapi;