

let storage = {},
panier = []

for(a in localStorage)if(localStorage.hasOwnProperty(a)){
    storage[a] = JSON.parse(localStorage[a])
}
// console.log(storage);

fetch("http://localhost:3000/api/products")
.then(function (result) { 
    return result.json() 
})
.then(function (products) {

    console.log(products);
    
    for(id in storage)
        for(indexProduct in products)
            if(id == products[indexProduct]._id){
                for(color in storage[id]){
                    products[indexProduct].color = color
                    products[indexProduct].quantity = storage[id][color]
                    panier.push({...products[indexProduct]})
                }
            }
                
    panier.map(item=>{
        cart__items.innerHTML += `
            <article class="cart__item" data-id="${item._id}" data-color="${item.color}">
                <div class="cart__item__img">
                    <img src="${item.imageUrl}" alt="${item.altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                    <h2>${item.name}</h2>
                    <p>${item.color}</p>
                    <p>${item.price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : ${item.quantity}</p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                    </div>
                </div>
            </article>
        `
    })

    totalQuantity.innerHTML = panier
                                .map(x=>parseInt(x.quantity))
                                .reduce((x,y)=>x+y)
    totalPrice.innerHTML = panier
                            .map(x=>x.price*x.quantity)
                            .reduce((x,y)=>x+y)
})

// let template = `
//     <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
//         <div class="cart__item__img">
//             <img src="../images/product01.jpg" alt="Photographie d'un canapé">
//         </div>
//         <div class="cart__item__content">
//             <div class="cart__item__content__description">
//             <h2>Nom du produit</h2>
//             <p>Vert</p>
//             <p>42,00 €</p>
//             </div>
//             <div class="cart__item__content__settings">
//             <div class="cart__item__content__settings__quantity">
//                 <p>Qté : </p>
//                 <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//             </div>
//             <div class="cart__item__content__settings__delete">
//                 <p class="deleteItem">Supprimer</p>
//             </div>
//             </div>
//         </div>
//     </article>
// `



