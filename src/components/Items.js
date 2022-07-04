import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function Items({img, name, id, price }) {
  return (
    <Card className='CardItem'>
  <Card.Img className='card-img' variant="top" src={img} />
  <Card.Body>
    <Card.Title className='CardTitle'>{name}</Card.Title>
    <Card.Text className='price'>
       $ {price}
    </Card.Text>
  </Card.Body>
  <div className='VerDetalle'>
  <Link to={`/detail/${id}`} className='BTN'> Ver detalles</Link>
  </div>
</Card>
  )
}

export default Items