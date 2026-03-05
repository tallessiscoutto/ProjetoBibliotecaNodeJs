const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_super_segura_biblioteca_v1';

const verificarToken = (req, res, next) =>{
    //O token vem no header: "Authorizantion: Bearer <token>"
    const cabecalhoAuth = req.headers('authorization');
    const token = cabecalhoAuth && cabecalhoAuth.split('')[1]; // Pega só a parte do hash
    if (!token){
        return res.status(401).json({message: 'Acesso negado. Token'})
    }
    try{
        const verificado = jwt.verify(token, JWT_SECRET);
        req.usuario = verificado; //Salva todos os dados do usuario na requisição
        next(); //Pode passar, está autorizado
    } catch (erro){
        res.status(403).json({ message: 'Token inválido ou expirado. '});
    }
};

module.exports = verificarToken;