//  En resumen, se utiliza para acceder y leer datos del estado global de Redux en componentes de 
// React sin necesidad de pasar propiedades manualmente a través de la jerarquía de componentes.
import { useDispatch, useSelector } from 'react-redux'
import { selectCounter, setCounter } from '../redux/slices/counterSlice'
import './App.css'

function App() {
  const dispatch = useDispatch();

  let counter = useSelector(selectCounter);

  const handleClick = () => {
    dispatch(setCounter({ counter: counter++ }))
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Aumentar</button>
    </>
  )
}

export default App
