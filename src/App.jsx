import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', description: 'Description 1', status: 'UNDONE' },
    { id: 2, title: 'Note 2', description: 'Description 2', status: 'IN PROGRESS' },
    { id: 3, title: 'Note 3', description: 'Description 3', status: 'COMPLETE' },
  ]);

  const [counter, setCounter] = useState(4); // for unique note IDs

  const handleStatusChange = (id, newStatus) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, status: newStatus } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleAddNote = () => {
    const newNote = {
      id: counter,
      title: `Note ${counter}`,
      description: `Description ${counter}`,
      status: 'UNDONE'
    };
    setNotes([newNote, ...notes]);
    setCounter(counter + 1);
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="profile">👤</div>
        <div>Hello, User</div>
        <button className="add" onClick={handleAddNote}>+</button>
      </div>

      <div className="notes">
        {notes.map(note => (
          <div key={note.id} className="note">
            <p><strong>{note.title}</strong></p>
            <p>{note.description}</p>
            
            <label>
              Status:
              <select 
                value={note.status} 
                onChange={(e) => handleStatusChange(note.id, e.target.value)}
              >
                <option>UNDONE</option>
                <option>IN PROGRESS</option>
                <option>COMPLETE</option>
              </select>
            </label>

            <button 
              className="delete"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
