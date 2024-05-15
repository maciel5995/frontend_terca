import React from 'react'
import { Link, useParams } from 'react-router-dom'

function EditProduct() {
    const { id } = useParams();

    return (
        <div>
            <p>Edição do produto { id } </p>
            <button><Link to={'/products'}>Voltar</Link></button>
           
        </div>
    )
}

export default EditProduct
