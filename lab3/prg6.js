import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if (req.url === "/" && req.method === "POST") {
    // console.log("Request:", req);
    let body = ''
    req.on("data", (chunk) => {
      body += chunk;
    })
    req.on("end", () => {
      const product=JSON.parse(body);
      console.log("received product:", product);
      res.statusCode = 201;
      res.end(
        JSON.stringify({
          message: "Product received",
          receivedProduct: product,
        }),
      );
      
    });
    
  } else if (req.url === "/" && req.method === "PUT") {
    res.statusCode = 200;
    res.end("Put Request");
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("Delete Request");
  } else {
    res.statusCode = 404;
    res.end("sent with 404 status code");
  }
});
server.listen(5000, () => console.log("prg6 is running"));
