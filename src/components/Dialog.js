/** @format */

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Dialog({ show, setShow, setIsCreated }) {
  const [todo, setTodo] = React.useState({
    todoName: "",
    description: "",
    userId: "",
  });
  const [users, setUsers] = React.useState([]);
  const handleClose = () => {
    setTodo(() => ({
      todoName: "",
      description: "",
      userId: "",
    }));
    setShow(false);
  };
  const handleCreateTodo = async () => {
    if (todo && todo.todoName && todo.description && todo.userId) {
      try {
        const url = "http://localhost:4000/api/todos/addTodo";
        const params = { ...todo };
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });
        const res = await response.json();
        if (res) {
          setIsCreated((prev) => !prev);
          setShow(false);
          setTodo(() => ({
            todoName: "",
            description: "",
            userId: "",
          }));
        }
      } catch (e) {
        console.log(e);
      } finally {
        //
      }
    } else {
      console.log("error");
    }
  };
  const fetchUsersData = async () => {
    try {
      const url = "http://localhost:4000/api/users/allUsers";
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (res && res.length > 0) {
        setUsers(() => [...res]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      //
    }
  };
  React.useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Create new todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Todo Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Todo Name"
                value={todo.todoName}
                onInput={(e) =>
                  setTodo((prev) => ({ ...prev, todoName: e.target.value }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                value={todo.description}
                onInput={(e) =>
                  setTodo((prev) => ({ ...prev, description: e.target.value }))
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Assign employee</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={todo.userId}
                onChange={(e) =>
                  setTodo((prev) => ({ ...prev, userId: e.target.value }))
                }>
                <option>Open this select menu</option>
                {users &&
                  users.map((ele) => (
                    <option key={ele.id} value={ele.id}>
                      {ele.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateTodo}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
