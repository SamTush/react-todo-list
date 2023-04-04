import { useState } from 'react';
import './todo-list.scss';

const Todolist = () => {
  const [todos, setToDo] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
    {
      id: 4,
      title: 'server is live',
      completed: false,
    },
  ]);

  return (
    <div>
      <ul className="mt-1">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input className="input" type="checkbox" />
            <p className="item">
              {todo.title}
            </p>
            <i className="delete fa-solid fa-trash" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
