import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import "./../styles/Modalstyle.css";

export default function UserDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Busca os dados do usuário específico
    axios.get(`http://localhost:3001/usuarios`)
      .then(({ data }) => {
        // Busca o usuário correspondente ao ID da URL
        const found = data.find(u => u.id === parseInt(id));
        if (found) {
            setUser(found);
        } else {
            toast.error("Usuário não encontrado!");
            navigate("/");
        }
      })
      .catch(() => toast.error("Erro ao carregar detalhes."));
  }, [id, navigate]);

const handleDelete = async () => {
  const result = await Swal.fire({
    title: 'Tem certeza?',
    text: "Você não poderá reverter isso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e74c3c', 
    cancelButtonColor: '#2c3e50',  
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`http://localhost:3001/usuarios/${id}`);
      Swal.fire('Deletado!', 'O usuário foi removido.', 'success');
      navigate("/");
    } catch (error) {
      Swal.fire('Erro!', 'Não foi possível excluir.', 'error');
    }
  }
};
  if (!user) return <div className="container">Carregando...</div>;

  return (
    <div className="containerModal">
      <button className="btn-back" onClick={() => navigate("/")}>
        <ArrowLeft size={18} /> Voltar
      </button>

      <h2>Informações: {user.nome}</h2>
      
      <div className="infos"> 
        <strong>Nome:</strong> <span>{user.nome}</span>
      </div>
      <div className="infos"> 
        <strong>Email:</strong> <span>{user.email}</span>
      </div>
      <div className="infos"> 
        <strong>Idade:</strong> <span>{user.idade}</span>
      </div>
      <div className="infos"> 
        <strong>RG:</strong> <span>{user.rg}</span>
      </div>
      <div className="infos"> 
        <strong>CPF:</strong> <span>{user.cpf}</span>
      </div>
       <div className="infos"> 
        <strong>Telefone:</strong> <span>{user.telefone}</span>
      </div>
      <div className="user-actions">
        <button className="btn-edit" onClick={() => navigate(`/usuarios/editar_usuario/${id}`)}>
          <Edit size={16} /> Editar
        </button>
        
        <button className="btn-delete" onClick={handleDelete}>
          <Trash2 size={16} /> Excluir
        </button>
      </div>
    </div>
  );
}