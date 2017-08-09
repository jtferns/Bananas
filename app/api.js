const cities = {
  NewYork: {
    name: 'New York',
    country: 'USA',
    locations: [],
  },
  Boston: {
    name: 'Boston',
    country: 'USA',
    locations: [],
  },
  Seattle: {
    name: 'Seattle',
    country: 'USA',
    locations: [],
  },
}

const getData = () => new Promise(resolve => {
  return setTimeout(() => {
    resolve(cities)
  }, 2500);
});

export default getData;
