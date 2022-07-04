import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartItem = ({ id, name, quantity, price}) => {
    const { removeItem } = useContext(CartContext)
    
    
    const Remove = (id) => {
        removeItem(id)
    }
    return (
            
    <Card className="text-center">
      <Card.Header className='Header'>Inventario de Productos</Card.Header>
      <Card.Body >
        <Card.Title className='CardTitle'>{name}</Card.Title>
        <Card.Text >
        Precio por unidad: ${price}
        </Card.Text>
        <Card.Text >
        Cantidad: {quantity}
        </Card.Text>
        <Card.Text>
        Subtotal: ${price * quantity}
        </Card.Text>
        <Button className='Remover' variant="danger" onClick={() => Remove(id)}>Remover</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
export default CartItem