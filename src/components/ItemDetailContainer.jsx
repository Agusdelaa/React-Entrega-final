
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Flex } from '@chakra-ui/react'
import { getFirestore, doc, getDoc,collection,getDocs,  } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Loader from './Loader'




const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productos, setProductos] = useState([])
  
  
  // useEffect(() => {
  //   const db = getFirestore()

  //   const oneItem = doc(db, "deportes", `${id}`)
  //   getDoc(oneItem).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       const docs = snapshot.data()
  //       setProductos(docs)
  //     }
  //   })
  // }, []);
  // console.log(productos)

    useEffect (()=> {
      const db = getFirestore()

      const itemsCollection = collection(db, "deportes")
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProductos(docs)
      })
  }, [])


  const productosFiltrados = productos.filter((p) => p.id == id)

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>

{
  productosFiltrados.length > 0 ?
    productosFiltrados.map(p => {
      return (
        <ItemDetail producto={p} key={p.id} />
      )
    })
    : <Loader />

  }
    </Flex>

  )
}


export default ItemDetailContainer

// <ItemDetail productos = {productos} id = {id}/>

// const obtenerProd = async () => {

//   const response = await fetch("https://fakestoreapi.com/products/")
//   //const response = await fetch('https://dummyjson.com/products/')
//   const data = await response.json()
//   return data

// }

// const [productos, setProductos] = useState([])

// useEffect(() => {
//   obtenerProd().then((productos) => setProductos(productos))
// }, [])

{/* {
          productos.map((prod)=> {
            return(
              <div key={prod.id} >
                  
              </div>
            )
          })
        }
*/}

// En el context se puede pasar todo lo q quieras, te arregla los pasos de informacion entre elemntos q no son (Padres E hijos)

// Agregar elemntos al carrito
// Eliminar
// Etc

// increment
// decrement
// onAdd

// {
//   productosFiltrados.length > 0 ?
//     productosFiltrados.map(p => {
//       return (
//         <ItemDetail producto={p} />
//       )
//     })
//     : <Loader />

// }

