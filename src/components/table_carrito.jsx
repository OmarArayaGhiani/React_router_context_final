import "../css/table_carrito.css"

import {Button} from "react-bootstrap"

import {useContext} from "react"
import {Link} from "react-router-dom"
import MyContext from "../MyContext"

const TableCarrito = () => {
  const {carrito, price, pizzaAdd, pizzaRemove} = useContext(MyContext)

  if (price > 0)
    return (
      <div className="carrito">
        <h3>Detalles del pedido:</h3>
        <div className="items">
          {carrito.map((element, index) => {
            if (element.cantidad > 0)
              return (
                <div key={index}>
                  <div className="item">
                    <div className="d-flex align-items-center">
                      <img src={element.img} alt={element.name} />
                      <p>{element.name}</p>
                    </div>
                    <div className="price-section">
                      <p>
                        $<span>{element.price * element.cantidad}</span>
                      </p>
                      <p>
                        X<span>{element.cantidad}</span>
                      </p>
                      <Button
                        onClick={() => pizzaAdd(element)}
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
  else
    return (
      <div className="carrito-vacio">
        <h3>El carrito está vacío</h3>
        <p>
          ¡Haz click{" "}
          <Link to="/" className="link-carrito-vacio">
            aquí
          </Link>{" "}
          para comprar tus pizzas favoritas!
        </p>
      </div>
    )
}

export default TableCarrito
