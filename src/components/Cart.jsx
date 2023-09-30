import React, { useContext } from 'react'
import Form from './Form'
import { Button, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'



const Cart = () => {

  const { cart, clearCart, removeItem } = useContext(CartContext)

  return (
    <>
      
      {cart.length > 0 ?
        
        <>
        <table className='pepes'>
        <thead >
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Total</th>
                <th>Quitar Producto</th>
              </tr>
          </thead>
          </table>
        {cart.map((p) => {
          return(
            <table key={p.id} className='pepes'>
            <tbody >
              <tr>
                <td>{p.title}</td>
                <td>{p.quantity}</td>
                <td>$ {p.price}</td>
                <td>$ {p.price * p.quantity} </td>
                <td><button onClick={() => {removeItem(p.id)}}>🗑</button></td>
              </tr>
            </tbody>
          </table>
          )
        })}
        <div className='center pt-2 ' >
        <Button onClick={clearCart} className='btn-red' >
          🗑
        </Button>
        </div>
        
        <Form />
     </>
      : <div className='center' >
        <div className="card-error">
                <h3 className='fondo-blanco' > 🙁 El carrito está vacío. ¡Vuelva al catálogo y seleccione algún producto!</h3>
                <h4 className='fondo-blanco p-2' >🛒</h4>
        </div>`
        <div className='pt-2'>
          <Link to={`/`}>
            <Button colorScheme='teal' variant='solid'>
              Regresar A La Tienda
            </Button>
          </Link>
        </div>
      </div>
         }  
    </>
    
    )
}
      
export default Cart

//   cart.map((p)) => {
      //   return(
      //       <h1>hola</h1>
      // )
      // }