import React from "react";


export function ListaCompras({handleChange,añadirCompra, compra}){

   
    return(
        <div className="listaCompras">
            <form onSubmit={añadirCompra}>
                <input type="text" value={compra} placeholder="Ingrese producto" onChange={handleChange}></input>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
    
    
}