import React from 'react'
import Dados from './Dados'

export default function Corpo() {
  const cnl=()=>{
    return 'CBF Cursos'
  }

  const yt='youtube.com/seila'
  const crs='React.js'
  const somar=(v1, v2)=>{
    return v1+v2
  }

  return(
      <section>
          <h2>Curso de React</h2>
          <p>Se inscreva em nosso canal</p>
          <p>Ative o sininho e clique no joinha</p>
          <Dados 
            canal={cnl}
            youtube={yt}
            curso={crs}
            somar={somar}
          />    
      </section>
  )
}