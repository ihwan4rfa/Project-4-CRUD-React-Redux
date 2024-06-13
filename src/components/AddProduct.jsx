import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { saveProduct } from '../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const createProduct = (e) => {
        e.preventDefault();
        dispatch(saveProduct({ name, price: parseFloat(price) }));
        navigate('/');
    }

    return (
        <>
            <Navbar />
            <div className='h-screen px-20 pt-20 bg-white dark:bg-slate-900'>
                <div className='flex items-center justify-between'>
                    <h1 className='my-2 text-2xl font-medium dark:text-white'>Add New Product</h1>
                </div>
                <form className='mt-5' onSubmit={createProduct}>
                    <div className='flex w-full gap-8'>
                        <div className='w-full'>
                            <h1 className='text-[13px] font-medium text-slate-500 dark:text-slate-400'>Product Name</h1>
                            <input className='bg-slate-100 dark:text-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 my-2 py-[10px] px-4 text-[13px] rounded-lg w-full outline-none ring-inset focus:ring-2 ring-slate-200 dark:ring-slate-700'
                                type="text"
                                placeholder='Product Name'
                                value={name}
                                onChange={handleChangeName} />
                        </div>
                        <div className='w-full'>
                            <h1 className='text-[13px] font-medium text-slate-500 dark:text-slate-400'>Price</h1>
                            <input className='bg-slate-100 dark:text-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 my-2 py-[10px] px-4 text-[13px] rounded-lg w-full outline-none ring-inset focus:ring-2 ring-slate-200 dark:ring-slate-700'
                                type="text"
                                placeholder='Price'
                                value={price}
                                onChange={handleChangePrice} />
                        </div>
                    </div>
                    <button className='my-2 px-4 py-[10px] text-[13px] text-white bg-teal-600 hover:bg-teal-700 rounded-lg'>Add Product</button>
                </form>
            </div>
        </>
    )
}

export default AddProduct
