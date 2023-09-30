import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
    
    return (
        <div className='center' > 
            <Spinner 

                thickness='5px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    )
}

export default Loader