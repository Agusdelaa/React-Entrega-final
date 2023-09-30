import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <>
    <Flex>
    <Box pt='4'>
      <h1 className='logo'>🛒</h1>
    </Box>
      <Box pt='6' pr= "6">
      <p className='white number-cart'>{cart.length}</p>
      </Box>
    </Flex>
    </>
  )
}

export default CartWidget