var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;

    if(todo.length > 0){
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todo.focus();
    }
  },

  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;