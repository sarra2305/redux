import {
    ADD_TODO,
    TASK_DONE,
    EDIT_TASK,
  } from "../Constants/ActionsTypes";
  
  export const add_todo = (payload) => {
    return {
      type: ADD_TODO,
      payload,
    };
  };
  
  export const task_done = (id) => {
    return {
      type: TASK_DONE,
      id,
    };
  };
  
  export const edit_task = (payload) => {
    return {
      type: EDIT_TASK,
      payload,
    };
  };