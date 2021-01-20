import React from "react";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";

const TasksCounter = (props) => {
  const doneTasksNumber = (tasks) => {
    let i = 0;

    props.tasks.forEach((task) => {
      if (task.completed === true) i++;
    });

    return i;
  };

  return <Badge variant="secondary">{doneTasksNumber(props.tasks)}</Badge>;
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tsk.tasks,
  };
};

export default connect(mapStateToProps)(TasksCounter);
