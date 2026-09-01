import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";
const FILE = "products.json";
const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};
const addToCart = async (item) => {
  const products = await getCart();
  const productFound = products.find((p) => p.id === item.id);
  if (productFound) {
    productFound.qty += item.qty;
    console.log("Product in cart quantity updated");
  } else {
    products.push(item);
    console.log("Product added successfully 👍");
  }
  products.push(item);
  await saveCart(products);
};
const showCart = () => {
  console.log("show cart");
};
const deleteFromCart = () => {
  console.log("delete cart");
};
const updateCart = () => {
  console.log("update cart");
};

const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("Welcome to shopping cart🛒");
    console.log("1---------Add to cart");
    console.log("2---------Show to cart");
    console.log("3---------Remove Item");
    console.log("4---------Update Quantity");
    console.log("5---------Checkout");

    choice = await cin.question("Enter your choice:");
    console.log("Entered choice:", choice);
    switch (Number(choice)) {
      case 1:
        let data = await cin.question("Enter name,id,price,quantity:");
        let p = data.split(",");
        // console.table(p);
        let q = p.map((item) => item.trim());
        let [name, id, price, qty] = q;
        console.log(name, id, price, qty);
        const product = {
          name,
          id: Number(id),
          price: Number(price),
          qty: Number(qty),
        };
        await addToCart(product);
        // console.log(product);
        // console.table(q);

        break;
      case 2:
        showCart();
        break;
      case 3:
        deleteFromCart();
        break;
      case 4:
        updateCart();
        break;
      case 5:
        console.log("See you later...😁");
        break;
      default:
        console.log("Invalid choice! try again🛑");
    }
  } while (choice != 5);

  cin.close();
};
main();
