function validaCpf(cpf) {
    if (cpf.length !== 11) {
        return {
            invalido: true,
            textoAjuda: 'CPF deve ter 11 dígitos',
        };
    } else {
        return {
            invalido: false,
            textoAjuda: '',
        };
    }
}

function validaSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return {
            invalido: true,
            textoAjuda: 'Senha deve ter entre 4 e 72 dígitos',
        };
    } else {
        return {
            invalido: false,
            textoAjuda: '',
        };
    }
}

export { validaCpf, validaSenha };
