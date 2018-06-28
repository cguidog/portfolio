
// Get visible expenses

export default (cars, { brand, style, sortBy}) => {
  return cars.filter((car) => {
    const brandMatch = car.brand.toLowerCase().includes(brand.toLowerCase());
    const styleMatch = car.style.toLowerCase().includes(style.toLowerCase());
    //console.log(car);
    return brandMatch && styleMatch;
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'year') {
      return a.year < b.year ? 1 : -1;
    }
  });
};

