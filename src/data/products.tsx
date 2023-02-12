import { IProduct } from "../models"
import { useEffect, useState } from 'react'
import axios from 'axios'
const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<Boolean>(false)
    const [error, setError] = useState("")
    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])

    }

    async function fetchProducts() {
        try {
            setLoading(true)


            const res = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=10")
            setLoading(false)

            setProducts(res.data)
        } catch (e: any) {
            const error = e;
            setLoading(false)
            setError(error.message)

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return { products, loading, error, addProduct }
}
export default useProducts