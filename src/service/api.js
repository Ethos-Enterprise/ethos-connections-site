
//importando a biblioteca que faz requisições http (precisa de menos coisa do que comparado ao fetch)
import axios from "axios";

//criando instancia do axios
//agora qualquer requisição a api é feito como api.Verbo() 
const api = axios.create({
    baseURL: 'http://44.201.194.10' //colocar o link da api que tem caminho para todas (a Gateway)
    });

//exportamos para poder acessar em todas as paginas do projeto
export default api;