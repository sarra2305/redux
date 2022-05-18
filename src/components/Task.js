import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit_task } from "../Reduxx/Actions/ToDosActions";

const Task = ({ toEdit }) => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState(toEdit.description);
  const dispatch = useDispatch();

  console.log(task.description);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        style={{ marginRight: "1%" }}
        className="btn btn-warning"
        onClick={handleShow}
      >
        Edit
      </button>

      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To Do</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                edit_task({ id: toEdit.id, description: task })
              );
              handleShow();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Task;