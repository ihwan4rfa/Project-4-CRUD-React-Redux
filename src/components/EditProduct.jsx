import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelectors, updateProduct } from '../redux/slices/productSlice';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EditProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useSelector((state) => productSelectors.selectById(state, id));
    const isDark = useSelector((state) => state.theme.isDark);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    useEffect(() => {
        product ? (setName(product.name), setPrice(product.price)) : null;
    }, [product]);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ id, name, price }));
        navigate('/');
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    return (
        <>
            <Navbar />
            <div className={`h-screen px-20 pt-20 ${isDark ? 'dark:bg-slate-900' : 'bg-white'}`}>
                <div className='flex items-center justify-between'>
                    <h1 className='my-2 text-2xl font-medium dark:text-white'>Edit Product</h1>
                </div>
                <form className='mt-5' onSubmit={handleUpdate}>
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
                    <button className='my-2 px-4 py-[10px] text-[13px] text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>Update</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct
