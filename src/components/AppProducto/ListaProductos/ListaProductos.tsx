import { Card} from "react-bootstrap"
import { ItemProducto } from "../AppProducto";

interface ListaProductosProps {
    listaItems: ItemProducto[];
}
export const ListaProductos: React.FC<ListaProductosProps> = ({listaItems}) => {
    return (
        <div className="p-1 m-3 border rounded d-grid gap-2"
        style={{
            gridTemplateColumns: "repeat(2,1fr)",
            placeItems: "center",
        }}>
            {listaItems.map((el, i) => (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={el.imagen} />
                        <Card.Body>
                            <Card.Title>{el.nombre}</Card.Title>
                            <Card.Text>Precio ${el.precio} </Card.Text>
                        </Card.Body>
                    </Card>
            ))}
        </div>
    )
}
