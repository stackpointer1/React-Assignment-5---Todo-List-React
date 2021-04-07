import React from "react";
import { useState } from "react";
import ToDoLists from "./ToDolist";
import EnterItem from "./inputItem";
import "./../styles/App.css";

function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemValue = (event) => {
    setItem(event.target.value);
  };

  const ChangeValue = () => {
    if (item.trim() !== "") {
      setItemArr([...itemArr, item]);
      setItem("");
    }
  };

  const deletitem = (id) => {
    // console.log("delete");
    setItemArr((preValu) => {
      return preValu.filter((arrEle, index) => {
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
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <EnterItem
          id="task"
          type="text"
          placeholder="Add a Item"
          value={item}
          onChange={itemValue}
        />
        <button id="btn" onClick={ChangeValue}>
          +
        </button>
        <ol>
          {itemArr.map((itemCur, index) => {
            return (
              <ToDoLists
                className="list"
                classNameDelete="delete"
                classNameEdit="edit"
                key={index}
                id={index}
                text={itemCur}
                onSelect={deletitem}
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