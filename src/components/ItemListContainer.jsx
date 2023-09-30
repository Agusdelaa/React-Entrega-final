import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import {collection, getDocs, getFirestore} from 'firebase/firestore'




 

  const ItemListContainer = ({ greeting }) => {
    const { category } = useParams()
    const [productos, setProductos] = useState([])
   
    useEffect(() => {

      const db = getFirestore()

      const itemsCollection = collection(db, "deportes")
      getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => doc.data())
          setProductos(docs)
      })
    }, [])
    

  const productosFiltradosCat = productos.filter((producto) => producto.category === category)
  return (
    <>
      <h1 className='center pt-2 white md-2' >Catálogo</h1>
      {
        productos.length === 0 ? <Loader/> 
        :category ? <ItemList productos={productosFiltradosCat} />
                 : <ItemList productos={productos} />       
      }
    </>
  )
}

export default ItemListContainer







