import React from "react";
import Items from "./Items";

function ItemList ({products}) {
    return (
        products.map(p => (
            <Items 
                key={p.id}
                name={p.name}
                img={p.img}
                price={p.price}
                stock={p.stock}
                id={p.id}
             /> 
        ))
    )
} 
export default ItemList;
