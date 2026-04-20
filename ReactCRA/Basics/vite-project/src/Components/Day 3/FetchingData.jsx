import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"
import Controlled from "./Controlled"

const FetchingData = () => {
    const [state, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let fetchData = async()=>{
            try {
                let res = await fetch("https://dummyjson.com/products")
                console.log(res)
                if(res.ok){
                    let data = await res.json()
                    setData(data.products)
                    setLoading(false)
                }
            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    console.log(loading)
    return (
        <div>
            {state.map((products) =><Card key = {products.id} data = {products}></Card>)}
            <Controlled load = {loading ? "loading" : "Loaded"}></Controlled>
        </div>
    )
}

export default FetchingData