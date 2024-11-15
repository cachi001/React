import { useState, useEffect } from "react";

export const CompomponenteUseEffect = () => {
    const [estado, setEstado] = useState<boolean>(false);

    useEffect(()=>{
        console.log("Componente Montado");

        return () => {
            console.log("Componente Desmontado")
        }
    }, [])
    useEffect(()=>{
        console.log(estado);
    },[estado])
    return (
        <div>
            <p>{estado ? "Es True" : "Es False"} </p>
            <button onClick={()=> setEstado(!estado)}>
                Cambiar Estado
            </button>
        </div>
    )
}
