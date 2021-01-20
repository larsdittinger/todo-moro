import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Tasks from "../../components/Tasks/Tasks";
import AddTaskButton from "../../components/AddTaskButton/AddTaskButton";
import TasksCounter from "../../components/TasksCounter/TasksCounter";
import RemoveCompletedTasksButton from "../../components/RemoveCompletedTasksButton/RemoveCompletedTasksButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import SetTasksCompletedButton from "../../components/SetTasksCompletedButton/SetTasksCompletedButton";
import * as actionCreators from "../../store/actions/index";

const App = (props) => {
  useEffect(() => {
    props.onLoadTasksFromApi();
  }, []);

  return (
    <div className="App">
      <h1>Úkolníček</h1>

      {props.loaded === false ? (
        <p className="lead">Načítání ...</p>
      ) : (
        <React.Fragment>
          <AddTaskButton />
          <RemoveCompletedTasksButton />
          <SetTasksCompletedButton />
          <hr />
          <FilterButton filter={null}>Vše</FilterButton>
          <FilterButton filter={true}>
            Hotové <TasksCounter />
          </FilterButton>
          <FilterButton filter={false}>Nehotové</FilterButton>
          <Tasks />
        </React.Fragment>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadTasksFromApi: () => dispatch(actionCreators.loadTasksFromApi()),
  };
};

const mapStateToProps = (state) => {
  return {
    loaded: state.tsk.loaded,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
