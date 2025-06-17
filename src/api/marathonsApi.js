export const marathonsPromise=(email, accessToken)=>{
    return fetch(`http://localhost:5000/marathons?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then((res)=>{
       return res.json();
    }) 
}