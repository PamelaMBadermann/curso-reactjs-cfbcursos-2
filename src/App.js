import React, {useState} from 'react';
import Globais from './components/Globais'
import Info from './components/Info'


export default function App() {

  const [resumo, setResumo] = useState(Globais.resumo)

  const gravarResumo = () => {
    Globais.resumo = resumo;
  }

  const verResumo=() => {
    alert(Globais.resumo)
  }

  return (
    <>
      <Info/>
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr/>
      <input type='text' size='100' value={resumo} onChange={(e)=>setResumo(e.target.value)} />
      <br/>
      <button onClick={()=>gravarResumo()}>Gravar resumo</button>
      <button onClick={()=>verResumo()}>Ver resumo</button>
    </>
  );
}

// https://www.youtube.com/watch?v=0gCEIt-WNQ0&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=28&ab_channel=CFBCursos
// 9:43