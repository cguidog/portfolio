export const setToolFilter = (tool = []) => ({
    type: 'SET_TOOL_FILTER',
    tool
});
export const setToolFilterRemove = (tool = []) => ({
    type: 'SET_TOOL_FILTER_REMOVE',
    tool
});