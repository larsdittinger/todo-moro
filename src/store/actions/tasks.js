import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const deleteTask = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:8080/todos/" + id)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.statusText);
        } else {
          dispatch({
            type: actionTypes.DELETE_TASK,
            id: id,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addTask = (id) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/todos", { text: "Nová poznámka" })
      .then((response) => {
        if (response.status === 400) {
          console.log(response.statusText);
        } else {
          dispatch({
            type: actionTypes.ADD_TASK,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadTasksFromApi = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/todos")
      .then((response) => {
        if (response.status === 400) {
          console.log(response.statusText);
        } else {
          dispatch({
            type: actionTypes.SET_TASKS,
            tasks: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateTaskCompleted = (id, completed) => {
  let completedStr;
  if (completed === true) {
    completedStr = "complete";
  } else {
    completedStr = "incomplete";
  }

  return (dispatch) => {
    axios
      .post("http://localhost:8080/todos/" + id + "/" + completedStr)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.statusText);
        } else {
          dispatch({
            type: actionTypes.UPDATE_TASK_COMPLETED,
            id: id,
            completed: completed,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateTaskText = (id, text) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/todos/" + id, { text: text })
      .then((response) => {
        if (response.status === 400) {
          console.log(response.statusText);
        } else {
          dispatch({
            type: actionTypes.UPDATE_TASK_TEXT,
            id: id,
            text: text,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
