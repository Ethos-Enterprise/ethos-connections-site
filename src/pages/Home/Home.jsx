import React from 'react'

//importar components
import Header from '../../components/Header/Institucional/Header'
import Oferecemos from './Sections/Oferecemos/Oferecemos'
import Planos from './Sections/Planos/Planos'

import './Home.css'

//importar rotas

const Home = () => {
  return (
    <>
    <Header />
    
    <Oferecemos />
    <Planos/>
    </>
  )
}

export default Home