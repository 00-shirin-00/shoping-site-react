import React from 'react'
//cssBaseLine
import { CssBaseline } from '@mui/material'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//route
import { Route, Routes ,Navigate} from 'react-router-dom'
//redux
import { useSelector } from 'react-redux'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetailes'
import NotFound from './pages/NotFound'

//packages
import { Toaster } from 'react-hot-toast'
// ========================================================
export default function App() {
  //redux-Token
  const {token} = useSelector((state) => state.auth)
  return (
    <>
      <CssBaseline/>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/> } />
        <Route path='/about' element={ <About/>} />
        <Route path='/auth' element={token?<Navigate to={'/'}/>:<Auth/> } />
        <Route path='/cart' element={!token?<Navigate to={'/auth'}/>:<Cart/> } />
        <Route path='/category' element={<Category/> } />
        <Route path='/products' element={<Products/> } />
        <Route path='/product-details/:id/:name' element={<ProductDetails/> } />
        <Route path='*' element={<NotFound/> } />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}
