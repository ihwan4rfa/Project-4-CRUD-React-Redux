import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, productSelectors, deleteProduct } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ShowProduct = () => {

    const dispatch = useDispatch();
    const products = useSelector(productSelectors.selectAll);
    const isDark = useSelector((state) => state.theme.isDark);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className={`h-screen px-20 pt-20 ${isDark ? 'dark:bg-slate-900 dark-scroll' : 'bg-white'}`}>
                <div className='flex items-center justify-between'>
                    <h1 className='my-2 text-2xl font-medium dark:text-white'>Products</h1>
                    <Link to='add' className='px-3 py-[8px] text-[13px] text-white bg-teal-600 hover:bg-teal-700 rounded-lg'><i className="mr-2 fa-solid fa-plus"></i>New Product</Link>
                </div>
                <div className='overflow-y-auto h-[80%] mt-5'>
                    <table className='text-[13px] font-medium w-full'>
                        <thead className='sticky top-0 bg-slate-100 dark:bg-slate-800'>
                            <tr className='text-left text-slate-500 dark:text-slate-400'>
                                <th className='px-4 py-2 rounded-l-lg'>No</th>
                                <th className='px-4 py-2'>Product Name</th>
                                <th className='px-4 py-2'>Price</th>
                                <th className='px-4 py-2 text-end'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr className='border-b-2 border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400' key={product.id}>
                                    <td className='px-4 py-2'>{index + 1}</td>
                                    <td className='px-4 py-2'>{product.name}</td>
                                    <td className='px-4 py-2'>{product.price}</td>
                                    <td className='px-4 py-2 text-end'>
                                        <Link to={`edit/${product.id}`} className='pl-6 py-2 text-[13px] text-blue-400 hover:text-blue-500 rounded-lg'><i className="mr-1 fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => dispatch(deleteProduct(product.id))} className='pl-6 py-2 text-[13px] text-rose-400 hover:text-rose-500 rounded-lg'><i className="mr-1 fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowProduct
