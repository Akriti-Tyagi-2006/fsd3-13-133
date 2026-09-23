## localhost - URL
   - 127.0.0.1: IP address
   - ctrl+c to stop the server
   - every request from client has a pair of {request,response}
# npm: node package manager
   ## used to install , run, uninstall any program/project and package
   - npm install <packageName>
   - npm uninstall <packageName>
   - to use npm project must be npm project, to create npm project we can use: npm init -y, it creates a package.json file automatically 
   - package.json holds all the information related to install packages from npm
   - update package.json,set type="module"
   - it also creates a folder node_modules automatically
   - node_modules holds the package/library files
   - generally we ignore the node_modules by .gitignore
   ### nodemon: it restarts the server automatically when file changes, to install-
     - npm i nodemon -D
     - Note: -D flag will install this package as developer dependency
     - to execute any program, update the package.json file then start the server as
       - <b> npm run dev</b>
       - start -> it will execute the app on deployment 
       - dev -> it will start server in development phase(only for developer)
       - res: it will return contents (json/html/plain) to the user/client
       -req: it will retrieve the information from client to the server
       - server send also statusCodes to the client, that indicates the error/success message
   #### Status Codes
      - 200: ok
      - 201: created

      - 400: bad request
      -401: unauthorized
      - 402: forbidden
      - 404: not found
      - 500: internal server error
   #### Content Type
      - text/plain
      - text/html
      - application/json
      -text/CSS
      the content type and status code can be send back to client by two days 
      1. res.writehead
      2. res.setHeader
      3. res.statusCode
   ### send HTML file to client
      1. res.end
         - end('any html content/tag')
      2. html file
         - read using createReadStream
         - pipe with res object
      3. html content
         - send any html tags/content by using
         - res.end('<any html tag>')
   ### JSON: JAVASCRIPT OBJECT NOTATION
      - server returns data only not html contents because html contents will be written by content developer.
      - The data is in JSON format.
      #### JSON always stores data in key-value pair enclosed by curly brackets. Array can be stored by [].
         1. one pair of curly bracket will represent one object and its properties will be separated by ','.
```
         {
            id:1,
            name:"Mobile",
            price:25000,
            rating:4.5,
            review:200

         }
```
### headers is used to tell the client, the type of data sent by the server.It may be HTML file,JSON data,plain (text) files,CSS files,any tokens(for log in)
   1. text/plain: text file
   2. text/html:html contents/file
   3. application/json:json contents/file
   4. text/CSS: stylesheet
   5. application/form-data:for uploading file
   6. application/auth: for tokens the headers can be set by res object at server side by two ways.

   7. res.setHeader
   8. 
### GET:
   - no parameter will be passed to the server when we receive all items.
### POST:
   - to add record we pass the value from body section in JSON format of API tester(ECHO API).
### DELETE:
   - to delete any product we pass parameter that is id of the product from url/id. Nothing is passed in the body section.
### UPDATE:
   - PUT/PATCH: We pass id from url and data to update from body section of the API tester.

