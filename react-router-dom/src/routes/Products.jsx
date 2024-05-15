import React from 'react'
import { Link } from 'react-router-dom'
const products = [
    {id: 1, name: 'Uva', price: 10},
    {id: 2, name: 'Mamão', price: 9},
    {id: 3, name: 'Melancia', price: 15}
]
function Products() {
    return (
        <div>
            <h3>Lista de produtos</h3>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'none'}}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={`/products/${prod.id}/info`}>Detalhes</Link></li>
                    <li><Link to={`/products/${prod.id}`}>Editar</Link></li>
                    <li><hr /></li>
                </ul>
            ))}
        </div>
    )
}

export default Products
