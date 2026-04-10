import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/UserFormStyle.css";

const UserForm = () => {
    const [user, setUser] = useState({
        nome: "", email: "", telefone: "", cpf: "", rg: "", idade: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    // Carrega os dados pra listar na pagina de edição
    useEffect(() => {
        if (id) {
            axios.get("http://localhost:3001/usuarios")
                .then(({ data }) => {
                    // Procura o usuário pelo ID na lista
                    const found = data.find(u => u.id === parseInt(id));
                    if (found) setUser(found);
                })
                .catch(() => toast.error("Erro ao carregar usuário!"));
        }
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:3001/usuarios/${id}`, user);
                toast.success("Atualizado com sucesso!");
            } else {
                await axios.post("http://localhost:3001/usuarios", user);
                toast.success("Cadastrado com sucesso!");
            }
            navigate("/");
        } catch (err) {
            toast.error("Erro ao salvar dados!");
        }
    };

    return (
        <div className="container-form">
            <h2>{id ? "Editar Usuário" : "Novo Usuário"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nome</label>
                    <input name="nome" value={user.nome} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>E-mail</label>
                    <input name="email" type="email" value={user.email} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Telefone</label>
                    <input name="telefone" value={user.telefone} onChange={handleChange} maxLength="11" placeholder="(00) 00000-0000" />
                </div>
                <div className="row">
                    <div className="input-group">
                        <label>CPF</label>
                        <input name="cpf" value={user.cpf} onChange={handleChange} maxLength="11" placeholder="000.000.000-00" required />
                    </div>
                    <div className="input-group">
                        <label>RG</label>
                        <input name="rg" value={user.rg} onChange={handleChange} maxLength="9" placeholder="00.000.000-0"/>
                    </div>
                </div>
                <div className="input-group">
                    <label>Idade</label>
                    <input name="idade" type="number" value={user.idade} onChange={handleChange} />
                </div>
                
                <div className="button-group">
                    <button type="submit" className="btn-save">Salvar</button>
                    <button type="button" className="btn-cancel" onClick={() => navigate("/")}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;