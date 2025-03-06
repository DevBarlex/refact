import './App.css';
import EmployeeList from './components/EmployeesList'
import Calculator from './components/Calculator'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <h1>Lista de empleados</h1>
      <EmployeeList />
      <h1>Calculadora</h1>
      <Calculator />
      <Footer />
    </div>
  )
}

export default App;
