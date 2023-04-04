import './todo.scss';
import Todolist from './todo-list';
import toDoForm from './toDoForm';

function Todo() {
  return (
    <div className="container-fluid main-div d-flex justify-content-center">
      <div className="row">
        <div className="col content-div">
          <h1 className="d-flex justify-content-center">todos</h1>
          <p className="d-flex justify-content-center">Best todo application in the world.</p>
          <toDoForm />
          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default Todo;
