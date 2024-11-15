import { useState } from "react"
import { FormularioProducto } from "./FormularioProducto/FormularioProducto"
import { Header } from "./header/Header"
import { ListaProductos } from "./ListaProductos/ListaProductos"

export interface ItemProducto {
    nombre: string,
    imagen: string,
    precio: number
}
export const AppProducto = () => {
    const [productos, setProductos] = useState<ItemProducto[]>([])
    
    const handleAgregarProducto = (nuevoProducto: ItemProducto) => {
        setProductos((prev) => [...prev, nuevoProducto]);
    }
    return (
        <div>
            <Header/>
            <h2 className="text-center">Formulario</h2>
            <FormularioProducto handleAgregarProducto={handleAgregarProducto}/>
            <h2 className="text-center">Productos</h2>
            {productos.length > 0 ? (<ListaProductos listaItems={productos}/>) 
            : 
            (<h3 className="text-center fs-5 m-5">No hay Productos</h3>)
            }
        </div>
    )
}
