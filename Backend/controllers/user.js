import { db } from "../db.js";

// Função para Listar Usuarios
export const getUsers = (req, res) => {
    const list = 'SELECT * FROM usuarios';

    db.query(list, (err, results) => {
        if (err) {
            console.error('[Erro no Banco]:', err.message);
            return res.status(500).json({ 
                error: "Erro interno ao buscar usuários",
                code: 5001 
            });
        }
        res.status(200).json(results);
    });
}; 

// Função para adicionar usuario
export const addUser = (req, res) => {
    const { nome, email, telefone, cpf, rg, idade } = req.body;

    // VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS 
    if (!nome || !email || !cpf) {
        return res.status(400).json("Campos obrigatórios faltando: Nome, Email e CPF!");
    }

    // VALIDAÇÃO DE COMPRIMENTO 
    if (cpf.length > 14) return res.status(400).json("CPF muito longo! Máximo 14 caracteres.");
    if (cpf.length < 11) return res.status(400).json("O CPF inserido é muito curto!");
    
    if (rg && rg.length > 12) return res.status(400).json("RG muito longo! Máximo 12 caracteres.");
    if (telefone && telefone.length > 15) return res.status(400).json("Telefone muito longo! Máximo 15 caracteres.");

    // INSERÇÃO NO BANCO
    const add = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `cpf`, `rg`, `idade`) VALUES(?)";
    const values = [nome, email, telefone, cpf, rg, idade];

    db.query(add, [values], (err) => {
        if (err) {
            console.error('[Erro ao Inserir]:', err.message);
            return res.status(500).json(err);
        }
        return res.status(200).json("Usuario criado com Sucesso.");
    });
};

// Função para Atualizar Usuario
export const updtUser = (req, res) => {
    const { nome, email, telefone, cpf, rg, idade } = req.body;
    const { id } = req.params;

    if (!nome || !email || !cpf) {
        return res.status(400).json("Nome, Email e CPF não podem ficar vazios!");
    }

    const updt = "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `cpf` = ?, `rg` = ?, `idade` = ? WHERE `id` = ?";
    const values = [nome, email, telefone, cpf, rg, idade];

    db.query(updt, [...values, id], (err) => {
        if (err) {
            console.error('[Erro ao Atualizar]:', err.message);
            return res.status(500).json(err);
        }
        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};  

// Função para Deletar Usuario
export const delUser = (req, res) => {
    const del = "DELETE FROM usuarios WHERE `id` = ?";
    db.query(del, [req.params.id], (err) => {
        if (err) {
            console.error('[Erro ao Deletar]:', err.message);
            return res.status(500).json(err);
        }
        return res.status(200).json("Usuário Removido com sucesso.");
    });
};