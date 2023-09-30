import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <Flex>
          <Box p='6'>
            <Link to={"/"}>
              <h2 className='white'>Deportes-Store</h2>
            </Link>
          </Box>
          <Spacer />
          <Box p='6'>
            <div className='black'>
              <Menu>
                <MenuButton >
                  Secciones
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={`category/${"Vestimenta Hombre"}`}>
                      Ropa Hombre
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`category/${"Calzado"}`}>
                      Calzado
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`category/${"Vestimenta Mujer"}`}>
                      Ropa Mujer
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/`}>
                      Todos
                    </Link> 
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </Box>
          <Spacer />

          <Box>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </div>
    </>
  )
}

export default NavBar