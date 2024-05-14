import React, { useEffect, useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoMenuBar from './Components/TodoMenubar';
import TodoDisplay from './Components/TodoDisplay';


const App = () => {
  const [todoValue, setTodoValue] = useState([]);
  const [filteredTodo,setFilteredTodo] =useState(todoValue);
  const [filterStatus,setFilteredStatus] =useState("all");

  
  const addTodo = (title, description) => {
    let newData = {
      id: todoValue.length,
      title: title,
      description: description,
      completed: false
    }
    setTodoValue([...todoValue, newData])
  }

 
  const deleteButton =(deleteIndex)=>{
    setTodoValue(todoValue.filter((item,index)=>item.id != deleteIndex))
  }


  const statusUpdate =(status,id)=>{
    setTodoValue(todoValue.map((item,index)=>{
      if(id==item.id){
        if(item.completed){
        return ({...item , completed:false})
        }
        else{
          return ({...item , completed:true})
        }
       }
       return item;
    }))
  }
  
  const handleFilter =(todoFilter)=>{
    console.log(todoFilter+"filter status");
    setFilteredStatus(todoFilter)
  }


  useEffect(()=>{
    if(filterStatus === "all"){
      setFilteredTodo(todoValue)
    }
    else if(filterStatus ==="pending"){
      setFilteredTodo(todoValue.filter((item,index)=>item.completed === false))
    }
    else if(filterStatus === "completed"){
      setFilteredTodo(todoValue.filter((item,index)=>item.completed === true))
    }
  },[filterStatus,todoValue])


  const handleEdit= (id,newTitle,newDescription)=> {
        setTodoValue(todoValue.map((item,index)=>{
          return ({...item,
             title:(item.id===id)?newTitle:item.title,
             description:(item.id===id)?newDescription:item.description  
            })
          }
        ))
      }
      
      return (
    <div>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodo={addTodo} />
      <TodoMenuBar handleFilter={handleFilter} filterStatus={filterStatus} />
      <div class=" container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 mt-1 p-3 g-4">
          {filteredTodo.map((item, index) => {
            return (
              <TodoDisplay item={item} index={index} deleteButton={deleteButton} statusUpdate={statusUpdate} handleEdit={handleEdit} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;