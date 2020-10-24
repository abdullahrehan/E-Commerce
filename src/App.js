import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar.jsx"
import  Header from './Components/Header'
import Img from './Components/Img.jsx'
import Contant from './Components/Contant'

import Button from 'react-bootstrap/Button';
import Services from './Components/Middle Page/Services'
import Products2 from './Components/Products.js'
function App() {
  return (
<>

  <div className='headers'>
   <div className='div2'><Header></Header> </div>
   <div className='div3'> <Sidebar></Sidebar></div>
   <div className='div4'><Contant></Contant></div>
   <div className='div5'><Img></Img> </div>
   <div className='div6 '><input value='Get Started' className={'input btn btn-danger'}></input> </div>
</div> 
<div><Services></Services> </div> 






 
 </> 
  
  );
}

export default App;
