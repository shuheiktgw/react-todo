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
        todo: {
          id: '123',
          text: 'walk the dog',
          completed: false,
          createdAt: 99811
        }
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var defaultTodos = [{
        id: 1,
        text: 'first todo',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];

      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: 'UPDATE_TODO',
        id: defaultTodos[0].id,
        updates
      };

      const res = reducers.todosReducer(df(defaultTodos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(defaultTodos[0].text);
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

    it('should wipe todos on logout', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
      }];

      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(0);
    });
  });

  describe('authReducer', () => {
    it('should add uid', () => {
      const uid = '123';

      const action = {
        type: 'LOGIN',
        uid
      };

      const res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual({
        uid: action.uid
      });
    });
    it('should remove uid', () => {
      const authData = {
        uid: '123'
      };

      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  });
});