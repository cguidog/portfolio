
// Get visible expenses

export default (cars, { brand, validator, sortBy, transmission}) => {
  return cars.filter((car) => {
    const brandMatch = car.brand.includes(brand);
    const validatorMatch = validator.indexOf(car.style) !== -1 || car.style.includes(validator);
    const tranmissionMatch = car.transmission.includes(transmission) || transmission === 'any';
    return brandMatch && validatorMatch && tranmissionMatch
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'year') {
      return a.year < b.year ? 1 : -1;
    }
  });
};
