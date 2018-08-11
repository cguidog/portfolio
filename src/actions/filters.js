export const setToolFilter = (tool = []) => ({
    type: 'SET_TOOL_FILTER',
    tool
});
export const setToolFilterRemove = (tool = []) => ({
    type: 'SET_TOOL_FILTER_REMOVE',
    tool
});
export const setShowFilter = (show = '') => ({
    type: 'SET_SHOW_FILTER',
    show
});
export const setToolFilterClean = (tool = []) => ({
    type: 'SET_TOOL_FILTER_CLEAN',
    tool
});
