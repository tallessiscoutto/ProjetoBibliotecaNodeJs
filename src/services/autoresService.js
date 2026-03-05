const autoresModel = require('../models/autoresModel');

const listarTodos = async () => {
    return await autoresModel.listarTodos();

};

const buscarPorId = async(cpf) => {
    const autor = awai autoresModel.buscarPorId(cpf);
    if (!autor){
        throw new Error('Autor não encontrado');
    }
    return autor;
}

const criar = async (autor) => {
    const autorExistente = await autoresModel.buscarPorId(autor.AutorCPF);
    if (autorExistente){
        throw new Error('Já existe um autor cadastrado com este cpf');
    }
    return autorExistente;
}