import "../css/table_carrito.css"

import {Button} from "react-bootstrap"

import {useContext, useState, useEffect} from "react"
import MyContext from "../MyContext"

const TableCarrito = () => {
  const {addedPizzas, setAddedPizzas} = useContext(MyContext)
  const [price, setPrice] = useState()

  useEffect(() => {
    let total = 0
    addedPizzas.forEach(function (pizzaPrice) {
      total += pizzaPrice.price
      setPrice(total)
    })
  }, [addedPizzas])

  const pizzaPlus = (e) => {
    let cantidadTotal = e.cantidad + 1
    e.cantidad = cantidadTotal
    setAddedPizzas([...addedPizzas])
  }

  const pizzaRemove = (e, index) => {
    let cantidadTotal = e.cantidad - 1
    if (cantidadTotal < 0) cantidadTotal = 0
    e.cantidad = cantidadTotal
    if ((cantidadTotal == 0)) addedPizzas.splice(index, 1)
    setAddedPizzas([...addedPizzas])
  }

  return (
    <div className="carrito">
      <h3>Detalles del pedido:</h3>
      <div className="items">
        {addedPizzas.map((element, index) => {
          return (
            <div key={index}>
              <div className="item d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={element.img} alt={element.name} />
                  <p>{element.name}</p>
                </div>
                <div className="price-section">
                  <p>
                    $<span>{element.price}</span>
                  </p>
                  <p>
                    X<span>2</span>
                  </p>
                  <Button
                    onClick={() => pizzaPlus(element)}
                    variant="success"
                    className="add-remove"
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => pizzaRemove(element, index)}
                    variant="danger"
                    className="add-remove"
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
        <div className="buy">
          <p className="total-price">
            Total: $<span>{price}</span>
          </p>
          <Button variant="success" className="buy-btn">
            Pagar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TableCarrito
