const filtersReducerDefaultState = {
    brand: '',
    transmission: '',
    transmissionList: ['any'],
    sortBy: 'price',
    brandList: ['ALL'],
    styleList: [],
    validator: []
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_BRAND_FILTER':
            return {
                ...state,
                brand: action.brand
                };
        case 'SET_STYLE_VALIDATOR_FILTER':
            return {
                ...state,
                validator: [...state.validator, action.validator]
                };
        case 'SET_STYLE_VALIDATOR_FILTER_REMOVE':
            return {
                ...state,
                validator: [...state.validator.slice(0, state.validator.indexOf(action.validator)), ...state.validator.slice(state.validator.indexOf(action.validator) + 1)]
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