import React, { useState } from "react";
import ToDoItem from "./ToDoItem"; 
import InputArea from "./InputArea";

function App() {
  const [ items, setItems]= useState([]);

  function addItem(inputValue) {
    setItems((prevItems)=>([...prevItems, inputValue]));
  }

  function DeleteItem(id){
    setItems((prevValue)=>{
      return prevValue.filter((item , index)=>{
        return index === !id
      })
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea newItem={addItem}/>
      <div>
        <ul>
          {items.map((toDoItem,index) => <ToDoItem key={index}
          id={index} onCheck={DeleteItem} text={toDoItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
//CHALLENGE: I have extracted the Input Area, including the <input> and
//<button> elements into a seperate Component called InputArea.
//Your job is to make the app work as it did before but this time with the
//InputArea as a seperate Component.

// DO NOT: Modify the ToDoItem.jsx
// DO NOT: Move the input/button elements back into the App.jsx

//Hint 1: You will need to think about how to manage the state of the input element
//in InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into
//the addItem() function in App.jsx.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
