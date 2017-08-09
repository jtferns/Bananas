import {
  ADD_CITY,
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants';
import getData from '../api';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  }
}

export function fetchDataFromAPI() {
  return (dispatch) => {
    dispatch(fetchingData())
    getData()
      .then(data => dispatch(fetchingDataSuccess(data)))
      .catch(() => dispatch(fetchingDataFailure()))
  }
}

function fetchingData() {
  return {
    type: FETCHING_DATA,
  }
}

function fetchingDataSuccess(cities) {
  return {
    type: FETCHING_DATA_SUCCESS,
    cities
  }
}

function fetchingDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  }
}
