import {useState, createContext} from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
      if(!isInCart(item.id)) {
        cart.push({
          id: item.id,
          title: item.title,
          quantity: quantity,
          price: item.price
        })
        
      } else {
        const index = cart.findIndex( k => k.id == item.id)
        const actualQuantity = cart[index].quantity
        const nuevaQuantity = actualQuantity + quantity
        cart[index].quantity = nuevaQuantity ;
        //cart.find((p) => {p.id == item.id})   
      }
      setCart([...cart])
    }
    
    const removeItem = (itemId) => {
      const cartUpdated = cart.filter (prod => prod.id !== itemId)
      setCart(cartUpdated)
    }

    const clearCart = () => {
      setCart([])
    }

    const isInCart = (itemId) => {
      return cart.some(prod => prod.id === itemId)
    }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider


// const addItem = (item, quantity) => {
//   if(!isInCart(item.id)) {
//     setCart(prev => [...prev, {...item , quantity}])
//   } else {
//     alert(" Error")
//     //cart.find((p) => {p.id == item.id})   
//   }
// }