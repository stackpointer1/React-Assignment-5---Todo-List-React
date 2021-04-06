import React from "react";
import { useState } from "react";

import TodoList from "./TodoList";
function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemValue = (event) => {
    setItem(event.target.value);
  };

  const changeValue = () => {
    if (item.trim() !== "") {
      setItemArr([...itemArr, item]);
      setItem("");
    }
  };
  const deleteitem = (id) => {
    setItemArr((preValue) => {
      return preValue.filter((itemArr, index) => {
        return index !== id;
      });
    });
  };
  const updateItem = (id, editValue) => {
    // console.log(id);
    // console.log(editValue);
    if (editValue !== "") {
      setItemArr((preValu) => {
        preValu[id] = editValue;
        return [...preValu];
      });
    }
  };

  return (
    <div id="main">
      <div className="todoList">
        <br />
        <input
          type="text"
          placeholder="enter the text"
          id="task"
          value={item}
          onChange={itemValue}
        />
        <button id="btn" onClick={changeValue}>
          {" "}
          +{" "}
        </button>
        <ol>
          {itemArr.map((itemCur, index) => {
            return (
              <TodoList
                className="list"
                classNameDelete="delete"
                classNameEdit="Edit"
                key={index}
                id={index}
                text={itemCur}
                onSelect={deleteitem}
                onEdit={updateItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
export default App;
