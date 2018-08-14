const filtersReducerDefaultState = {
    tool: [],
    show: true,
    toolList: [],
    selected: []
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TOOL_FILTER':
            return {
                ...state,
                tool: [...state.tool, action.tool]
                };
        case 'SET_TOOL_FILTER_REMOVE':
            return {
                ...state,
                tool: [...state.tool.slice(0, state.tool.indexOf(action.tool)), ...state.tool.slice(state.tool.indexOf(action.tool) + 1)]
                };
        case 'SET_TOOL_FILTER_CLEAN':
            return {
                ...state,
                tool: []
                };
        case 'SET_SHOW_FILTER':
            return {
                ...state,
                show: action.show
                };
        case 'SET_STYLE_FILTER':
            return {
                ...state,
                selected: [...state.selected, action.selected]
                };
        case 'SET_STYLE_FILTER_REMOVE':
            return {
                ...state,
                selected: [...state.selected.slice(0, state.selected.indexOf(action.selected)), ...state.selected.slice(state.selected.indexOf(action.selected) + 1)]
                };
        case 'SET_STYLE_FILTER_CLEAN':
            return {
                ...state,
                selected: []
                };
        default:
        return state;
};
};