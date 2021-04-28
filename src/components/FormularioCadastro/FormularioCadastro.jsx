import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

const FormularioCadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome);
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
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch defaultChecked name="promocao" color="primary" />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch defaultChecked name="novidades" color="primary" />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                CADASTRAR
            </Button>
        </form>
    );
};

export default FormularioCadastro;
