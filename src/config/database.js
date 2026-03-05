const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


pool.getConnection()
    .then(connection =>{
        console.log('Sucesso: Conexão com o banco de dados MySQL estabelecida!');
        connection.release();
    })
    .catch(error =>{
        console.error('Erro: Falha ao conectar ao Banco de Dados.', error);
    });
module.exports = pool;