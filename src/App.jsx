import { useState } from 'react'
import image from './assets/cocretainc.jpg'
//import header from './header'
import './App.css'
import employees from '../public/models/empleados'

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResultado("Introduce números válidos");
      return;
    }
    switch (operacion) {
      case "suma":
        setResultado(a + b);
        break;
      case "resta":
        setResultado(a - b);
        break;
      case "multiplicacion":
        setResultado(a * b);
        break;
      case "division":
        setResultado(b !== 0 ? a / b : "No se puede dividir por 0");
        break;
      default:
        setResultado(null);
    }
  };

  return (
    <div className="calculadora">
      <h2>Calculadora</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
      <div>
        <button onClick={() => calcular("suma")}>+</button>
        <button onClick={() => calcular("resta")}>-</button>
        <button onClick={() => calcular("multiplicacion")}>*</button>
        <button onClick={() => calcular("division")}>/</button>
      </div>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};


function App() {
 
  const storage = [];
  for (let i = 0; i < employees.length; i++) {
    storage.push(
      <div key={i}>
        <p>Nombre: {employees[i].name}</p>
        <p>Apellidos: {employees[i].lastName}</p>
        <p>Hobbies: {employees[i].hobbies.join(', ')}</p>
        <p>Edad: {employees[i].age}</p>
      </div>
    );
  }
   
  return (
    <>
    <header>
      <img src={image} alt="cocreta" className="logo"/>
      <a href=""></a>
    </header>

    <main>
      <h1>Empleados:</h1>
      <div>
        <h1>{storage}</h1>      
      </div>
      <Calculadora/>
      <form>
        <input></input>
      </form>
    </main>

    <footer className="footer">
      <ul>
        <li>Todos los derechos reservados</li>
        <li>Cocretas INC ©</li>
        <li>Dirección: Simancas (Madrid)</li>
        <li>Teléfono: 917335673 - 635444912</li>
        <li>Email: croquetasINC@hotmail.com</li>
      </ul>
    </footer>
    </>
  )
}

export default App
