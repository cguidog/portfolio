import uuid from 'uuid';

export const addProject = (
    {
        name = '',
        thumbnail = '',
        git = '',
        description = '',
        link = '',
        tool = '',
    } = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        name,
        thumbnail,
        git,
        description,
        link,
        tool
    }
});