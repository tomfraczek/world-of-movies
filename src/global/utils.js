export const fetchData = url => {
    const myResponse = fetch(url)
    .then(result => result.json())
    .then(data => {
        return data;
    })
    .catch(error => {                  
        console.log(error)
   });
return myResponse;
}

