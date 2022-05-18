import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../JS/Actions/ToDosActions";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    // e.preventDefault();
    if (task !== "") {
      dispatch(add_todo({ id: Date.now(), description: task, isDone: false }));
      setTask("");
    } else {
      alert("you should write your To Do description");
    }
  };

  return (
    // <div class="card">
    //   <h5 class="card-header">Add To Do</h5>
    //   <div class="card-body">
    //     <input
    //       class="card-text"
    //       placeholder="Your To Do"
    //       style={{ width: "90%", height: 50, margin: "2%", paddingLeft: "1%" }}
    // onChange={(e) => {
    //   setTask(e.target.value);
    // }}
    //       value={task} //setTask(""); + so the input field get empty after add button pressed
    //     />
    //     <button class="btn btn-primary" onClick={() => add()}>
    //       Add To Do
    //     </button>
    //     {/* <form onSubmit = {()=>add()}/> + e.preventDefault(); in the aadd function to submit when you press your keyboard's enter button*/}
    //   </div>
    // </div>
    <div style={{ margin: "3%" }}>
      <input
        type="text"
        className="form-control"
        style={{ marginBottom: "3%" }}
        placeholder="To Do description"
        // aria-label="Recipient's username with two button addons"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => add()}
      >
        Add To Do
      </button>
    </div>
  );
};

export default AddTask;