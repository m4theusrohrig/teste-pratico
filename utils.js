export const calcularMediaAluno = (notas) =>
    notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
  
export const calcularMediasTurma = (alunos) => {
  const totalDisciplinas = 5; 
  const somaNotas = Array(totalDisciplinas).fill(0);
  const contagem = Array(totalDisciplinas).fill(0);

  alunos.forEach(({ notas }) => {
    notas.forEach((nota, index) => {
      if (!isNaN(nota)) { 
        somaNotas[index] += nota;
        contagem[index] += 1; 
      }
    });
  });

  return somaNotas.map((soma, index) => {
    return contagem[index] > 0 ? soma / contagem[index] : NaN; 
  });
};
  
  export const alunosAcimaMedia = (alunos, mediasTurma) => {
    const mediaGeral = mediasTurma.reduce((acc, m) => acc + m, 0) / mediasTurma.length;
    return alunos.filter((aluno) => calcularMediaAluno(aluno.notas) > mediaGeral);
  };
  
  export const alunosComBaixaFrequencia = (alunos) =>
    alunos.filter((aluno) => aluno.frequencia < 75);
  