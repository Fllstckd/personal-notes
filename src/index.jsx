import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// styling
import './styles/style.css';
 
// const element = <h1>Hello, worlds!</h1>;
 
const root = createRoot(document.getElementById('root'));

root.render(<App/>);