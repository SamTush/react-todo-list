import './todo.scss';

function Todo() {
  return (
    <div className="container-fluid main-div d-flex justify-content-center">
      <div className="row">
        <div className="col content-div">
          <h1 className="d-flex justify-content-center">todos</h1>
          <p className="d-flex justify-content-center">Best todo application in the world.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="todo" className="form-label">
                <input id="todo" type="password" className="form-control" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
