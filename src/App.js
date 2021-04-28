import './App.css';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { FormularioCadastro } from './components/FormularioCadastro';

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
            <FormularioCadastro />
        </Container>
    );
}

export default App;
