import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosUsuario = ({ aoEnviar }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, podeEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (podeEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}
        >
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                required
                fullWidth
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                name="senha"
                value={senha}
                error={erros.senha.invalido}
                helperText={erros.senha.textoAjuda}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                PRÓXIMO
            </Button>
        </form>
    );
};

export default DadosUsuario;
