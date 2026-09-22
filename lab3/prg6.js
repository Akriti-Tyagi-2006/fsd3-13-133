import http from "http";
import { getAllProducts } from "./products.js";
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
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request:", req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("received product:", product);
      res.statusCode = 201;
      res.end(
        JSON.stringify({
          message: "Product received",
          receivedProduct: product,
        }),
      );
    });
  } else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productId = req.url.split("/").pop();
    console.log("Product ID to update:", productId);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("Product updated:", product);
      res.statusCode = 201;
      res.end(
        JSON.stringify({
          message: "Product updated",
          updatedProduct: product,
        }),
      );
    });
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("Delete Request");
  } else {
    res.statusCode = 404;
    res.end("sent with 404 status code");
  }
});
server.listen(5000, () => console.log("prg6 is running"));
