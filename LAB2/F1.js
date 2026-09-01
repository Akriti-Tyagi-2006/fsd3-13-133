import {writeFile} from "fs/promises";
await writeFile("stud.txt", "Name: John Doe\nAge: 25\nCourse: Computer Science");
console.log("File written successfully");
await writeFile("Country.txt", "Country: India\nCapital: New Delhi\nPopulation: 1.3 billion");
console.log("File written successfully");