export const marathonsPromise=(email, accessToken,sortOrder='desc')=>{
    return fetch(`http://localhost:5000/marathons?email=${email}&sort=${sortOrder}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then((res)=>{
       return res.json();
    }) 
}