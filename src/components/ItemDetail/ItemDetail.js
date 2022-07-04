import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import  CartContext  from '../../context/CartContext'
import { useNotification } from '../../context/Notification'

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);
        function increment () {
            if( count > stock) {
                setCount(count + 1)
            }
        }
        function decrement () {
            if(count > stock) {
                setCount(count - 1)
            }
        } 
    return (
        <div className='BtnContador'>
            <p className='cantidad'>{count}</p>
            <Button variant="danger" onClick={decrement}>-</Button>
            <Button variant="success" onClick={increment}>+</Button>
            <Button onClick={() => onConfirm(count)}>Agregar al carrito</Button>
            
        </div>
    )
}

const ItemDetail = ({ id, img, name, price, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { notify } = useNotification()
    const { addItem } = useContext(CartContext)


    
    const onAdd = (quantity) => {
        setQuantity(quantity)
        notify('Agregado con Éxito') 
        addItem({id, name, price, quantity})
    }
    
    return(
        <div className='CardItem2'>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='CardImg'src={img}/>
            <Card.Body>
                <Card.Title>ItemDetail</Card.Title>
                    <Card.Text className='CardTitle'>
                     {name}
                     </Card.Text>
                     <Card.Text className='price'>
                        ${price}
                    </Card.Text>
                    { quantity > 0 
                     ? <Link to='/cart' className='BTN'> Finalizar </Link>
                     : <ButtonCount stock={stock} onConfirm={onAdd}/>}

            </Card.Body>
        </Card>
        </div>
      
    )
}

export default ItemDetail