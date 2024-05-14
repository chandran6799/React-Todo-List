import React, { useState } from 'react';


const TodoDisplay = ({ item, index, deleteButton, statusUpdate ,handleEdit}) => {
 
  const [edit, setEdit] = useState(true);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(item.description)
  return (
    <>
      {(edit) ? (
        <div class="col" key={index}>
          <div class="card bg-success bg-opacity-50">
            <div class="card-body">
              <h5 class="card-title">Name : {item.title}</h5>
              <h5 class="card-text">Description : {item.description}</h5>
              <h5 class="card-text">Status :
                <select class={(item.completed) ? "bg-success m-2 p-0" : "bg-danger m-2 p-0"} name="completion" id="task-completion" value={item.completed} onChange={(e) => { statusUpdate(e.target.value, item.id) }}>
                  <option value={true}>Completed</option>
                  <option value={false}>Pending</option>
                </select></h5>
              <div class="row">
                <button class="col m-3 btn btn-success" onClick={() => {setEdit(!edit)}}>Edit</button>
                <button class="col m-3 btn btn-danger " onClick={() => { deleteButton(item.id) }}>Delete</button>
              </div>
            </div>
          </div>
        </div>) : (
        <div class="col" key={index}>
          <div class="card bg-success bg-opacity-50">
            <div class="card-body">
              <label class="m-4">Name    :</label><input class="ml-4" type="text" placeholder={item.title} value={newTitle} onChange={e => setNewTitle(e.target.value)} /> <br />
              Description : <input type="text" placeholder={item.description} value={newDescription} onChange={e => setNewDescription(e.target.value)} />
              <h5 class="card-text">Status :
                <select class={(item.completed) ? "bg-success m-2 p-0" : "bg-danger m-2 p-0"} name="completion" id="task-completion" value={item.completed} onChange={(e) => { statusUpdate(e.target.value, item.id) }}>
                  <option value={true}>Completed</option>
                  <option value={false}>Pending</option>
                </select></h5>
              <div class="row">
                <button class="col m-3 btn btn-success" onClick={() => { handleEdit(item.id ,newTitle,newDescription); setEdit(!edit)}}>Save</button>
                <button class="col m-3 btn btn-danger " onClick={() => { deleteButton(item.id)}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoDisplay;