const initState = {
    projects: [
        {id: '1', title: 'First Project', content: 'yahoo yahoo yehey yehey'},
        {id: '2', title: '2nd Project', content: 'yahoo yahoo yehey yehey'},
        {id: '3', title: '3rd Project', content: 'yahoo yahoo yehey yehey'}
    ]
}

const ProjectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default ProjectReducer;