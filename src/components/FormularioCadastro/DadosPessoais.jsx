import React, { useContext, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosPessoais = ({ aoEnviar }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, podeEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (podeEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                name="cpf"
                margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                error={erros.cpf.invalido}
                helperText={erros.cpf.textoAjuda}
                onBlur={validarCampos}
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        name="promocao"
                        color="primary"
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        name="novidades"
                        color="primary"
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                PRÓXIMO
            </Button>
        </form>
    );
};

export default DadosPessoais;
