import React, { createContext, useContext, useState } from 'react';

//criando contexto para fornecer aos outros componentes 
const DadosUsuario = createContext();


// (Provider)
export function UsuarioProvider({ children }) {
    //Definindo dados do usuario para fornecer aos componentes
  const [usuario, setUsuario] = useState({
    
    id: children.id,
    razaoSocial: children.razaoSocial,
    cnpj: children.cnpj,
    telefone: children.telefone,
    email: children.email,
    setor: children.setor,
    qtdFuncionarios: children.qtdFuncionarios,
    assinanteNewsletter: children.assinanteNewsletter,

  });

    // atualiza os dados do usuario
    const atualizarUsuario = (novoUsuario) => {
      console.log('ENTREI NO ATUALIZAR USUARIO');
      console.log(novoUsuario)
    
      setUsuario(novoUsuario);

      };
    

  //Criando os dados para fornecer aos componentes
  return (
    <DadosUsuario.Provider value={{ usuario, atualizarUsuario }}>
      {children}
    </DadosUsuario.Provider>
  );
}

//criando hook useUsuario para que os componentes acessem os dados
export function useUsuario() {
  const context = useContext(DadosUsuario);

  if (context === undefined) {
    throw new Error('useUsuario não pode ser usado fora do seu contexto');
  }
  return context;
}
