const filtersReducersDefaultState = {
    brand: '',
    style: '',
    transmission: '',
    sortBy: 'price'
};

export default (state = filtersReducersDefaultState, action) => {
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