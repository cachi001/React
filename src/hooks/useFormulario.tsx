import { ChangeEvent, useState } from "react";

interface ValoresFormulario {
    [key: string]: string | number;
}

export const useFormulario = <T extends ValoresFormulario>(valoresIniciales: T) => {
    const [valores, setValores] = useState(valoresIniciales);

    const handleCambio = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value, name } = event.target;
        setValores({
            ...valores,
            [name]: typeof valoresIniciales[name] === "number" ? parseFloat(value) || 0 : value,
        });
    };

    const resetFormulario = () => {
        setValores(valoresIniciales);
    };

    return {
        valores,
        handleCambio,
        resetFormulario,
    };
};
