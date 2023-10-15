import api from "./Api.js"; // importando o arquivo com acesso a api Axios
import { useState } from "react"; 

function App() {

  const [objetos, setObjetos] = useState([]);

  //criando função que faz a requisição
  function listar() {
    api.get()
      .then((res) => {
        // se for realizada a requisição.

        //mostrar toda a resposta
        console.log(res);

        //mostrar status (.status)
        console.log(res.status);

        //mostrar só os dados da resposta(.data)
        console.log(res.data);
      })
      .catch((erroOcorrido) => {
        // se houver algum erro
        console.log(erroOcorrido);
      })

  }

  return (
    <div className="App">
      <h1>HELLO WORLD</h1>

      <button onClick={listar}>Listar</button>
      
      { //vai mostrar cada objeto que vier como resposta da requisição(nao precisa fazer aquele for como faziamos)
        objetos.map(objeto => (
          <div key={objeto.id}>
            <h1>{objeto.nome}</h1>
          </div>
        ))
      }

    </div>
  );
}

export default App;
