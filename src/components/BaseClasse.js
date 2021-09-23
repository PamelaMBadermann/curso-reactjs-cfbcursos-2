import React from 'react';

export default class BaseClasse extends React.Component{
  constructor(props) {
    // para permitir o uso de props
    super(props)

    // state
    this.state={
      canal: 'CFB Cursos',
      curso: 'React',
      ativo: true,
      nome: this.props.nomeAluno
    }
    this.status=this.props.status

     // função para manipular state
    ativarDesativar() {
      this.setState(
        state=>({
          ativo= !state.ativo
        })
      )
    }

    // bindagem:
    let ad=ativarDesativar.bind(this)
    // Instruções de construtor
  }

  componentDidMount() {
    console.log('O componentefoi criado')
  }

  componentDidUpdate() {
    console.log('O componentefoi atualizado')
  }

  componentWillUnmount() {
    console.log('O componentefoi atualizado')
  }

  render() {
    return(
      <>
        <h1>Componente de Classe</h1>
        {/* chamada da função com bind */}
        <button onClick={this.ad}>Ativar / Desativar</button>

        {/* chamada de função sem bind */}
        <button onClick={()=>this.AtivarDesativar}>Ativar / Desativar</button>
      </>
    )
  }
}

// assistir de novo
// https://www.youtube.com/watch?v=zRttpd14ci4&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=27&ab_channel=CFBCursos 