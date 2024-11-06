import React, { useState } from "react";

const TodoInput = ({addTodos,inputValue,setInputValue}) => {
 

  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }


  return (
    <section className="flex fex-row space-x-2">
      <input
        value={inputValue}
        type="text"
        name=""
        id=""
        placeholder="Enter todo"
        className="bg-slate-700 md:w-4/5 px-5 w-full"
        onChange={handleChange}
      />
      <button className="border-2 border-black p-2 px-10" onClick={()=>{
        addTodos(inputValue)
        setInputValue("")
      }}>Add</button>
    </section>
  );
};

export default TodoInput;
