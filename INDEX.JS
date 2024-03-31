//  remove item
//  const removeToCart =(cart, products)=>{
//     const RemoveCart = cart.filter(item => item.id === products.id)

//     return RemoveCart
//  }
 



//  // exmple

//  let cart = [
//     { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
//     { id: 5, price: 500, discount: 0.05, qty: 2, total: 950 },
//     { id: 1, price: 100, discount: 0.1, qty: 1, total: 90 }
// ];

// let product = cart[1]
// console.log(product)


const upDateProducts = (cart, products) =>{
     const upDate = cart.map(item =>{
        if (item === products){
            return {...item, qty:item.qty + 1}
        }
        return item
     })
     return  upDate
}



// exmple

let cart = [
    { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
    { id: 5, price: 500, discount: 0.05, qty: 2, total: 950 },
    { id: 1, price: 100, discount: 0.1, qty: 1, total: 90 }
];
 
let product = cart[1]
cart = upDateProducts(cart, product)
console.log(cart)



