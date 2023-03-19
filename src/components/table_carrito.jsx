import "../css/table_carrito.css"

import {Button} from "react-bootstrap"

import {useContext} from "react"
import MyContext from "../MyContext"

const TableCarrito = () => {
  const {addedPizzas} = useContext(MyContext)

  return (
    <div className="carrito">
      <h3>Detalles del pedido:</h3>
      <div className="items">
        {addedPizzas.map((element) => {
          return (
            <>
              <div key={element.id} className="item d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={element.img} alt={element.name} />
                  <p>{element.name}</p>
                </div>
                <p>
                  $<span>{element.price}</span>
                </p>
              </div>
            </>
          )
        })}
        <div className="buy">
          <p className="total-price">$<span></span></p>
          <Button variant="success" className="buy-btn">
            Pagar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TableCarrito
