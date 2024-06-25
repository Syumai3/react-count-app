import React, {useState} from 'react'
import './App.css';
import Button from './Button'

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>カウント：{count}</p>
      <Button btm_txt="プラス" btm_click={() => setCount(prevCount => prevCount + 1)}/>
      <Button btm_txt="マイナス" btm_click={() => setCount(prevCount => prevCount - 1)}/>
    </div>
  );
}



export default App;
