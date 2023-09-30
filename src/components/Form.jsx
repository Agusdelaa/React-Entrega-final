import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { Button, Flex } from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'

// Importar El context

const Form = () => {

    const {cart} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)
        console.log("Información enviada")

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }
   

    const confirmarCompra = () => {
        Swal.fire({
            title: '¿Estas seguro de confirmar la compra?',
            text: "¡No hay Devoluciones!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                timer: 3000,
                title: 'Comprado!',
                text: '¡Gracias,Tu compra ha sido Confirmada!',
                icon: 'info',      
            })
            }
          })
         
    }
    const order = {
        buyer: {
            nombre, email
        },
        items: cart.map(({id, title, price, quantity})=> ({
           id, title, price,quantity
        }))
    }
    // const orden = "orden" + (orden.length + 1)
    const ordersCollection = collection(db, `orden`) //${orden}

    return (

        <>
            <form className="form-register" onSubmit={handleSubmit}>
                <h4 className='form-title'>Formulario Registro</h4>
                <input className="controls" type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input className="controls" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        
                    {nombre!== "" & email!== "" ?
                     <div className='p-button'>
                     <Button type='submit' className='btn-green' gap={4} onClick={confirmarCompra} >
                     Confirmar Compra
                    </Button>
                    </div>
                     : <h2 className='background-form pb-2'>¡Completá formulario para confirmar la compra!</h2>
                    }
                <h3 className="controls">Id de tu compra : {orderId}</h3>
            </form>
        </>

    )
}
export default Form
{/* <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                
            </form> */}

{/*  */ }