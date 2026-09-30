# Express
1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
(this creates package.json as well)
4. install `npm i nodemon -D`
5. install `npm i express`
6. open package.json
  a.change `type:'module'`
  b.update script{
    "start":"node prg1.js",
    "dev":"modemon prg1.js"
  }  
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore
9. res.send(): send function is used to revert back contents to the client it may be html,JSON,html file,plain text.
we can also add status code with status function.It can be chained with send function.
### MAP: this function is used to iterate any array. It must return new array.
  ```
  array.map((item)=>{return})
  array.map((item)=>())
  ```
  - in first syntax we have to use explicit return keyword whereas second syntax , it isn't required.
  #### exclude number of property from any json object
  ```
  const {p1,p2,...rest}=product; 
  ```
  #### to search any item in json array, we use find method.It will return NULL on unsuccessfull or object on successfull
  ```
  array.find((item)=>item.id===id);
  ```