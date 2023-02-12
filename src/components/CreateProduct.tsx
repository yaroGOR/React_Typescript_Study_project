import React from 'react'
import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios'
import Error from './Error';

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
interface ICreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: ICreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)

    }
    const changeHandler = (event: any) => {
        setValue(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>

            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title'
                value={value}
                onChange={changeHandler}
            />

            {error && <Error error={error} />}

            <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
        </form>
    )
}

export default CreateProduct