export const myApplyPromise=(email, accessToken)=>{
   return fetch(`http://localhost:5000/apply?email=${email}`,
    {   
    headers:{
      authorization : `Bearer ${accessToken}`
    }
   }).then(res=>res.json())
 }
 