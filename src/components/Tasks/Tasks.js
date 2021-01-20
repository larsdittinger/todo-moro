import React from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";

const Tasks = (props) => {
  return props.tasks.map((task) => {
    if (props.filter === true) {
      if (task.completed === true) {
        return <Task key={task.id} {...task} />;
      }
    } else if (props.filter === false) {
      if (task.completed === false) {
        return <Task key={task.id} {...task} />;
      }
    } else {
      return <Task key={task.id} {...task} />;
    }
    
    return null;
  });
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tsk.tasks,
    filter: state.tsk.filter,
  };
};

export default connect(mapStateToProps)(Tasks);
