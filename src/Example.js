import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './App.css';

function Example({ show, handleShow, handleClose }) {
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTextareaChange = (e) => setTextarea(e.target.value);
  const handleTaskChange = (e) => setTask(e.target.value);

  const handleSaveChanges = () => {
    handleClose();
  };

  const addTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    handleShow();
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={textarea}
                onChange={handleTextareaChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTask">
              <Form.Label>{editIndex !== null ? 'Edit Task' : 'Add a Task'}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleTaskChange}
              />
              <Button variant="primary" onClick={addTask} className="mt-2">
                {editIndex !== null ? 'Update Task' : 'Add Task'}
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {email && textarea && (
        <div className="mt-4">
          <h3>Entered Data</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Textarea:</strong> {textarea}</p>
        </div>
      )}

      <div className="todo-list mt-4">
        <h3 className='List'>To-Do List</h3>
        <ListGroup>
          {tasks.map((task, index) => (
            <ListGroup.Item key={index}>
              {task}
              <Button
                variant="outline-primary"
                onClick={() => editTask(index)}
                className="float-end ms-2"
              >
                <FaEdit />
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => removeTask(index)}
                className="float-end"
              >
                <FaTrashAlt />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default Example;


