import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if (req.url === "/" && req.method === "POST") {
    res.statusCode = 200;
    res.end("Post Request");
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
