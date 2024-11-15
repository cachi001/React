import { useState } from "react";

export const ComponenteContador = () => {

    const [contador, setContador] = useState<number>(0);

    const handleIncrementarContador = () =>{
        setContador((prev) => prev + 1);
    }
    const handleDecrementarContador = () =>{
        if (contador > 0) {
            setContador((prev)=> prev-1);
        }
        
    }
    return (
        <div>
            <h2>Valor del Contador: {contador}</h2>
            <button onClick={handleIncrementarContador}>Incrementar Contador</button>
            <button onClick={handleDecrementarContador}>Decrementar Contador</button>
        </div>
    )
}
