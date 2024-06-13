import React from 'react'
import ShowProduct from '../components/ShowProduct'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'

export const routeList = [
    {
        path: '/',
        element: (<ShowProduct />)
    },
    {
        path: 'add',
        element: (<AddProduct />)
    },
    {
        path: 'edit/:id',
        element: (<EditProduct />)
    }
]

export default routeList
