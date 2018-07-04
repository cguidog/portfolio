const filtersReducerDefaultState = {
    brand: '',
    style: '',
    transmission: '',
    sortBy: 'price',
    brandList: ['ALL'],
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_BRAND_FILTER':
            return {
                ...state,
                brand: action.brand
                };
        case 'SET_STYLE_FILTER':
            return {
                ...state,
                style: action.style
                };
        case 'SET_TRANSMISSION_FILTER':
            return {
                ...state,
                transmission: action.transmission
                };
        case 'SET_BRANDLIST_FILTER':
            return {
                ...state,
                brandList: action.brand
            }
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
                };
        case 'SORT_BY_YEAR':
            return {
                ...state,
                sortBy: 'year'
                };
        default:
        return state;
};
};