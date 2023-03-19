import "../css/card.css"

import {BsCart4} from "react-icons/bs"
import {CiPizza} from "react-icons/ci"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import {useContext, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import MyContext from "../MyContext"

const MyCard = () => {
  const {pizzas, setPizzas, setPrice} = useContext(MyContext)
  const navigate = useNavigate()

  const toSelectedPizza = (pizzaName) => {
    navigate(`/${pizzaName}`)
  }

  const pizzaAdd = (e) => {
    let cantidadTotal = e.cantidad + 1
    e.cantidad = cantidadTotal
    setPizzas([...pizzas])
  }

  useEffect(() => {
    let total = 0
    pizzas.forEach(function (pizza) {
      total += pizza.price * pizza.cantidad
      setPrice(total)
    })
  }, [pizzas])

  return (
    <div className="container">
      <div className="row mb-5">
        {pizzas.map((element) => {
          return (
            <div
              key={element.id}
              className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-5"
            >
              <Card style={{width: "18rem"}} className="m-auto">
                <Card.Img variant="top" src={element.img} />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {element.name}
                  </Card.Title>
                  <hr />
                  <Card.Subtitle className="mb-3">Ingredientes</Card.Subtitle>
                  {element.ingredients.map((ingredient) => {
                    return (
                      <Card.Text
                        key={ingredient}
                        className="text-capitalize mb-0 card-ingredients"
                      >
                        <CiPizza className="card-icon"/>{ingredient}
                      </Card.Text>
                    )
                  })}
                  <hr />
                  <Card.Text className="text-center fs-5">
                    $<span>{element.price}</span>
                  </Card.Text>
                  <div className="d-flex">
                    <Button
                      onClick={() => toSelectedPizza(element.name)}
                      variant="info"
                      className="m-auto text-light btn-flex"
                    >
                      Ver más
                    </Button>
                    <Button
                      onClick={() => pizzaAdd(element)}
                      variant="danger"
                      className="m-auto text-light btn-flex"
                    >
                      Añadir<BsCart4 className="btn-icon"/>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyCard
