const products=[
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 699.99 },
    { id: 3, name: "Tablet", price: 399.99 }
]
let nextId = 4;
export const getAllProducts = () => {
    return products;
}



export const addProduct = (product) => {
    const newProduct = { id: nextId++, ...product };
    products.push(newProduct);
    return newProduct;
}

export const deleteProduct = (pid) => {
    
    const index = products.findIndex((product) => product.pid === pid);
    if (index !== -1) {
        products.splice(index, 1);//deletes the intended product
        console.log("products remanining:",products);
        return true;
    }
    return false;
}
export const updateProduct=(pid,updateItem)=>{
    const index =products.findIndex((product)=>product.id===pid);
    if (index==-1){
        return false;
    }
    updateItem.id=pid;
    products[index]=updateItem;
    return updateItem;
}
export const getProductbyId=(pid)=>{
    const index = products.findIndex((product) => product.id === pid);
    if (index == -1) {
      return false;
    }
    return products[index];

}