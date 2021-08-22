import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPageweb from './FirstPage/FirstPageweb.jsx';
import Cart from './Productpage/Component/Cart/Cart'
import CartContext from './Productpage/CartContext'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Allproducts from './Productpage/Productpage'



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <CartContext>

<App />

</CartContext>
</BrowserRouter>
  </React.StrictMode>,


document.getElementById('root')
  );

serviceWorker.unregister();
