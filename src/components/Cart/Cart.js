import { useContext } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
const Cart = () => {
    const { cart } = useContext(CartContext)

     return (     
        <div>
           {cart.map(p => <CartItem  key={p.id} {...p}/>) }
          <Link to={'/form'}><Button variant="info">Generar Orden</Button></Link>
        </div>
    )

}
export default Cart