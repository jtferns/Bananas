const initialState = {
  cities: {
    Austin: {
      name: 'Austin',
      country: 'USA',
      locations: [],
    }
  },
}

export default function citiesReducer(state = initialState, action) {
  return state;
}
