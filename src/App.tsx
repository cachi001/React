import { AppProducto } from './components/AppProducto/AppProducto';
import { ComponenteContador } from './components/ComponenteContador/ComponenteContador';
import { ComponenteFormulario } from './components/ComponenteFormulario/ComponenteFormulario';
import { CompomponenteUseEffect } from './components/ComponenteUseEffect/CompomponenteUseEffect';
import { MiPrimerComponente } from './components/MiPrimerComponente/MiPrimerComponente';

export const App = () => {
    return (
        <div style={{display: `flex`, flexDirection: `column`, gap: `1rem`}}>
            <MiPrimerComponente text='Creando Mi Primer Componente con PROPS' color='red' fontSize={3}/>
            <MiPrimerComponente text='Creando Mi Primer Componente con PROPS 2' color='blue'/>
            <ComponenteContador />
            <CompomponenteUseEffect />
            <ComponenteFormulario/>
            <AppProducto />
        </div>
    )
}
