
// Get visible expenses

export default (cars, { brand, validator, sortBy}) => {
  //console.log(cars);
  return cars.filter((car) => {
    const brandMatch = car.brand.includes(brand);
    //const styleMatch = validator.includes(car.style);
    const validatorMatch = validator.indexOf(car.style) !== -1 || car.style.includes(validator);
    //console.log(brandSelect);
    return brandMatch && validatorMatch
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'year') {
      return a.year < b.year ? 1 : -1;
    }
  });
};
