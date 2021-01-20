import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsTypes";

const FilterButton = (props) => {

  const buttonActive = (props) => {
    if (props.filter === props.stateFilter) {
      return "warning";
    } else {
      return "secondary";
    }
  };

  return (
    <Button
      variant={buttonActive(props)}
      onClick={() => props.onFilterTasks(props.filter)}
      style={{ margin: "0 5px 40px" }}
    >
      {props.children}
    </Button>
  );
};
const mapStateToProps = (state) => {
  return {
    stateFilter: state.tsk.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTasks: (filter) =>
      dispatch({ type: actionTypes.FILTER_TASKS, filter: filter }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
