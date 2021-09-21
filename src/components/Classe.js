import React from 'react'

export default class Classe extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Primeiro Componente de Classe</h1>
        <p>Canal: {this.props.canal}</p>
        <p>Curso: {this.props.curso}</p>
      </div>
    )
  }
}
