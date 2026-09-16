import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req,res)=>{
    //req method->GET,POST,PUT,DELETE,PATCH
    console.log("Method:",req.method);
    //req url->/pot,/bottle
    console.log("URL:",req.url);
    //Browser can send only GET request to the server
    //POST/ PUT/DELETE/PATCH->can be checked using api tester
    //API Tester->Postman,Thunder Client,Insomnia,echo api
    if(req.url==="/"){
        res.setHeader("content-type","text/html");
        
        res.end("<h1>Hello from prg5</h1>");
    }else if(req.url==="/products"){
        const products = [
            {id:1,name:"Laptop"},
            {id:2,name:"Mobile"}
        ];
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(products));
    }else{
        res.end("<h1>Page Not Found</h1>");
    }


});
server.listen(5000,()=>console.log("prg5 is running"));