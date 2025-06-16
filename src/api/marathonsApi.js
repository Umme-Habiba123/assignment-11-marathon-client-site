export const marathonsPromise=()=>{
    return fetch('http://localhost:5000/marathons')
    .then((res)=>{
       return res.json();
    }) 
}