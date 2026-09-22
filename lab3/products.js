const products=[
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 699.99 },
    { id: 3, name: "Tablet", price: 399.99 }
]
let nextId = 4;
export const getAllProducts = () => {
    return products;
}



export function addProduct(name, price) {
    const newProduct = { id: nextId++, name, price };
    products.push(newProduct);
    return newProduct;
}