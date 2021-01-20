import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

const AddTaskButton = (props) => {
  return (
    <Button onClick={props.onAddTask} style={{ margin: "0 5px 10px" }}>
      Přidat úkol
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: () => dispatch(actionCreators.addTask()),
  };
};

export default connect(null, mapDispatchToProps)(AddTaskButton);
