import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './App.css';

function Example({ show, handleShow, handleClose, filter }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleTaskChange = (e) => setTask(e.target.value);

  const addTask = () => {
    if (task.trim()) {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
      handleClose();
    }
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
    handleShow();
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const markPending = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  const markCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = filter === 'completed' ? tasks.filter(task => task.completed) :
                       filter === 'pending' ? tasks.filter(task => !task.completed) :
                       tasks;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTask">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleTaskChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="todo-list mt-4">
        <h3 className="List">To-Do List</h3>
        <ListGroup>
          {filteredTasks.map((task, index) => (
            <ListGroup.Item key={index} style={{ color: task.completed ? 'green' : 'black' }}>
              {task.text}
              <Button variant="outline-primary" onClick={() => editTask(index)}>
                <FaEdit />
              </Button>
              <Button variant="outline-danger" onClick={() => removeTask(index)}>
                <FaTrashAlt />
              </Button>
              {task.completed ? (
                <Button variant="outline-primary" onClick={() => markPending(index)}>
                  Mark Pending
                </Button>
              ) : (
                <Button class="Mark" onClick={() => markCompleted(index)}>
                  Mark Completed
                </Button>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default Example;
