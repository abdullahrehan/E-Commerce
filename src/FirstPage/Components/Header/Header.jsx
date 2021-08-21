// import React, { useContext } from 'react'
// import './Header.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { AiOutlineSearch } from 'react-icons/ai';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { RiAccountCircleLine } from 'react-icons/ri';
// import { FiShoppingCart } from 'react-icons/fi';
// import { GiPlainCircle } from 'react-icons/gi';
// import { HiOutlineShoppingBag } from 'react-icons/hi'
// import { BsBoxArrowInLeft } from 'react-icons/bs'
// import { AiOutlineDelete } from 'react-icons/ai'
// import ContextCart from '../../../Productpage/CartContextjs'
// import { useState } from 'react';
// import { Link } from 'react-router-dom'

// function Header() {

//     const { state, dispatch } = useContext(ContextCart)
//     const [searchitem, setsearchitem] = useState('')
//     const productlength = state.allproducts.length
//     const carticon = { display: productlength === 0 ? 'none' : 'block', color: 'teal' }
//     const carticon2 = { display: productlength === 0 ? 'none' : 'block', color: 'black' }
//     const search = (event) => {

//         setsearchitem(event.target.value)
//         state.inputfield = event.target.value
//     }

//     console.log("search" + state.inputfield);

//     const enterevent = (event) => {

//         if (event.key === 'Enter') {
//             document.getElementById('searchlink').click();
//         }
//     }
//     return (

//         < >
//             <div id="header">
//                 <div className="headerdin1"><a className='innertxt itone' onClick={() => { state.sidebarinfo = null;state.inputfield='' }}><Link to='/E-Commerce'>Your Mart</Link></a></div>
//                 <div className="headerdin2"><a className='innertxt itwo'>
//                     <a > Deleiver in changed</a>
//                     <br />
//                     <a className='locat-icon-a'><HiOutlineLocationMarker className='locat-icon' style={{ color: "white" }} />Muridke</a></a>
//                 </div>ss

//                 <div className="headerdin3 " > <div className='inputf'>
//                     <div><input id='headerinput' type="text" class="form-control" onKeyPress={enterevent} placeholder="Search for items.." value={searchitem} onChange={search} /></div>
//                     <Link to='/products' id='searchlink'><div className='searchbtn'><AiOutlineSearch className='header-serach' style={{ marginTop: '0%' }} /></div></Link>
//                 </div>
//                 </div>

//                 <div className="headerdin4" ><Link to='/signin' className='innertxt ithree'><RiAccountCircleLine className='account-icon' /><a className='account-text'><a className='create'>Create</a> <a className='account'>Account</a></a></Link></div>
//                 <div className="headerdin5" onMouseEnter={() => dispatch({ type: 'cartdiv' })} onClick={() => dispatch({ type: 'Cartpg' })}>

//                     <Link to='/cart' className='innertxt ifour' >
//                         <a>
//                             <FiShoppingCart  className='carticon' />
//                             <GiPlainCircle  className='cartitemno-icon' style={carticon} />
//                         </a>

//                         <a className='no-of-item' style={carticon2} >
//                             {state.allproducts.length}
//                         </a><a className='cart-text'> |cart</a>

//         </Link>
//                 </div>
//             </div>

//             {state.Cartpg ? null :

//                 <div className={state.cartdiv ? 'cart-slide-div' : 'cart-slide-div-in'} >
//                     <BsBoxArrowInLeft size={32} onClick={() => dispatch({ type: 'cartdivback' })} />
//                     <div className='cart-hover-item-list'>
//                         {state.allproducts.map((State) => (
//                             <div className='cart-items-title'>
//                                 <li>
//                                     <HiOutlineShoppingBag size={27} />
//                                     <a className='cart-item-label'>
//                                         {State.name}
//                                     </a>
//                                     <a style={{ float: 'right' }} onClick={() => dispatch({ type: 'deleteitem', State })}><AiOutlineDelete /></a>
//                                 </li>
//                             </div>
//                         ))}

//                     </div>
//                     <div className={state.cartdiv ? 'cart-toal-div' : 'cart-total-in'}>
//                         <a className='total-price-label'>Total Price :
//                  <a style={{ fontWeight: 'bolder', fontSize: '1.4vw' }}>{state.totalprice}$</a>
//                         </a>
//                     </div>
//                 </div>}

//         </>
//     )
// }

// export default Header
