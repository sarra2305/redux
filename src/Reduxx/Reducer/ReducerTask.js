import { ADD_TODO, TASK_DONE, EDIT_TASK } from "../Constants/ActionsTypes";

const initialState = {
  tasks: [],
};

const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.id ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, description: action.payload.description }
            : el
        ),
      };

    default:
      return state;
  }
};

export default reducerTask;