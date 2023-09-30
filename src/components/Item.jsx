import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Flex, Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

  return (
    <div key={producto.id}>
      <Flex>
      <Card width='400px' className='asd'>
        <Box>
        <CardBody className='ce'>
          <Image height="360px" width="360px" className='p-2'
            src= {producto.image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' className='center'>{producto.title}</Heading>
            <Text>      
            </Text>
            <Text color='blue.600' fontSize='2xl'>
            </Text>
          </Stack>
        </CardBody>
        </Box>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Center>
              <Link to = {`/item/${producto.id}`}>
            <Button variant='solid' colorScheme='blue' className='center' >
              Detalles
            </Button>
            </Link>
            </Center> 
          </ButtonGroup>
        </CardFooter>
      </Card>
      </Flex>
    </div>
  )
}

export default Item