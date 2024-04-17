import React from 'react'

// function ProductComponent(props) {
function ProductComponent({ name, category }) {
    return (
        <div>
            <p>Nome: {name} - Categoria: {category}</p>
            {/* <p>Nome: {props.name} - Categoria: {props.category}</p> */}
        </div>
    )
}

export default ProductComponent
