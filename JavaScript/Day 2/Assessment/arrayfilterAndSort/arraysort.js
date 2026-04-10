let cartData = [
    {
        id:1,
        name:"watch",
        price: 2999,
        quantity: 2
    },
    {  
        id:2,
        name:"Shoes",
        price: 199,
        quantity: 5
    },
    {
        id:3,
        name:"Earphones",
        price: 299,
        quantity: 10
    }
]

function sortByName(){
    return cartData.sort((a, b)=>
        a.name.localeCompare(b.name)
    )
}
console.log(sortByName())

function sortByPrice(){
    return cartData.sort((a, b)=> a.price - b.price)
}
console.log(sortByPrice())

let arr1 = cartData.filter(a => a.price > 2000)
console.log(arr1)