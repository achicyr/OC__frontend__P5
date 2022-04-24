getHomeProducts()


/**
 * Cette fonction n'a qu'une seule instruction, une requête fetch à l'adresse: http://localhost:3000/api/products
 * La promesse ensuite(then) retourné par l'API est traitée(return) comme un json 
 * La réponse fait ensuite(2nd then) l'objet d'une boucle(map) contenant qu'une seul instruction: concatener dans le DOM d'id "items" le template laissé par Bilal à la ligne 52 du document index.html
 */
function getHomeProducts(){
    fetch("http://localhost:3000/api/products")
    .then(function (result) { 
            return result.json() 
    })
    .then(function (products) {
        products.map((el,i)=>{
            items.innerHTML += `
            <a href="./product.html?id=${el._id}">
                <article>
                    <img src="${el.imageUrl}" alt="${el.altTxt}">
                    <h3 class="productName">${el.name}</h3>
                    <p class="productDescription">${el.description}</p>
                </article>
            </a>
            `
        })
    })
}

