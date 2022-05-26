

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

    function getTotalAmount(){
        if(panier.length != 0){
            totalQuantity.innerHTML = panier
                                        .map(x=>parseInt(x.quantity))
                                        .reduce((x,y)=>x+y)
            totalPrice.innerHTML = panier
                                    .map(x=>x.price*x.quantity)
                                    .reduce((x,y)=>x+y)
        }else {
            cart__items.innerHTML = "Votre panier est vide, veuillez ajouter des article avant de pouvoir passer commande."
            totalQuantity.innerHTML = 0
            totalPrice.innerHTML = 0
        }
    }
    
    function getPanier(){
        panier = []
        for(id in storage)
            for(indexProduct in products)
                if(id == products[indexProduct]._id){
                    for(color in storage[id]){
                        products[indexProduct].color = color
                        products[indexProduct].quantity = storage[id][color]
                        panier.push({...products[indexProduct]})
                    }
                }
    }      

    
    console.log(products);


    getPanier()

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


    getTotalAmount()
    

    let killBTN = document.querySelectorAll('.deleteItem')
    Object.keys(killBTN).map(index=>killBTN[index].addEventListener("click",function(e){
        let article = this.closest('article'),
        id = article.dataset.id,
        color = article.dataset.color,
        item = JSON.parse(localStorage.getItem(id)),
        doDelete = confirm(`Vous êtes sur le point de supprimer un produit(${article.getElementsByTagName('h2')[0].textContent}(${article.getElementsByClassName('itemQuantity')[0].value})) de votre panier, êtes-vous sûr ?`)
        alert(id+" xxx "+color)
        if(doDelete){
            // console.log(item)
            delete item[color]
            // console.log(item)
            localStorage.setItem(id, JSON.stringify(item))

            document.location.reload()
        }
    }))

    let quantityINPUT = document.querySelectorAll('.itemQuantity')
    Object.keys(quantityINPUT).map(index=>quantityINPUT[index].addEventListener("blur",function(e){
        let article = this.closest('article'),
        id = article.dataset.id,
        color = article.dataset.color,
        item = JSON.parse(localStorage.getItem(id)),
        doChange = item[color] != article.getElementsByClassName('itemQuantity')[0].value
            ? confirm(`Voulez-vous vraiment changer la quantité de (${item[color]}) à (${article.getElementsByClassName('itemQuantity')[0].value}) pour le produit suivant ? (${article.getElementsByTagName('h2')[0].textContent}) de votre panier, êtes-vous sûr ?`)
            : false
        alert(id+" xxx "+color)
        if(doChange){
            item[color] = article.getElementsByClassName('itemQuantity')[0].value
            localStorage.setItem(id, JSON.stringify(item))
            document.location.reload()
        }
    }))


    document.querySelector('.cart__order__form').addEventListener('submit', e=>{
        let form = e.target,
        formObject = {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        }

        console.log(formObject)

        e.preventDefault()
        console.log(Object.keys(localStorage).every(x=>typeof x == 'string'))

        fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({contact: formObject, products: Object.keys(localStorage).filter(x=>typeof x == 'string')})
        })
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value)
            location.href = "./confirmation.html?order-id="+value.orderId
        })
    })
    // document.querySelector('.cart__order__form').onsubmit='return false'
    // document.querySelector('.cart__order__form').addEventListener('submit',function(e){
    //     console.log(this.form)
    //     return false
    // })
    
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


