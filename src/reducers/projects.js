const projectsReducerDefaultState = [];

export default (state = projectsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
        return [...state, action.project];
        default:
            return state;
    };
};