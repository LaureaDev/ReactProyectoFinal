import React, { useState }from 'react';
import './Formulario.css';
import { Formik } from 'formik';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase"
import Button from 'react-bootstrap/esm/Button';
import { useNotification } from '../../context/Notification'
import Form from 'react-bootstrap/esm/Form';

const Formulario = () => {
    const { cart, getQuantity, getTotal, removeItem } = useContext(CartContext)  
    const [formularioEnviado, setFormularioEnviado] = useState(false)
    const { notify } = useNotification()
    const [order, setOrder] = useState({
        name: '',
        apellido: '',
        email: ''
    })

    const onSubmit = (data) =>{
        <Button variant="primary" onClick={createOrder} >Generar Orden</Button>
        setOrder({
            name: data.nombre,
            apellido: data.apellido,
            email: data.email
        })
        createOrder()
    }
    
    const createOrder = () => {
        
        notify('Orden creada con Éxito')
        const objOrder = {
            buyer: order,
            items: cart,
            total: getTotal()
        }
        
        const ids = cart.map(prod => prod.id)
    
        const batch = writeBatch (db)

        const OfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if( dataDoc.stock >= prodQuantity ){
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    
                }else {
                    OfStock.push( {id: doc.id, ...dataDoc} )
                }
            })
        }).then(() => {
            if (OfStock.length === 0){
                const collectionRef = collection (db, 'orders')
                
                return addDoc(collectionRef, objOrder)
             
            }else {
                return Promise.reject( { type: 'of_stock', products: OfStock })
            }
        }).then(( {id} ) => {
            batch.commit()
            
            removeItem()
            notify(`el producto ${id}`)
        }).catch(error =>{
            console.log(objOrder)
            if(error.type === 'out_of_stock'){
                
            }
        })
    
    } 
        if(getQuantity() === 0) {
         (<h1>Carrito de compras limpio</h1>)
        }
        
	return (
        
        <Formik 
            initialValues={{
                nombre: '',
                apellido: '',
                email: ''
            }}
            
            validate={(valores) => {
            const errors = {};
            //Nombres
            if (!valores.nombre) {
                errors.nombre = 'Por favor ingresa un nombre requerido';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errors.nombre = 'El Nombre solo puede contener letras';
            }

            //Apellidos
            if (!valores.apellido) {
                errors.apellido = 'Por favor ingresa un apellido requerido';
            }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                errors.apellido = 'El Apellido solo puede contener letras';
            }

            //Email
            if (!valores.email) {
                errors.email = 'Por favor ingresa un correo electronico requerido';
            }else if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errors.email = 'El Correo solo puede tener a-z, 0-9, @, ., -';
            }

            return errors;
            }}

                onSubmit={({onSubmit}) => {
                    onSubmit();
                setFormularioEnviado (true);

                setTimeout(() => setFormularioEnviado(false) ,3000);
            }}
        >
      
        { ( {errors, values, touched, handleSubmit, handleChange, handleBlur} ) => (


            <Form className='formulario' onSubmit={handleSubmit (onSubmit)}> 
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text"
                    id="nombre"
                    name='nombre'
                    placeholder='John'
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                    { touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                    type="text"
                    id="apellido"
                    name='apellido'
                    placeholder='Deep'
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                    { touched.apellido && errors.apellido && <div className='error'>{errors.apellido}</div>}
                </div>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                    type="email"
                    id="correo"
                    name='correo'
                    placeholder='correo@gmail.com'
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                     
                     { touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
                </div>
                <button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                       
            </Form>
        )}
        
        </Formik>
    )
}
 
export default Formulario;