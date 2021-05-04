import React from 'react';

const ValidacoesCadastro = React.createContext({
    cpf: semValidacao,
    senha: semValidacao,
});

function semValidacao(dados) {
    console.log(dados);
    return { invlalido: false, textoAjuda: '' };
}

export default ValidacoesCadastro;
