import React, { useState } from 'react';

function TodoList() {
  // 使用useState Hook声明状态
  const [todos, setTodos] = useState([
    { id: 1, text: '学习React', completed: false },
    { id: 2, text: 'Eating', completed: false },
    { id: 3, text: '写代码', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // 添加新待办事项
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false }
      ]);
      setInputValue('');
    }
  };

  // 切换完成状态
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todolist</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="输入新任务"
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;