import uuid from 'uuid';

export const addProject = (
    {
        tool = '',
    } = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        tool,
    }
});