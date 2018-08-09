
// Get visible expenses

export default (projects, {tool}) => {
  return projects.filter((project) => {
    const toolMatch = tool.indexOf(project.tool) !== -1 || project.tool.includes(tool);
    return toolMatch
  });
};
