export const setBrandFilter = (brand = '') => ({
    type: 'SET_BRAND_FILTER',
    brand
});
export const setStyleFilter = (style = '') => ({
    type: 'SET_STYLE_FILTER',
    style
});
export const setTransmissionFilter = (transmission = '') => ({
    type: 'SET_TRANSMISSION_FILTER',
    transmission
});

export const sortByPrice = () => ({
    type: 'SORT_BY_PRICE'
});

export const sortByYear = () => ({
    type: 'SORT_BY_YEAR'
});
export const setBrandListFilter = (brandList = ['ALL']) => ({
    type: 'SET_BRANDLIST_FILTER',
    brandList
});
export const setStyleValidatorFilter = (validator = []) => ({
    type: 'SET_STYLE_VALIDATOR_FILTER',
    validator
});
export const setStyleValidatorFilterRemove = (validator = []) => ({
    type: 'SET_STYLE_VALIDATOR_FILTER_REMOVE',
    validator
});