import { createReadStream } from "fs";
import http from "http";
import {reviews,items} from "./data.js";


const server = http.createServer((req, res) => {
  
  const product = {
    id: 10,
    name: "Anker 10,000mAh Power Bank",
    price: 25.99,
    image: "https://example.com/images/powerbank.jpg",
    desc: "Ultra-compact portable charger equipped with high-speed USB-C Power Delivery technology.",
  };
  if (req.url === "/api/products") {
    // res.end(JSON.stringify(product));
    res.end(JSON.stringify(items));
  }else if (req.url === "/api/reviews") {
    res.end(JSON.stringify(reviews));


    
  }else {
    res.statusCode = 404;
    res.end();
  }
});

  
  
server.listen(3000, () => console.log("prg4 is running"));
