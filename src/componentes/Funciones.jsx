import { ListaCompras} from "./ListaCompras";
import { Item } from "./Item";
import { useState } from "react";


export function Funciones (){
  const [compra, setCompra] = useState('')
  const [compras, setCompras] = useState([])
  const [edit, setEdit] = useState(false)

  const handleChange = (e) => {
    setCompra(e.target.value) //funcion que permite ver en el momento lo que estamos escribiendo
  }

  const añadirCompra = (e) =>{
    e.preventDefault()
    if(compra.trim() === ''){
      alert('Debes agregar algo')
      return
    }

    const formData = new FormData(e.target)//obtiene toda la informacion del formulario
    const nuevaCompra = {
      id: Date.now(), //funcion que retorna fecha y hora de creación
      compra: formData.get('producto'),
      completada: false,
      cantidad: formData.get('cantidad')
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
    <div className="funciones"> 
      <ListaCompras
        handleChange = {handleChange}
        añadirCompra = {añadirCompra}
        compra = {compra}
      >
      </ListaCompras>
      {compras.length>1 && ( //Boton vaciar se activa colo cuando hay mas de 2 tareas
        <button onClick={()=>setCompras([])}>Vaciar</button>
      )}
      <div>
        {compras.map(compra => (
          <div class="item">
            <Item  key ={compra.id}
            id = {compra.id}
            compra = {compra}
            borrarCompra = {borrarCompra}
            compras = {compras}
            setCompras={setCompras}
            ></Item>
          </div>
        ))}
      </div>
      
    </div>
  )

}