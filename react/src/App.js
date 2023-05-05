import './App.css';
import { Link } from 'react-router-dom'
import Header  from "./Components/Header.js"
import Body from "./Components/Body.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
