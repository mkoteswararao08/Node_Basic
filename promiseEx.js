var promise=new Promise((resolve,reject )=>{
     resolve('hi koti it is resolve');
})

newpromise=promise.then((data)=>{
    //   reject('hi koti it is reject');
      console.log(`inside the then function ${data}`)
      return new Promise((resolve,reject)=>{
          console.log('koti')
          reject('second promise');
      }); 
});

newpromise.then((data)=>{                                
    console.log(`inside the Then function ${data}`)
}).catch((data)=>{
    console.log(`inside the Catch function ${data}`)
});


/* --> By default every then() function will returns new promise, 
         -> if promise is consumed(promise contains resolve) inside the then() function, then by default 
            it will return new promise which is contains resolve as a value.  
         -> if promise is not conumed(promise contains reject) by then() function, then same promise is return
            back. which contains reject as a value.
   --> suppose if we are return new promise by manually. then it will execute then() or catch() based
       on resolve or reject.
*/
