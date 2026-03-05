const express = require('express');
const cors = require('cors');

//Importação das rotas
const authRoutes = require(`./routes/authRoutes`);
const usuariosRoutes = require(`./routes/usuariosRoutes`);

const verificarToken = require(`./middlewares/autenticacaoMiddleware`);

const app = express();

//Middlewares
app.use(cors())
app.use(express.json());


//Rota de teste
app.get('/',(req, res) =>
{
    res.send('API Biblioteca Escolar V1 rodando!')
});

//Rotas publicas(Não exige token)
app.use('/api/auth', authRoutes); //rota de login
app.use('/api/usuarios', usuariosRoutes);// <-- Rota de cadastro liberada ao publico

//Definição de Rotas da API
// Rotas Protegidas (O middleware 'verificarToken' Impede acesso sem login)
app.use('/api/cidades',verificarToken, cidadesRoutes);