import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Home, UserPlus, Menu, X } from 'lucide-react'; 
import '../styles/SidebarStyle.css';
const Sidebar = () => {
  // Define se a barra está aberta ou fechada
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Botão que alterna o estado 'active' */}
      <button className="toggle-btn" onClick={() => setActive(!active)}>
        {active ? <X size={20} /> : <Menu size={20} />}
        <span>{active ? ' Fechar' : ' Menu'}</span>
      </button>

      <nav className={`sidebar ${active ? 'active' : ''}`}>
        <Link to="/" onClick={() => setActive(false)}>
          <Home size={18} /> <span>Início</span>
        </Link>
        <Link to="/cadastro" onClick={() => setActive(false)}>
          <UserPlus size={18} /> <span>Novo Usuário</span>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;