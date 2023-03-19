import MyNavbar from "./components/navbar"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import MyContext from "./MyContext"

import Home from "./views/home"
import Pizza from "./views/pizza"

function App() {
  const [pizzas, setPizzas] = useState([])
  const [addedPizza, setAddedPizza] = useState([])
  const sharedStates = {pizzas, addedPizza, setAddedPizza}

  useEffect(() => {
    getDataPizzas()
  }, [])

  const getDataPizzas = async() =>{
    const resDataPizzas = await fetch("/pizzas.json")
    const dataPizzas = await resDataPizzas.json()
    setPizzas(dataPizzas)
  }

  return (
    <div>
      <MyContext.Provider value={sharedStates}>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:selectedPizza" element={<Pizza />} />
            <Route path="/carrito" />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
