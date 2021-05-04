import './App.css';
import 'fontsource-roboto';
import { FormularioCadastro } from './components/FormularioCadastro';
import { validaCpf, validaSenha } from './models/cadastro';
import { Container, Typography } from '@material-ui/core';
import ValidacoesCadastro from './contexts/validacoesCadastro';

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1">
                Formulário de Cadastro
            </Typography>
            <ValidacoesCadastro.Provider
                value={{ cpf: validaCpf, senha: validaSenha }}
            >
                <FormularioCadastro aoEnviar={aoEnviarForm} />
            </ValidacoesCadastro.Provider>
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log('FORM ENVIADO!', dados);
}

export default App;
