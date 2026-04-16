type products = {
    price:number,
    title:string,
    category:string
}

let fetchData = async() => {
    try{
        let res = await fetch("https://dummyjson.com/products")

        if(res.ok){
            let data = await res.json()
            let input = (prompt(`
                Choose option(comma seperated(LIKE:1,2,3)):
                1 - Price > 5
                2 - Price > 10
                3 - Category: Beauty
                4 - Category: Groceries
                5 - Sort Title ASC
                6 - Sort Title DESC
                `))
            let options = input ? input.split(",").map(o => Number(o.trim())) : []
            // console.log(data)
            display(data.products, options)
        }
        console.log(res)
    }catch(error){
        console.log(error)
    }
}


let display = (data:products[], options:number[]) => {
    let result = [...data]
    data.map((products) => {
        let price = products.price
        // console.log(price)
        let title = products.title
        // console.log(title)
        let category = products.category
        // console.log(category)

        options.forEach(option => {
            if(option === 1 && products.price > 5){
                console.log(products)
            }

            if(option === 2 && products.price >10){
                console.log(products)
            }

            if(option === 3 && products.category === "beauty"){
                console.log(products)
            }

            if(option === 4 && products.category === "groceries"){
                console.log(products)
            }

            if(option === 5){
                console.log(result.sort((a, b) => a.title.localeCompare(b.title)))
            }
            
            if(option === 6){
                console.log(result.sort((a, b) => b.title.localeCompare(a.title)))
            }
        })
    })
}

fetchData()
