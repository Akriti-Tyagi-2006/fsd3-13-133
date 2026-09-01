import {readFile, writeFile, appendFile, unlink} from "fs/promises";
// const writeData = async(fname, contents) =>{
//     await writeFile(fname, contents);
//     console.log("file written successfully");
 
// };
// const readData = async (fname)=>{
//     const data= await readFile(fname,"utf-8");
//     console.log("data from " + fname + ":", data);

 
// };
// const appendData = async(fname, contents)=>{
//     await appendFile(fname, contents);
//     console.log("data appended successfully");
//     console.log("data after appending:");
//     const data= await readFile(fname,"utf-8");
//     console.log("data from " + fname + ":", data);
// };
const deleteFile = async(fname)=>{
    await unlink(fname);
    console.log(`${fname} deleted successfully`);
};
// await writeData("happy.txt","I am Happy");
// await readData("happy.txt");           
// await appendData("happy.txt", "I am appending data");
// await deleteFile("happy.txt");
await deleteFile("Country.txt");