import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const add = () => setResult(num1 + num2)
  const subtract = () => setResult(num1 - num2)
  const multiply = () => setResult(num1 * num2)
  const divide = () => setResult(num2 !== 0 ? num1 / num2 : 'Error')

  return (
    <div className="calculator">
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(parseFloat(e.target.value) || 0)} 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(parseFloat(e.target.value) || 0)} 
      />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <p>Resultado: {result !== null ? result : '0'}</p>
    </div>
  );
}

export default Calculator
