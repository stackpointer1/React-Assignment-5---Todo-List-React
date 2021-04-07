import React from "react";
import "./../styles/App.css";

const EnterItem = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default EnterItem;