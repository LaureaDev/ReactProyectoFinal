import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailConteiner = ( ) => {
    const [product, setProduct] = useState()
    const { productosId } = useParams()
    
    useEffect(() => {
    getDoc (doc(db, 'products', productosId)).then (response => {
        console.log(response)
   const product = { id: response.id, ...response.data()}
        setProduct(product)
})
    }, [productosId])

    return(
        
            <ItemDetail {...product}/> 
    )
}

export default ItemDetailConteiner
