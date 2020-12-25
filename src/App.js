import React,{useContext,useState} from 'react'
import Productpage from './Productpage/Productpage'
import FirstPageweb from './FirstPage/FirstPageweb.jsx'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import ContextCart from './Productpage/CartContextjs'
import  Prodprev from './Productpage/Prodprev/Prodprev'
import Header from './FirstPage/Components/Header/Header'
import Sidebar from './FirstPage/Components/Sidebar/Sidebar'
import SigninFoam from './FirstPage/Components/SigninFoam/SigninFoam'
import Enddiv from './FirstPage/Components/Enddiv/Enddiv'
import Singleproductinfo from './Productpage/Singleproductinfo/Singleproductinfo'
import Products from './Productpage/Component/Products'
import Cart from './Productpage/Component/Cart/Cart'
import './App.css'


function App() {
    const [preloader,setpreloader]=useState(false)
    return (

        <div className="Appjs-main-div " onLoad={()=>setpreloader(true)}>
         <div className={preloader?"pre-loader-display":'preloader'}></div>       
        <div><Header></Header></div>
        <div><Sidebar></Sidebar></div>
        <Switch>
            <Route path="/E-Commerce"component={FirstPageweb} exact ></Route>
            <Route path="/products"  component={Products} exact></Route>
            <Route path='/items' exact component={Singleproductinfo}/>
            <Route path='/signin' exact component={SigninFoam}/>
            <Route path='/cart' exact component={Cart}/>
        </Switch>
        <footer><div className='end-div'><Enddiv></Enddiv></div></footer> 
        </div>
    )
}

export default App
