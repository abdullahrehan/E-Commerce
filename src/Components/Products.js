import React from 'react'
import Sidebar from "./Sidebar/Sidebar.jsx"
import  Header from './Header'
import Showproducts from './ShowProducts/Showproducts'
import Productsinfo from './ShowProducts/Productinfo'

function Products() {
    return (
        <>
            {/* <Header></Header>
            <Sidebar></Sidebar> */}
            <Productsinfo>
            <Showproducts></Showproducts>
            </Productsinfo>


        </>
    )
}

export default Products
