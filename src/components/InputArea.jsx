import React,{useState} from "react";

function InputArea(props) {
    const [inputValue, setInputValue]=useState("");

    function handleChange(event) {
        const value = event.target.value;
        setInputValue(value);
      }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputValue} />
      <button onClick={()=>{
        props.newItem(inputValue);
        setInputValue("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
