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

    addToCart.addEventListener('click', e=>{
        if(colors.value && parseInt(quantity.value)){

            let item = JSON.parse(localStorage.getItem(id)),
            hasItem = item ? true : false,
            hasColor = hasItem ? item[colors.value] ? true : false : false

            let addProduct = {[colors.value]: quantity.value}

            if(!hasItem) item = addProduct
            if(hasItem && !hasColor) item[colors.value] = quantity.value
            if(hasItem && hasColor) item[colors.value] = parseInt(item[colors.value]) + parseInt(quantity.value)
            
            localStorage.setItem(id, JSON.stringify(item))

            alert(`Vous venez d'ajouter ${quantity.value} articles "${title.textContent}" à votre panier`)
            console.log(localStorage);
        }
            
        else
            if(!colors.value)
                alert(`Veuillez choisir une COULEUR avant d'ajouter l'article: "${title.textContent}" au panier.`)
            else 
                alert(`Veuillez définir une QUANTITÉ avant d'ajouter l'article: "${title.textContent}" au panier.`)

    })
}