crud:
<br>
c-create/add/insert
<br>
r-retrieve/view/get
<br>
u-update/edit
<br>
d-delete/remove

# FS(File System) Node JS's Module:
File System: node library that does not communicate with the browser, interacts directly with OS.

## Major task of FS module 

- Reading and writing files
  - readfile()
  - writefile()
  - appendfile()
- Directory Management
  - mkdir()
  - rmdir(): depricated
  - rm()
  - readdir()
- Metadata/Information
  - stat()
  - lstat()
  - fstat()
- Watching for changes
  - watch()
  - watchFile()
  - unwatchFile()
- Streaming Large File
  - createReadStream()
  - createWriteStream()
- File Operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - syslink()
## if await is being used in a function then the function must be async!
- otherwise it will show following error:
  - SyntaxError: Unexpected reserved word
## in order to use append fuction the file must preexist
## recursive folder creation
  - await mkdir("images/profile/logos",{recursive:true});
## CRUD Operation
  - create/Insert,Read/Retrieve,Update,Delete
  # item
    - id,price,qty.
  - Features:
    - 1. Add to cart
    - 2. Show cart
    - 3. Remove from cart
  # operations
    1. add to cart
    2. show cart
    3. remove item from cart
    4. update quantity from cart
    5. checkout
      NOTE: all items will be stored in hdd,so after termination of program we can retrieve cart details
  # Required File
  1. crud.js-it contains all the methods and entry point
  2. products.json- it contains the product details in array form
## Not null in JS is calles True
    
