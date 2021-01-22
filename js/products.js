
const productsTemplate = (products, shelfText) =>  {

    const shelf = document.getElementById(shelfText);

    let productsString = ""
    products.forEach(product => {
        
        let onlyProductString = 
        `<article id='${product.id}' class='product' draggable='true' ondragstart='drag(event)'>
            <img src='${product.img}' alt='${product.imgText}' srcset='' draggable='false'>
            <div class='price'>${product.price}€</div>
        </article>`

        productsString = productsString + onlyProductString;
    });
    
    shelf.innerHTML = productsString;

}

let menu = [
    {'id':'product1','img':'./img/hamburguesa.png', 'imgText':'Hamburguesa', 'price':'8.50'},
    {'id':'product2','img':'./img/menu2.png', 'imgText':'menu2.png', 'price':'5.50'},
    {'id':'product3','img':'./img/menu3.png', 'imgText':'menu3.png', 'price':'7.00'},
    {'id':'product4','img':'./img/menu4.png', 'imgText':'menu4.png', 'price':'3.50'},
    {'id':'product5','img':'./img/menu5.png', 'imgText':'menu5.png', 'price':'2.30'},
    {'id':'product6','img':'./img/menu6.png', 'imgText':'menu6.png', 'price':'2.00'},
    
];

productsTemplate(menu,"menu");


let othersFood = [
    {'id':'product9','img':'./img/bebida1.png', 'imgText':'cocacola', 'price':'1.50'},
    {'id':'product10','img':'./img/bebida2.png', 'imgText':'leche', 'price':'0.90'},
    {'id':'product11','img':'./img/bebida3.png', 'imgText':'refresco', 'price':'1.00'},
    
]

productsTemplate(othersFood,"othersFood");

