import './NavBar.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()


  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
      <div className='titulo'>
          <p> Ecommerce</p>
            <ul>
                <li>Computadoras</li>
                <li>Accesorios</li>
                <li> Y más ...</li>
            </ul>
      </div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll >
        
            <Link to='/' className='Links'>Home</Link>
            <Link to='/category/MemoriaRam' className='Links' >Memorias</Link>
            <Link to='/category/PlacaVideo' className='Links' >Placas</Link>
            <Link to='/category/Procesador' className='Links' >Procesadores</Link>
            <Link to='/category/DiscoSSD' className='Links' >Discos</Link>
      </Nav>
      {quantity > 0 && <CartWidget />}
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar