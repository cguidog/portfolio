import moment from 'moment';

// Get visible expenses

export default (cars, { brand, style, sortBy}) => {
  return cars.filter((car) => {
    //const createdAtMoment = moment(car.createdAt);
    //const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    //const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const brandMatch = car.brand.toLowerCase().includes(brand.toLowerCase());
    const styleMatch = car.style.toLowerCase().includes(style.toLowerCase());

    return brandMatch && styleMatch;
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'year') {
      return a.year < b.year ? 1 : -1;
    }
  });
};
