// mi-react-app/src/App.jsx
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './components/cards';

function App() {
  return (
    <div className="grid-container">
      <Cards />
    </div>
  );
}

export default App;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


