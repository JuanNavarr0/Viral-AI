import React from 'react';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import './styles/index.css';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <MainPage />
        </div>
    );
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Sidebar.js
import React from 'react';
import './styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Viral AI</h2>
            <ul>
                <li>Home</li>
                <li>Generate Content</li>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;

// MainPage.js
import React, { useState } from 'react';
import './styles/MainPage.css';

function MainPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleGenerate = () => {
        fetch('http://localhost:8000/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input })
        })
        .then(response => response.json())
        .then(data => setOutput(data.text));
    };

    return (
        <div className="main-page">
            <h1>AI Content Generator</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a topic" />
            <button onClick={handleGenerate}>Generate</button>
            <p>{output}</p>
        </div>
    );
}

export default MainPage;