const pool = require('../config/database');

const listarTodos = async() =>{
    const query = `SELECT a.AutorCPF, a.AutorNome, A.AutorNacionalidade, A.Id_Cidade, c.CidadeNome, c.CidadeUF FROM Autores a
                    INNER JOIN Cidades c ON a.Id_Cidade = c.CidadeCodIbge ORDER BY a.AutorNome ASC`;
                    const {rows} = await pool.query(query);
                    return rows;
};

const buscarPorId = async(cpf) => {
    const query = `SELECT a.AutorCPF, a.AutorNome, A.AutorNacionalidade, A.Id_Cidade, c.CidadeNome, c.CidadeUF FROM Autores a
                    INNER JOIN Cidades c ON a.Id_Cidade = c.CidadeCodIbge WHERE a.AutorCPF = ?`;
                    const [rows] = await pool.query(query,[cpf]);
                    return rows[0];
};


const criar = async (autor) => {
    const {AutorCpf, AutorNome,AutorNacionalidade, Id_Cidade} = autor;
    const query = `INSERT INTO Autores (AutorCPF, AutorNome,AutorNacionalidade, Id_Cidade) VALUES (?,?,?,?)`;
    const[result] = await pool.query(query, [AutorCpf, AutorNome,AutorNacionalidade, Id_Cidade]);
    return result;
};

const excluir = async(cpf) => {
    const query = `DELETE FROM Autores WHERE AutorCPF = ?`;
    const [result] = await pool.query(query,[cpf]);
    return result;
}

module.exports = listarTodos,buscarPorId,criar,excluir;
