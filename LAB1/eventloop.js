// const f1=()=>{
//     f2();
//     console.log("f1");
// };
// const f2=()=>{
//     f3();
//     console.log("f2");
// };
// const f3=()=>{
//     console.log("f3");
// }
// const main=()=>{
//     console.log("main");
//     f1();
//     console.log("end");
// };
// main();
const f1=()=>{
    
    console.log("f1");
};
const f2=()=>{
    
    console.log("f2");
};
const f3=()=>{
    console.log("f3");
}
const main=()=>{
    console.log("main");
    f1();
    setTimeout(f2,0);
    setImmediate(f3);
    // setInterval(f2,0);
    f3();
    process.nextTick(f1);
    console.log("end");
};
main();
