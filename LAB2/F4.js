import {mkdir, rm} from "fs/promises";
// await mkdir("upload");
// console.log("Directory created successfully");
// await mkdir("upload/resume");
// console.log("resume created under upload directory successfully");
// await mkdir("images/profile/logos",{recursive:true});
// console.log(" Recursive Directory created successfully");
await rm("upload", {recursive:true});