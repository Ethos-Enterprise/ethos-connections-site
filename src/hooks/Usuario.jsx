import React, { createContext, useContext, useState, useEffect } from 'react';

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  // obtendo os dados do usuário do localStorage
  
  const usuarioDadosArmazenados = sessionStorage.getItem('usuarioDados');
  const usuarioDadosIniciais = usuarioDadosArmazenados ? JSON.parse(usuarioDadosArmazenados) : {
    id: '',
    razaoSocial: '',
    cnpj: '',
    telefone: '',
    email: '',
    setor: '',
    qtdFuncionarios: 0,
    assinanteNewsletter: false,
    plano: '',
    idPrestadora: '',
    idPortfolio: '',
  };

  //  dados do usuário p fornecer aos componentes
  const [usuario, setUsuario] = useState(usuarioDadosIniciais);

  // Atualiza dados do usuário
  const atualizarUsuario = (novoUsuario) => {
    console.log('ENTREI NO ATUALIZAR USUARIO');
    console.log(novoUsuario);

    setUsuario(novoUsuario);
  };

  // Armazenando os dados do usuário no localStorage sempre que eles mudam
  useEffect(() => {
    sessionStorage.setItem('usuarioDados', JSON.stringify(usuario));
  }, [usuario]);

  // Criando os dados para fornecer aos componentes
  return (
    <UsuarioContext.Provider value={{ usuario, atualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// Criando hook useUsuario para que os componentes acessem os dados
export function useUsuario() {
  const context = useContext(UsuarioContext);

  if (context === undefined) {
    throw new Error('useUsuario não pode ser usado fora do seu contexto');
  }
  return context;
}
