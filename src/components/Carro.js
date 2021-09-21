import React from 'react'

export default class Carro extends React.Component{
  constructor(props) {
    super(props)
    this.modelo='HRV'
    this.state={
      ligado: false,
      velAtual: 0,
    }
  }

  ligarDesligar() {
    // this.state.ligado = true - não renderiza a tela
    // this.setState({ligado:!this.state.ligado})

    this.setState(
      (state)=>(
        {ligado: !state.ligado}
      )
    )
  }

  acelerar(){
    this.setState(
      (state,props)=>(
        {velAtual:state.velAtual + props.fator}
      )
    )
  }

  /*
 // método tradicional:
  acelerar(){
    this.setState(
      (state,props)=>(
        {velAtual:this.state.velAtual + this.props.fator}
      )
    )
  }
  */

  render(){
    return(
      <div>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
        <p>Vel. Atual: {this.state.velAtual}</p>
        <button onClick={()=>this.ligarDesligar()}>
          {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
        </button>
        <button onClick={()=>this.acelerar()}>
          Acelerar
        </button>
      </div>
    )
  }
}