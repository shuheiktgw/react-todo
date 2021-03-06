var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import * as actions from 'actions';

var {TodoForm} = require('TodoForm');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', function () {
    const validTodo = 'valid todo';
    const action = actions.startAddTodo(validTodo);
    const spy = expect.createSpy();
    const todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>)
    const $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = validTodo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', function () {

    var invalidTodo = '';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = invalidTodo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});