import { useState } from "react";
import { useCounter } from "../../hooks"

export const CounterPage = () => {
  const {counter, onIncrement, onDecrement, onReset, onIncrementByAmount} = useCounter();

  const [valor, setValor] = useState('');
  const [result, setResult] = useState('');
  const handleChange = (event) => {
    // console.log(event);
    setValor(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(valor);
    setValor('');
  }

  return (

    <div>
      <h1 className="text-blue-600 text-7xl text-center font-bold uppercase">Project counter</h1>
      <h2 className="text-gray-900 text-5xl font-black mt-32 mx-auto text-center mb-10">{counter}</h2>
      <div className="bg-gray-200 ml-2 w-96 mb-3 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-center"> 
          <label htmlFor="valor" className="mb-60">Ingrese valor inicial</label>
          </div>
          <input
            id="valor"
            name="valor"
            type="text"
            placeholder="valor inicial"
            className="w-full bg-white p-2 mr-1"
            value={valor}
            onChange={handleChange}
            
          />
          <div className="text-center py-2">
            <input type="submit" value="guardar" className="bg-blue-500 rounded-md p-1 px-6 hover:bg-blue-700"/>
          </div>
        </form>
      </div>
      <div className="flex justify-around items-center">
        <button onClick={() => onIncrement()} className="w-52 bg-blue-500 p-3 rounded-xl hover:bg-blue-700 text-blue-50">Incrementar</button>
        <button onClick={() => onDecrement()} className="w-52 bg-blue-500 p-3 rounded-xl hover:bg-blue-700 text-blue-50">Decrementar</button>
        <button onClick={() => onReset()} className="w-52 bg-blue-500 p-3 rounded-xl hover:bg-blue-700 text-blue-50">Inicializar</button>
        <button onClick={() => onIncrementByAmount(parseInt(result))} className="w-52 bg-blue-500 p-3 rounded-xl hover:bg-blue-700 text-blue-50">cantidad</button>
      </div>
    </div>
  )
}
