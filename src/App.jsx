import React, { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const paseData=(newlist)=>{
    localStorage.setItem("todos",JSON.stringify({'todos':newlist}))
  }
  
  const addTodos = (newTodos)=>{
      const setNewTodos = [...todos, newTodos];
      paseData(setNewTodos);
      setTodos(setNewTodos);
  }

  const handleDelete = (index)=>{
    const setNewTodos = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index;
    })
    paseData(setNewTodos);
    setTodos(setNewTodos);
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }

    let localTodo = localStorage.getItem("todos");

    if (!localTodo){
      return;
    }
    localTodo = JSON.parse(localTodo).todos;
    setTodos(localTodo);
  },[])

  return (
    <main className="container space-y-2 mx-auto my-10 p-2 bg-yellow-400 min-h-[250px] w-full md:w-1/2">
      <TodoInput
        addTodos={addTodos}
        todos={todos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        setInputValue={setInputValue}
      />
    </main>
  );
}

export default App
