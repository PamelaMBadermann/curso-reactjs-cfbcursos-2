import React from 'react';
import Caixa from './components/Caixa'
import Canal from './components/Canal'

export default function App() {

  return (
    <>
      <Caixa site="www.cfbcursos.com.br">
        <Canal/>
        <p>Curso de React</p>
      </Caixa>
    </>
  );
}

