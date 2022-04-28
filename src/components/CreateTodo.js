/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Dialog from "./Dialog";
export default function CreateTodo({ setIsCreated }) {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="d-flex flex-row-reverse">
        <Button variant="primary" className="mt-4" onClick={handleShow}>
          Create Todo
        </Button>
        <Dialog show={show} setShow={setShow} setIsCreated={setIsCreated} />
      </div>
    </div>
  );
}
