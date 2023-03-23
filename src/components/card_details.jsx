import "../css/card_details.css"

import {BsCart4} from "react-icons/bs"
import {CiPizza} from "react-icons/ci"

import Button from "react-bootstrap/Button"

import {useParams} from "react-router-dom"
import {useContext} from "react"
import MyContext from "../MyContext"

const CardDetails = () => {
  const {pizzas, pizzaAdd} = useContext(MyContext)
  const {selectedPizza} = useParams()

  return (
    <div>
      {pizzas.map((element) => {
        if (selectedPizza === element.name)
          return (
            <div key={element.id} className="details-card-flex">
              <img src={element.img} alt="" />
              <div className="m-3">
                <h2 className="">{element.name}</h2>
                <hr />
                <p>{element.desc}</p>
                <p className="fw-bold">Ingredientes</p>
                {element.ingredients.map((ingredient) => {
                  return <p key={ingredient} className="ingredients"><CiPizza className="card-icon"/>{ingredient}</p>
                })}
                <hr />
                <div className="price-add">
                  <p className="fw-bold">Precio: $<span>{element.price}</span>
                  </p>
                  <Button 
                  onClick={() => pizzaAdd(element)}
                  variant="danger" className="add text-light btn-flex">
                    Añadir<BsCart4 className="btn-icon"/>
                  </Button>
                </div>
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default CardDetails
