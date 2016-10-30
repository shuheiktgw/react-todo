var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should call onAddTodo if valid todo entered', function () {

    var validTodo = 'valid todo';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = validTodo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(validTodo);
  });

  it('should not call onAddTodo if invalid todo entered', function () {

    var invalidTodo = '';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = invalidTodo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});