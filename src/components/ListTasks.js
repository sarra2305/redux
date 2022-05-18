import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { task_done } from "../Reduxx/Actions/ToDosActions";
import Task from "./Task";

const ListTasks = () => {
  const [unDone, setUnDone] = useState(false);
  const list = useSelector((state) => state.reducerTask.tasks);

  const dispatch = useDispatch();

  return (
    <>
      <button
        className="btn btn-danger"
        style={{ margin: "1%", display: "flex", justifyContent: "flex-start" }}
        onClick={() => {
          setUnDone(!unDone);
        }}
      >
        Show unDone
      </button>
      <div>
        {(unDone ? list.filter((el) => !el.isDone) : list).map((el, index) => (
          <ul
            key={index}
            className="list-group"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "5%",
            }}
          >
            {el.isDone === false ? (
              <li
                className="list-group-item"
                style={{ marginRight: "1%", width: "80%" }}
              >
                {el.description}
              </li>
            ) : (
              <li
                className="list-group-item list-group-item-success"
                style={{ marginRight: "1%", width: "80%" }}
              >
                {el.description}
              </li>
            )}

            <Task toEdit={el} />

            {el.isDone === false ? (
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  dispatch(task_done(el.id));
                }}
              >
                Done
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => {
                  dispatch(task_done(el.id));
                }}
              >
                unDone
              </button>
            )}
          </ul>
        ))}
      </div>
    </>
  );
};

export default ListTasks;