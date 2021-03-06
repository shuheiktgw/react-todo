import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList'
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  onLogout(e){
    e.preventDefault();
    const {dispatch} = this.props;

    dispatch(actions.startLogout());
  },

  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <TodoForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);