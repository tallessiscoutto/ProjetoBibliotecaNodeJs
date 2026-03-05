const autoresService = require('../services/autoresService');
const listarTodos = async(req, res) => {
    try {
        const autores = await autoresService.listarTodos();
        res.status(200).json(autores);
    } catch(error){
        res.status(500).json({ message: 'Erro ao listar autores', error: error.message});
    }
};

const buscarPorId = async(req, res) =>{
    try{
        const{cpf} = req.params;
        const autor = await autoresService.buscarPorId(cpf);
        res.status(200).json(autor);
    } catch(error){
        res.status(404).json({ message: error.message});
    }
};

const criar = async(res,req) => {
    try{
        const{AutorCPF,AutorNome,AutorNacionalidade,Id_Cidade};
    }
}
