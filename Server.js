const express=require('express');
const app=express();
const fs=require('fs');


//app.use() method is used to set middleware.
//__dirname contains absoult path of our current project.
console.log("path is "+__dirname);
app.use(express.static(__dirname+"/public"));
// app.use('/static',express.static(__dirname+"/public"));


/* -> this is middleware, middleware is nothing but a function.
   -> Using the app.use() function we will set middleware.
   -> The order of writing middleware function is matters.
      middleware will be executed in the order we call app.use(). 
      suppose if we write express.static() middleware before
      this middleware then for static files this middleware won't get called.
      suppose if write this middelware function before express.static() then for every static file request
      also this function is called.    
*/
app.use((req,res,next)=>{
     console.log('middleware function')
     var date=new Date().toString();
     var log=`${date} :::: ${req.method} :::: ${req.url}`;
     console.log(log);
     fs.appendFile('server.log', log+'\n',(err)=>{
          if(err)  
          console.log(err);
     })
     next();
});

// Inside the middleware function, we need to call next() function otherwise it won't calls next middleware function.
// app.use((req,res,next)=>{
//     res.sendFile(__dirname+'/Error.html');
// })

app.get('/',(req,res)=>{
     res.send('hi express');
})

app.get('/home',(req,res)=>{
     res.sendFile(__dirname+"/home.html")  
})
app.listen(3000);