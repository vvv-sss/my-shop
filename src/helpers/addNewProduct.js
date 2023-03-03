export const addNewProduct = (productData) => {
    const urlBase = 'http://localhost:3001/';
    const urlEndpoint = 'products'

    fetch(urlBase + urlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}