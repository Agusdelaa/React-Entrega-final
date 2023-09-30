import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  Center ,
  Box,
  Flex,
  Button,
  Spacer

} from '@chakra-ui/react'

const ItemCount = ({agregarProd}) => {
  const [contador, setContador] = useState(1)


  return (
    <>
    <div className='center'>
    <Center >
      <Flex >
          <Box px="2" >
            <button className='md-2' onClick={() => contador < 10 ? setContador(contador + 1) : setContador(10)}>+</button>
          </Box>
          <Box px="2">
            <p className='md-2'>{contador}</p>
          </Box>
          <Box px="2">
            <button className='md-2' onClick={() =>  contador > 1 ? setContador(contador - 1) : setContador(1)}>-</button>
          </Box>
          <Box px="2">
          <Button variant='solid' colorScheme='blue' className='centerButton' onClick={() => agregarProd(contador) } >
                        Comprar
          </Button>
          </Box>       
      </Flex>
      </Center > 
      </div>
    </>
  

    
  )
}

export default ItemCount
