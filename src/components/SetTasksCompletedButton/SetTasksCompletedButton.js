import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

const SetTasksCompletedButton = (props) => {
  const setCompletedTasksHandler = (props) => {
    props.tasks.forEach((task) => {
      props.onUpdateTaskCompleted(task.id);
    });
  };

  return (
    <Button
      variant="secondary"
      onClick={() => setCompletedTasksHandler(props)}
      style={{ margin: "0 5px 10px" }}
    >
      Označit všechny úkoly jako hotové
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
    onUpdateTaskCompleted: (id) =>
      dispatch(actionCreators.updateTaskCompleted(id, true)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTasksCompletedButton);
