import "../css/navbar.css"

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)

  return (
    <Navbar bg='info' expand="lg">
      <Container>
        <NavLink to="/" className={`navlink ${setActiveClass} ms-3 text-decoration-none fw-bold`}>Pizzería Mamma Mia!</NavLink>
        <NavLink to="/carrito" className={`navlink ${setActiveClass} me-3 text-decoration-none fw-bold`}>Carrito</NavLink>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
