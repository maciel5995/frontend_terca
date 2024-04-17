
import './App.css'
import ConditionalComponent1 from './components/ConditionalComponent1';
import ConditionalComponent2 from './components/ConditionalComponent2';
import GenericComponent from './components/GenericComponent';
import MyButtonComponent from './components/MyButtonComponent';
import PostComponent from './components/PostComponent';
import ProductComponent from './components/ProductComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  let component;
  const condition = false;
  
  if(condition) {
    component = <ConditionalComponent1 />
  } else {
    component = <ConditionalComponent2 />
  }

  const productsList = [
    {id: 1, name: 'Laranja'},
    {id: 2, name: 'Maçã'},
    {id: 3, name: 'Uva'},
  ]

  const postList = [
    {id: 1, title: 'Titulo 1', description: 'Descrição do Post 1'},
    {id: 2, title: 'Titulo 2', description: 'Descrição do Post 2'},
    {id: 3, title: 'Titulo 3', description: 'Descrição do Post 3'}
  ]

  return (
    <>
      <div>Componente principal</div>
      {component}

      {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}

      {/** renderização de lista */}
      <ul>
        {productsList.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
      <ol>
        {productsList.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ol>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <ProductComponent name="Laranja" category="Alimento" />
        <ProductComponent name="Martelo" category="Ferramenta" />
      </div>

      <div>
        {postList.map((post) => (
          <PostComponent key={post.id} title={post.title} description={post.description} />
        ))}
      </div>

      <div>
        <GenericComponent>
          <p>Conteúdo passado pela primeira chamada</p>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
          <hr />
        </GenericComponent>
      </div>

      <div>
        <GenericComponent>
          <h4>Conteúdo passado pela segunda chamada</h4>
          <ol>
            <li>item a</li>
            <li>item b</li>
            <li>item c</li>
          </ol>
          <hr />
        </GenericComponent>
      </div>
      <div>
        <MyButtonComponent />
      </div>

      <div>
        <UseStateComponent />
      </div>
    </>
  )
}

export default App
