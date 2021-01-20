import * as actionTypes from "../actions/actionsTypes";

const initState = {
  tasks: [],
  filter: null,
  loaded: false,
};

const tasksReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_TASK) {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: action.data.id,
          text: action.data.text,
          completed: action.data.completed,
        },
      ],
    };
  }

  if (action.type === actionTypes.DELETE_TASK) {
    let afterDelTasks = [...state.tasks];

    afterDelTasks = afterDelTasks.filter((obj) => {
      return obj.id !== action.id;
    });

    return {
      ...state,
      tasks: afterDelTasks,
    };
  }

  if (action.type === actionTypes.FILTER_TASKS) {
    return {
      ...state,
      filter: action.filter,
    };
  }

  if (action.type === actionTypes.UPDATE_TASK_TEXT) {
    const tasks = [...state.tasks];
    const updatingTaskIndex = tasks.findIndex((x) => x.id === action.id);
    tasks[updatingTaskIndex].text = action.text;
    return { ...state, tasks: tasks };
  }

  if (action.type === actionTypes.UPDATE_TASK_COMPLETED) {
    const tasks = [...state.tasks];
    const updatingTaskIndex = tasks.findIndex((x) => x.id === action.id);
    tasks[updatingTaskIndex].completed = action.completed;
    return { ...state, tasks: tasks };
  }

  if (action.type === actionTypes.SET_TASKS) {
    return { ...state, tasks: [...action.tasks], loaded: true };
  }

  return state;
};

export default tasksReducer;
