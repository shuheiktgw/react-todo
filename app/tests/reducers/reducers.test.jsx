var expect = require('expect');
var reducers = require('reducers');
var moment = require('moment');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), action);
      expect(res).toEqual(action.searchText)
    });
  });

  describe('showCompletedReducer', () => {
    it('should set showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var defaultTodos = [{
        id: 1,
        text: 'first todo',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: defaultTodos[0].id
      };

      var res = reducers.todosReducer(df(defaultTodos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});