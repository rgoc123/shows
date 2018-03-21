import { fetchShows } from "./shows_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    fitler,
    value
  };
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchShows(getState().ui.filters)(dispatch);
};
