import React, { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function podeEnviar() {
        for (let campo in erros) {
            if (erros[campo].invalido) {
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, podeEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { invalido: false, textoAjuda: '' };
    }
    return estadoInicial;
}

export default useErros;
