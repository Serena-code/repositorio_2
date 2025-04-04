import { ListaCompras} from "./ListaCompras";
import { Item } from "./Item";
import { useState } from "react";

export function Funciones (){
  const [compra, setCompra] = useState('')
  const [compras, setCompras] = useState([])


  const handleChange = (e) => {
    setCompra(e.target.value)
  }

  const añadirCompra = (e) =>{
        e.preventDefault()
        if(compra.trim() === ''){
            alert('Debes agregar algo')
            return
        }

        const nuevaCompra = {
            id: Date.now(),
            compra,
            completada: false
        }
    
        const totalCompras = [nuevaCompra, ... compras]
        setCompras(totalCompras)
        setCompra('')
    }
  const borrarCompra = (id) =>{
    const compraActualizada = compras.filter(compra =>{
      return compra.id != id
    })
    setCompras(compraActualizada)
  }

  return (
    <div className="Funciones"> 
      <ListaCompras
        handleChange = {handleChange}
        añadirCompra = {añadirCompra}
        compra = {compra}
      >
      </ListaCompras>
      {compras.length>1 && (
        <button onClick={()=>setCompras([])}>Vaciar</button>
      )}
      {compras.map(compra => (
        <Item key ={compra.id}
        id = {compra.id}
        compra = {compra}
        borrarCompra = {borrarCompra}
        ></Item>
      ))}
      
    </div>
  )

}