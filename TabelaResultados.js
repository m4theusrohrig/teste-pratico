import React from 'react';
import { calcularMediaAluno, calcularMediasTurma, alunosAcimaMedia, alunosComBaixaFrequencia } from '../utils';
import './TabelaResultados.css';

function TabelaResultados({ alunos }) {
  if (alunos.length === 0) {
    return <h3>Nenhum aluno cadastrado.</h3>;
  }

  const mediasTurma = calcularMediasTurma(alunos);

  return (
    <div>
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Média</th>
            <th>Frequência (%)</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={index}>
              <td>{aluno.nome}</td>
              <td>{calcularMediaAluno(aluno.notas).toFixed(2)}</td>
              <td>{aluno.frequencia}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Média da Turma por Disciplina</h3>
      <ul>
        {mediasTurma.map((media, index) => (
          <li key={index}>
            Disciplina {index + 1}: {isNaN(media) ? 'N/A' : media.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Alunos com Média Acima da Média da Turma</h3>
      <ul>
        {alunosAcimaMedia(alunos, mediasTurma).map((aluno, index) => (
          <li key={index}>{aluno.nome}</li>
        ))}
      </ul>

      <h3>Alunos com Frequência Abaixo de 75%</h3>
      <ul>
        {alunosComBaixaFrequencia(alunos).map((aluno, index) => (
          <li key={index}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default TabelaResultados;
