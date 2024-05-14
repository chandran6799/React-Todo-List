import React, { useState } from 'react';

const TodoInput = ({ todoValue, setTodoValue, addTodo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const addButtonCall = () => {
    addTodo(title, description)
    setTitle('');
    setDescription('');
  }

  return (
    <div class="container">
      <h1 class="text-center m-3" style={{color: "#198754"}}>My Todo</h1>
      <div className="row  justify-content-around text">
        <input class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3" type="text" placeholder="Todo Name" value={title} onChange={e => setTitle(e.target.value)} />
        <input class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3" type="text" placeholder="Todo Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button class="col-lg-1 col-sm-3 col-3 p-2 m-1 btn btn-success border-success border-3" onClick={() => { addButtonCall(title, description) }}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoInput;