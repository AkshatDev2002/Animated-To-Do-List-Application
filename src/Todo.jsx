import React, { useState } from 'react';  // Importing React and useState hook
import './Todo.css';  // Importing CSS file for styling

// Defining the Todo component
const Todo = () => {

  // Defining state variables using the useState hook

  // todos: Array of todo items, initially empty
  const [todos, setTodos] = useState([]);

  // inputValue: The value of the input field where new todos are added, initially empty
  const [inputValue, setInputValue] = useState('');

  // editMode: Boolean indicating whether the app is in edit mode, initially false
  const [editMode, setEdit] = useState(false);

  // editId: ID of the todo item being edited, initially null
  const [editId, setEditId] = useState(null);

  // editValue: The value of the input field when editing a todo, initially empty
  const [editValue, setEditValue] = useState('');

  // Function to add a new todo item
  const addTodo = () => { 
    if (inputValue.trim() !== '') {  // Ensure the input is not just whitespace
      const newTodo = { 
        id: new Date().getTime(),  // Generate a unique ID based on the current timestamp
        text: inputValue,  // Set the text of the todo item
      }
      setTodos([...todos, newTodo]);  // Add the new todo to the list of todos
      setInputValue('');  // Clear the input field
    }
  }

  // Function to delete a todo item based on its ID
  const deleteTodo = (id) => { 
    const updatedTodos = todos.filter((Todo) => Todo.id !== id);  // Filter out the todo with the given ID
    setTodos(updatedTodos);  // Update the state with the filtered list of todos
  }

  // Function to initiate editing of a todo item
  const editTodo = (id, text) => { 
    setEdit(true);  // Set edit mode to true
    setEditId(id);  // Set the ID of the todo being edited
    setEditValue(text);  // Set the text value of the todo being edited in the edit input field
  }

  // Function to update a todo item after editing
  const updateTodo = () => {
    const updatedTodos = todos.map((Todo) => {
      if (Todo.id === editId) {  // Check if the current todo is the one being edited
        return { ...Todo, text: editValue };  // Update the text of the todo
      }
      return Todo;  // Return the unchanged todo if it's not the one being edited
    });

    setTodos(updatedTodos);  // Update the state with the edited todo list
    setEdit(false);  // Exit edit mode
    setEditId(null);  // Clear the editId
    setEditValue('');  // Clear the edit input field
  }

  // Function to handle key press event for the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (editMode) {
        updateTodo(); // Update the todo if in edit mode
      } else {
        addTodo(); // Add a new todo if not in edit mode
      }
    }
  }

  // Rendering the JSX for the Todo component
  return (
    <div className='container'>  {/* Wrapper div for the todo app, styled with CSS */}
      <h1>To 👉🏽 Do </h1>  {/* Title of the app */}
      
      {/* Input field to enter a new todo */}
      <input 
        type='text' 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyPress={handleKeyPress}  // Add key press event listener
      />

      {editMode ? (  // Conditionally render either the "Update" button or the "Add" button based on editMode
        <div>
          <input 
            type='text' 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
            onKeyPress={handleKeyPress}  // Add key press event listener
          />
          {/* Button to update the todo item */}
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        // Button to add a new todo item
        <button onClick={addTodo}>ADD</button>
      )}

      {/* List of todos */}
      <ul>
        {todos.map((Todo) => (
          <li key={Todo.id}>  {/* Each todo is rendered as a list item with a unique key */}
            {Todo.text}  {/* Display the text of the todo */}
            <div>
            {/* Button to delete the todo item */}
            <button onClick={() => deleteTodo(Todo.id)}>Delete</button>
            {/* Button to edit the todo item */}
            <button onClick={() => editTodo(Todo.id, Todo.text)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Background animated icons */}
      <div class="icon icon1"></div>
      <div class="icon icon2"></div>
      <div class="icon icon3"></div>
      <div class="icon icon4"></div>
      

    </div>
  );

}

export default Todo;  // Exporting the Todo component to be used in other parts of the app
