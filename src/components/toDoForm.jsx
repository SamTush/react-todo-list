const toDoForm = () => {
  const x = 'hello';

  return (
    <>
      <form className="mt-4" id="submit">
        <div className="search-bar">
          <label htmlFor="todo" className="form-label">
            <input id="todo" type="text" className="form-control" />
          </label>
          <i className="fa-solid fa-lg fa-circle-plus ps-3 pe-3 plus" />
        </div>
      </form>
    </>
  );
};

export default toDoForm;
