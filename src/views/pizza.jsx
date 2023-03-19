import {useParams} from "react-router-dom"
import {useContext} from "react"
import MyContext from "../MyContext"

const Pizza = () => {
  const {pizzas} = useContext(MyContext)
  const {selectedPizza} = useParams()

  return (
    <div>
      {selectedPizza}
    </div>
  )
}

export default Pizza
