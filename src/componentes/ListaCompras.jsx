import React from "react";
import { useState } from "react";


export function ListaCompras({handleChange,añadirCompra, compra}){
    const [count, setCount] = useState(1)
    
    const restar = (e) =>{
        e.preventDefault()
        setCount(count-1)
    }
    const sumar = (e) =>{
        e.preventDefault()
        setCount(count+1)
    }
    return(
        <div className="listaCompras">
            <form onSubmit={añadirCompra}>
                <input type="text" value={compra} name="producto" placeholder="Ingrese producto" onChange={handleChange}></input>
                <input value ={count} name="cantidad"></input>
                <button type="submit" onClick={()=>setCount(1)}>Agregar</button>
            </form>
            <div>
                <button disabled={count === 1} onClick={restar}>
                    -
                </button>
                
                <button onClick={sumar}>
                    +
                </button>
            </div>
        </div>
    )
    
    
}