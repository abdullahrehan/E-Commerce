import React,{useState} from 'react'
import {Sidebardata} from './Sidebardata';
import *as Ficons from "react-icons/fi";
import './Sidebar.css'
import { Link } from 'react-router-dom';
import *as Mdcons from "react-icons/md";

function Sidebar() {


const [sidebar,setSidebar]=useState(false);

const sidebarbtn = ()=>{
    setSidebar (!sidebar)
    console.log(sidebar)
}


return (
<>
<a onClick={sidebarbtn}><Ficons.FiMenu className='menu-icon'/></a>
<div className={sidebar ? "newside":"side"}>  
<a onClick={sidebarbtn}><Mdcons.MdCancel className='cancel'/></a>
 
<div className='item'>
{Sidebardata.map((item)=>{
return(<Link path='../Products.jsx'> <li className="text">{item.Icon}<a>{item.title}</a></li></Link>)})}
</div>

</div>

</>)}

export default Sidebar

