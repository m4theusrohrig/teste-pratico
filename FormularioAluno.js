import React, { useState } from 'react';
import './FormularioAluno.css'

function FormularioAluno({ onAdd }) {
    const [form, setForm] = useState({
        nome:'',
        notas: Array(5).fill(0),
        frequencia: 0
    });

    const handleInputChange = (e, index) => {
        if (index !== undefined) {
            const novasNotas = [...form.notas];
            novasNotas[index] = parseFloat(e.target.value);
            setForm({ ...form, notas: novasNotas});
        }   else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const aluno = { ...form, frequencia: parseFloat(form.frequencia) };
        onAdd(aluno);
        setForm({ nome: '', notas: Array(5).fill(0), frequencia: 0 });
      };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                placeholder="Nome do Aluno"
                value={form.nome}
                onChange={handleInputChange}
                required
            />
            {form.notas.map((_, index) => (
                <input
                    key={index}
                    type="number"
                    min="0"
                    max="10"
                    placeholder={`Nota ${index +1}`}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                />
            ))}
            <input
                type="number"
                name="frequencia"
                min="0"
                max="100"
                placeholder="Frequência (%)"
                value={form.frequencia}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Adicionar Aluno</button>
        </form>
    );
}

export default FormularioAluno