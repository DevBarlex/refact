import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const calculate = (operation) => {
    switch (operation) {
      case 'suma':
        setResult(num1 + num2)
        break
      case 'resta':
        setResult(num1 - num2)
        break
      case 'multiplicación':
        setResult(num1 * num2)
        break
      case 'división':
        setResult(num2 !== 0 ? num1 / num2 : 'Error')
        break
      default:
        setResult(null)
    }
  }

  return (
    <div className="calculator">
      <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value) || 0)} />
      <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value) || 0)} />
      <button onClick={() => calculate('suma')}>+</button>
      <button onClick={() => calculate('resta')}>-</button>
      <button onClick={() => calculate('multiplicación')}>*</button>
      <button onClick={() => calculate('división')}>/</button>
      <p>Resultado: {result !== null ? result : '0'}</p>
    </div>
  )
}

export default Calculator
