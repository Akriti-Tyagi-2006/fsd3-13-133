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