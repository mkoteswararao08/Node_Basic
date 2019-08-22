console.log('first line');

setTimeout(()=>{
    console.log("first callback function")
},2000);

setTimeout(()=>{
    console.log('second callback function')
},0);

console.log('second line');