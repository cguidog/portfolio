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
export const setStyleFilter = (selected = []) => ({
    type: 'SET_STYLE_FILTER',
    selected
});
export const setStyleFilterRemove = (selected = []) => ({
    type: 'SET_STYLE_FILTER_REMOVE',
    selected
});
export const setToolFilterClean = (tool = []) => ({
    type: 'SET_TOOL_FILTER_CLEAN',
    tool
});
export const setStyleFilterClean = (selected = []) => ({
    type: 'SET_STYLE_FILTER_CLEAN',
    selected
});
