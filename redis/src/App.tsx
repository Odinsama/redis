import React, {useState} from 'react';
import logo from './logo.svg';
import draupne_logo from './draupne_logo.png';
import './App.css';
import {TodoList} from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState<string[]>([])
    return (
      <React.Suspense fallback={Spinner}>
        <div style={{display: "block", position: "absolute", height: "100%", width: "100%"}}>
            <div style={{display: "flex", height: "10%", width: "100%"}}><img src={draupne_logo} alt={"wat"}/></div>
            <div style={{justifyContent: "center", background: "#ebedf0", display: "flex", height: "80%", width: "100%"}}><TodoList todos={todos} setTodos={setTodos}/></div>
            <div style={{
    background: "rgba(18,217,147,0.9)",
    display: "flex",
    height: "10%",
    width: "100%",
}}/>
        </div>
      </React.Suspense>
  );
}
const Spinner = () => {
  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
}
export default App;
