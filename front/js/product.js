getProduct()

/**
 * 
 */
function getProduct(){
    id = window.location.search.split('=')[1]

    fetch(`http://localhost:3000/api/products/${id}`)
    .then(function(result){
        return result.json()
    })
    .then(function(product){
        console.log(product)
        document.querySelector('.item__img').innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}" />`
        title.innerHTML = product.name
        price.innerHTML = product.price
        description.innerHTML = product.description
        // product.colors.forEach(color => {
        //     let elt = document.createElement('option')
        //     elt.value = color
        //     elt.innerHTML = color
        //     console.log(elt);
        //     colors.append(elt)
        // })
        product.colors.map(color => {
            colors.innerHTML += `<option value="${color}">${color}</option>`
        })

    })

    
    
}