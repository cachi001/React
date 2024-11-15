
interface MiPrimerComponente {
    text: string,
    color: string,
    fontSize?: number
}

export const MiPrimerComponente: React.FC<MiPrimerComponente> = ({text, color,fontSize}) => {
    return (
        <div style={{color: `${color}`, fontSize: `${fontSize || 2}rem` }}>
            <p>{text}</p>
        </div>
    )
}
