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
                <div class="form">
                    <input type="text" value={compra} name="producto" placeholder="Ingrese producto" onChange={handleChange}></input>
                    <div>
                        <button disabled={count === 1} onClick={restar}>
                            -
                        </button>
                        <input class="cantidad" value ={count} name="cantidad"></input>
                        <button onClick={sumar}>
                            +
                        </button>
                    </div>
                </div>
                
                <button type="submit" onClick={()=>setCount(1)}>Agregar</button>
            </form>
            
        </div>
    )
    
    
}