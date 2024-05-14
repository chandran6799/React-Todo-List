import React from 'react';

const TodoMenuBar = ({ handleFilter,filterStatus}) => {
  return (
    <div className="container">
      <div class="d-flex justify-content-between px-3 py-4">
        <div><h4>My Todos</h4></div>
        <div class="d-flex">
          <h4>Status Filter: {"  "}</h4>
          <select name="statusFilter" value={filterStatus} class={(filterStatus === "completed")?"bg-success":"bg-danger"}
          onChange={e => handleFilter(e.target.value)} >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoMenuBar;