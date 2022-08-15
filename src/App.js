import {useState} from 'react';
import Mole_Container from './Components/moleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push ( 
        <Mole_Container 
          key= {i}
          setScore={setScore}
          score={score}
        />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
    
  )
}

export default App;
