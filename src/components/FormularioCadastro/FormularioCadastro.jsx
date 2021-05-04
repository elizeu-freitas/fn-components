import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormularioCadastro = ({ aoEnviar }) => {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        console.log(dadosColetados);
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
    ];

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados, ...dados });
        if (etapaAtual == formularios.length - 1) {
            aoEnviar(dadosColetados);
        } else {
            avancar();
        }
    }

    function avancar() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
};

export default FormularioCadastro;
