import http from "http";
import { getAllProducts, addProduct,deleteProduct,getProductbyId,updateProduct } from "./products.js";
import { pid } from "process";
const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } 
  else if (req.url.startsWith("/api/v1/products/") && req.method === "GET") {
    const pid=req.url.split("/").pop();
    console.log("Product ID to retrieve:", pid);
    const getprd = getProductbyId(parseInt(pid));
    if (getprd) {
      res.statusCode = 200;
      res.end(JSON.stringify({data:getprd}));
    } else {
      
      res.end(JSON.stringify({msg:`product with id ${pid} not found`}));
    }
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request:", req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      const item=addProduct(product);
      console.log("added product:", item);
      res.statusCode = 201;
      res.end(
        JSON.stringify({
          message: "Product added",
          addedProduct: item,
        }),
      );
    });
  } else if (req.url.startsWith("/api/v1/products/") && req.method === "PUT") {
    const productId = req.url.split("/").pop();
    console.log("Product ID to update:", productId);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.pid=productId;
      const updatedProduct=updateProduct(parseInt(productId),product); 
      if(!updatedProduct)
        res.end(JSON.stringify({msg:`id ${productId} not found`}))
      else{
        res.statusCode = 200;

      res.end(
        JSON.stringify({
          message: "Product updated",
          updatedProduct: product,
        }),
      );}
      
    });
  } else if (req.url.startsWith("/api/v1/products/") && req.method === "DELETE") {
    const pid=req.url.split("/").pop();
    console.log("Product ID to delete:", pid);
    const deleted = deleteProduct(parseInt(pid));
    if (deleted) {
      res.statusCode = 200;
      res.end("Product deleted");
    } else {
      
      res.end(JSON.stringify({msg:`product with id ${pid} not found`}));
    }
  } else {
    res.statusCode = 404;
    res.end("sent with 404 status code");
  }
});
server.listen(5000, () => console.log("prg6 is running"));
