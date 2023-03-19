import "../css/navbar.css"

import pizza_icon from "../img/pizza_icon.png"
import {BsCart4} from "react-icons/bs"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

import {NavLink} from "react-router-dom"
import {useContext} from "react"
import MyContext from "../MyContext"

const MyNavbar = () => {
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
  const {price} = useContext(MyContext)

  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <NavLink
          to="/"
          className={`navlink ${setActiveClass} ms-3 text-decoration-none fw-bold`}
        >
          <img src={pizza_icon} alt="ícono pizza" />
          Pizzería Mamma Mia!
        </NavLink>
        <NavLink
          to="/carrito"
          className={`navlink ${setActiveClass} me-3 text-decoration-none fw-bold`}
        >
          <BsCart4 className="nav-icon"/>
          Carrito $<span>{price}</span>
        </NavLink>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
