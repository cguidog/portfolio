const carsReducerDefaultState = [];

export default (state = carsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CAR':
        return [...state, action.car];
        default:
            return state;
    };
};