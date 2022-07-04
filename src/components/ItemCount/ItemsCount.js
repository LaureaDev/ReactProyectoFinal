import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


function ItemCount({stock}) {
    const [count, setCount] = useState(0);
        function adding () {
            if( count < stock) {
                setCount(count + 1)
            }
        }
        function subs () {
            if(count > 0) {
                setCount(count - 1)
            }
        } 
         function onAdd () {
                <Alert variant="success">
                <Alert.Heading>Hey, nice {count} to see you </Alert.Heading>
                    <hr />
                    <p className="mb-0"></p>
                </Alert>
        } 
    return (
        <div>
            <div className="btn-Count">
                <Button onClick={adding} variant="success">+</Button>
                <p>{count}</p>
                <Button onClick={subs} variant="danger">-</Button>
            </div>
                <Button onClick={onAdd} variant="primary">Comprar</Button>
        </div>
    )

}

export default ItemCount