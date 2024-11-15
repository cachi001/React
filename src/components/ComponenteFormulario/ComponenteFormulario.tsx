import { ChangeEvent, useState } from "react";
import { useFormulario } from "../../hooks/useFormulario";


export const ComponenteFormulario = () => {

    const {valores, handleCambio, resetFormulario} = useFormulario({
        email: "",
        nombre: "",
        edad: 0
    })

    const {email, nombre, edad} = valores;

    const handleEnviarFormulario = () =>{
        console.log(valores)
    }
    const handleResetFormulario = () =>{
        resetFormulario();
    }
    return (
        <div>
            <div>
                <h2>Formulario</h2>
            </div>
            <div>
                <div style={{display: `flex`, flexDirection: `column`, gap: `1rem`}}>
                    <input value={email} name="email" type="email" placeholder="Correo" onChange={handleCambio}/>
                    <input value={nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleCambio}/>
                    <input value={edad} name="edad" type="number" placeholder="Edad" onChange={handleCambio}/>
                </div>
                <div style={{display: `flex`, gap: `0.6rem`, marginTop: `1rem`}}>
                    <button onClick={handleEnviarFormulario}>Enviar</button>
                    <button onClick={handleResetFormulario}>Resetear</button>
                </div>
            </div>
        </div>

    )
}
