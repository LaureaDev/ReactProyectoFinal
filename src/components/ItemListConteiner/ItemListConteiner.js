
import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import style from "./ItemListConteiner.module.css"
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListConteiner = () => {
    const [products, setProducts] = useState([])


    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })
        
   }, [categoryId]) 
   
    
    return (
        <div className={style.container}>
            <ItemList products={products}/>
        </div>
        
    )

}

export default ItemListConteiner