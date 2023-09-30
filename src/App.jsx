import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'
import CartContextProvider from './context/CartContext'
import Loader from './components/Loader'
import CartWidget from './components/CartWidget'



const App = () => {

  return (
    <>
      
      {/* <CartContextProvider>
        <CartWidget/>
        <Cart/>        
      </CartContextProvider> */}
      


      <BrowserRouter>
        <CartContextProvider> 
        <NavBar />

        <Routes>
         
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />

        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App

//El exact lo q hace es mostrar el primer resultado de lo q encuentra en las rutas, se usa el "exact path" para q tenga en cuenta toda la ruta q le mnade y no solo el "/"

