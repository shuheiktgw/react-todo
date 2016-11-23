var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import * as actions from 'actions';
import {Todo} from 'Todo';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const createMockStore = configureMockStore([thunk]);


describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'write todo test',
      completed: true
    };

    const action = actions.startToggleTodo(todoData.id, !todoData.completed)

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});