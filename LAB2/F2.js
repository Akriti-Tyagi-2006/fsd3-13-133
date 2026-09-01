import {readFile} from "fs/promises";
const data = await readFile("stud.txt","utf-8");
console.log("Data from stud.txt:", data);
const data1 = await readFile("Country.txt","utf-8");
console.log("Data from Country.txt:", data1);
