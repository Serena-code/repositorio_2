import React, { useState } from "react"

export function Item ({compra, borrarCompra}){
   
    const[completada, setCompletada] = useState(false)
    
    return(
        <div className = {completada? "containerCompra containerCompraCompletada" : "containerCompra"}>
            <h2 className = {completada? "completada" : "noCompletada"}>{compra.compra}</h2>
            <button id="completar" onClick={()=>setCompletada(!completada)}>{completada? "No completada":"Completada"}</button>        
            <button onClick={()=>borrarCompra(compra.id)} id="eliminar">Eliminar</button>
        </div>
       
    )
}
