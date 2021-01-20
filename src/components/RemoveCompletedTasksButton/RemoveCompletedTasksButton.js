import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

const RemoveCompletedTasksButton = (props) => {
  const deleteDoneTasksHandler = (props) => {
    props.tasks.forEach((task) => {
      if (task.completed === true) {
        props.onDeleteTask(task.id);
      }
    });
  };

  return (
    <Button
      variant="danger"
      onClick={() => deleteDoneTasksHandler(props)}
      style={{ margin: "0 0 10px" }}
    >
      Odstranit hotové úkoly
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tsk.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTask: (id) => dispatch(actionCreators.deleteTask(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveCompletedTasksButton);
