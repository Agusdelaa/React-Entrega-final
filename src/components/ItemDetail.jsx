import React, { useContext, useState } from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Flex, Box, Center, Spacer } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ producto }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState()


  const { cart } = useContext(CartContext)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setCantidadAgregada(quantity)

    const item = {
      id: producto.id,
      title: producto.title,
      price: producto.price

    }
    addItem(item, quantity)
    Toastify({
      text:`Agregaste: ${quantity} ${producto.title} a tu carrito` ,
      duration: 3000
      }).showToast();
  }

  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="" gap={4}>

        <Card maxW='sm' className='asd'>
          <Box>
            <CardBody className='asd'>
              <Image height="360px" width="360px" className='p-2'
                src={producto.image}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.title}</Heading>
                <Text>
                  {producto.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${producto.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='centerButton' >
              <ButtonGroup spacing='2' className='centerButton' >
                {cantidadAgregada > 0 ?
                  <>
                  <Link to={"/cart"}>
                    <Button>Finalizar compra</Button>
                  </Link>
                  <Link to={"/"}>
                  <Button>Seguir Comprando</Button>
                  </Link>
                  </>
                  : <ItemCount agregarProd={handleOnAdd} />
                }
              </ButtonGroup>
            </CardFooter>
          </Box>
        </Card>
      </Flex>
    </div>


  )
}

export default React.memo(ItemDetail)

