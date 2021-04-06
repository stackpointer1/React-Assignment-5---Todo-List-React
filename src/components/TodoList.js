import React from "react";
import { useState } from "react";

const ToDoLists = (props) => {
  const [editInput, setEditInput] = useState("");
  const [addInEdit, setAddInEdit] = useState({
    show: false
  });

  const EditItem = () => {
    console.log("edit");
    setAddInEdit({ show: true });
  };
  const funEditUpdate = (event) => {
    setEditInput(event.target.value.trim());
  };
  return (
    <>
      <div className="todo_style">
        <li className={props.className}>{props.text}</li>
        <button
          className={props.classNameDelete}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </button>
        {addInEdit.show ? (
          <>
            <br />
            <input
              type="text"
              className="editTask"
              placeholder="Edit"
              onChange={funEditUpdate}
            />
            <button
              className="saveTask"
              onClick={() => {
                props.onEdit(props.id, editInput);
                setAddInEdit({ show: false });
              }}
            >
              +
            </button>
          </>
        ) : (
          <button className={props.classNameEdit} onClick={EditItem}>
            edit
          </button>
        )}
      </div>
    </>
  );
};

export default ToDoLists;
