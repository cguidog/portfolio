
// Get visible expenses

export default (cars, { brand, style, sortBy, brandSelect}) => {
  console.log(cars);
  return cars.filter((car) => {
    const brandMatch = car.brand.toLowerCase().includes(brand.toLowerCase());
    const styleMatch = car.style.toLowerCase().includes(style.toLowerCase());
    const brandSelect = car.brand;
    //console.log(brandSelect);
    return brandMatch && styleMatch && brandSelect;
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'year') {
      return a.year < b.year ? 1 : -1;
    }
  });
};

