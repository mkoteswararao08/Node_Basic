var getUser= (id, callback)=>{
      var user={
          id:id,
          name:'mkr'
      } 
      setTimeout(() => {
          callback(user);
      }, 2000);  
}

getUser(7,(user)=>{
     console.log(user); 
})

console.log('hi callback')