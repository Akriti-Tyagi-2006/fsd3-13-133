import { products } from "./data.js";
import express from "express";
const app=express();
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>
    <a href="/api/products">
    Browse Products
    </a>`);
});
app.get("/api/products",(req,res)=>{
    // res.status(200).json({count:products.length,data:products});
    const modifiedProducts=products.map(({reviews,description,...rest})=>rest,);
    res
      .status(200)
      .json({ count: modifiedProducts.length, data: modifiedProducts });
});


app.get("/api/products/:id",(req,res)=>{
    const {id}=req.params;
    const product=products.find((item)=>item.id===Number(id));//iterative approach
    if(product){
        res.status(200).json({status:true,data:product})
    }
    else{
        res.status(404).json({status:false,msg:`product not found with id: ${id}`});
    }

    
});
app.use((req,res)=>{
    res.status(404).send("route not found");
});
app.listen(3333,()=>console.log("prg4 is running..."));