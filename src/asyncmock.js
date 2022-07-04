const products = [
    {
        id: 1,
        name: 'Memoria GeiL DDR4 8GB 3600MHz EVO X II RGB',
        price: 64300,
        category: 'MemoriaRam',
        img:'/imagenes/ram4.jpg',
        stock: 5,
    },
    {
        id: 2,
        name: 'Memoria Team DDR4 16GB 3200MHz T-Force Delta RGB White CL16-20-20-40',
        price: 11800,
        category: 'MemoriaRam',
        img:'/imagenes/ram7.jpg',
        stock: 6,
    },
    {
        id: 3,
        name: 'Placa de Video GeForce ASUS GTX 1650 4GB GDDR6 Phoenix OC',
        price: 53500,
        category: 'PlacaVideo',
        img:'/imagenes/placa3.jpg',
        stock: 10,
    }, 
    {
        id: 4,
        name: 'Placa de Video GeForce MSI GTX 1050 Ti 4GB GDDR5 OC Dual Fan',
        price: 66100,
        category: 'PlacaVideo',
        img:'/imagenes/placa4.jpg',
        stock: 10,
    },
    {
        id: 5,
        name: 'Procesador Intel Core i9 12900K 5.2GHz Turbo Socket 1700',
        price: 100500,
        category: 'Procesador',
        img:'/imagenes/procesadorINTEL.jpg',
        stock: 10,
    },
    {
        id: 6,
        name: 'Procesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4',
        price: 110000,
        category: 'Procesador',
        img:'/imagenes/procesadorAMD1.jpg',
        stock: 10,
    },
    {
        id: 7,
        name: 'Disco Solido SSD M.2 WD 2TB Black SN850 7000MB/s NVMe PCIe Gen4',
        price: 75000,
        category: 'DiscoSSD',
        img:'/imagenes/ssd.jpg',
        stock: 10,
    },
    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
 
 export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })

}

export const getProductsByCategory = (categoryId) =>{
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}