import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

import "./Task.css";
import { Card, Button } from "react-bootstrap";

let updateTaskTimeout;

const Task = (props) => {
  // osetrit aby nedochazelo k bugu, kdyz rychle zacnu psat v druhem ukolu tento se neulozi
  const changeTaskHandler = (id, text) => {
    clearTimeout(updateTaskTimeout);
    updateTaskTimeout = setTimeout(() => {
      props.onUpdateTaskText(id, text);
    }, 600);
  };

  return (
    <Card>
      <input
        type="checkbox"
        className="form-check-input checkbox"
        checked={props.completed}
        onChange={(event) =>
          props.onUpdateTaskCompleted(props.id, event.target.checked)
        }
      />
      <Button
        className="btn-secondary btn-sm btn-del"
        onClick={() => props.onDeleteTask(props.id)}
      >
        X
      </Button>

      <textarea
        onChange={(event) => changeTaskHandler(props.id, event.target.value)}
        defaultValue={props.text}
      ></textarea>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateTaskText: (id, text) =>
      dispatch(actionCreators.updateTaskText(id, text)),
    onUpdateTaskCompleted: (id, completed) =>
      dispatch(actionCreators.updateTaskCompleted(id, completed)),
    onDeleteTask: (id) => dispatch(actionCreators.deleteTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
