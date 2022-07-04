
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()
    return (
        <Link className='CartWidget' to='/cart' variant="outline-secondary">
        <img className='iconCart' src='/imagenes/cart.svg' alt='cart'/><Badge bg="secondary">{quantity}</Badge>
        
    </Link>
    )
}

export default CartWidget