import MyNavbar from "./components/navbar"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import MyContext from "./MyContext"

import Home from "./views/home"
import Pizza from "./views/pizza"
import Carrito from "./views/carrito"
import NoFound from "./views/nofound"

function App() {
  const [pizzas, setPizzas] = useState([])
  const [price, setPrice] = useState(0)
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    getDataPizzas()
  }, [])

  const getDataPizzas = async () => {
    const resDataPizzas = await fetch("/pizzas.json")
    const dataPizzas = await resDataPizzas.json()
    setPizzas(dataPizzas)
  }

  useEffect(() => {
    let total = 0
    carrito.forEach(function (pizza) {
      total += pizza.price * pizza.cantidad
      setPrice(total)
    })
  }, [carrito])

  const pizzaAdd = (element) => {
    const pizzaCarrito = {
      id: element.id,
      img: element.img,
      name: element.name,
      price: element.price,
      cantidad: 1,
    }
    const addedPizza = carrito.find((e) => e.id === element.id)
    if (addedPizza) {
      addedPizza.cantidad += 1
      setCarrito([...carrito])
    } else setCarrito([...carrito, pizzaCarrito])
  }

  const pizzaRemove = (element, index) => {
    const removedPizza = carrito.find((e) => e.id === element.id)
    if (removedPizza.cantidad > 0) {
      removedPizza.cantidad -= 1
      setCarrito([...carrito])
    } else {
      carrito.splice(index, 1)
      setCarrito([...carrito])
    }
  }

  const sharedStates = {
    pizzas,
    setPizzas,
    price,
    setPrice,
    carrito,
    setCarrito,
    pizzaAdd,
    pizzaRemove
  }

  return (
    <div>
      <MyContext.Provider value={sharedStates}>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:selectedPizza" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
