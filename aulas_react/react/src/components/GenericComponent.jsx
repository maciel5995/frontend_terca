import React from 'react'

function GenericComponent({children}) {
    return (
        <div>
            <h3>Componente genérico</h3>
            <p>Conteúdo variável</p>
            {children}
        </div>
    )
}

export default GenericComponent
