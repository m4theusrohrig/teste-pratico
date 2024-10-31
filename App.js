import React, { useState } from 'react';
import FormularioAluno from './components/FormularioAluno/FormularioAluno';
import TabelaResultados from './components/TabelaResultados/TabelaResultados';
import './App.css'

function App() {
  const [alunos, setAlunos] = useState([]);

  const adicionarAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  return (
    <div className="container">
      <h1>Sistema de Notas e Frequência</h1>
      <FormularioAluno onAdd={adicionarAluno} />
      <TabelaResultados alunos={alunos} />
    </div>
  );
}

export default App;
