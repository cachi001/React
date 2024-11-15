import { Button, Form} from "react-bootstrap"
import { useFormulario } from "../../../hooks/useFormulario";

interface FormularioProducto {
    handleAgregarProducto: Function;
}
export const FormularioProducto: React.FC<FormularioProducto> = ({handleAgregarProducto}) => {

    const {valores, handleCambio, resetFormulario} = useFormulario({
        nombre: '',
        imagen: '',
        precio: ''
    })

    const handleEnviarFormulario = () =>{
        handleAgregarProducto(valores);
        resetFormulario();
        console.log(valores)
    }
    const {nombre, imagen, precio} = valores;
    return (
        <Form className="p-4 border rounded m-3">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Ingrese nombre del Producto"
                    value={nombre}
                    onChange={handleCambio}
                />
            </Form.Group>
            <Form.Group controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="Ingrese imagen del Producto"
                    value={imagen}
                    onChange={handleCambio}
                />
            </Form.Group>
            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="precio"
                    placeholder="Ingrese precio del Producto"
                    value={precio}
                    onChange={handleCambio}
                />
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
                <Button onClick={handleEnviarFormulario} variant="primary">Enviar Producto</Button>
            </div>
        </Form>
    )
}
