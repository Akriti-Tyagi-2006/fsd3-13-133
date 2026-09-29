import express from "express";
const app=express();
//request goes here
//home page
app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
});
const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];
// app.get("/products",(req,res)=>{
//     res.status(200).send(products);
// })
app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/about",(req,res)=>{
    res.send("<h2>About Page</h2>")
});
app.use((req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
});
//always listen at last
app.listen(3333,()=>console.log("prg1 is running at 3333"));
