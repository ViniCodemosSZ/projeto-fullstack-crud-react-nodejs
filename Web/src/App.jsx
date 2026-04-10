import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.css"
import DataList from "./components/DataList.jsx";
import UserForm from './pages/UserForm.jsx'; 
import UserDetails from './pages/UserDetails.jsx';
import Sidebar from './components/Sidebar.jsx';
import Rodape from './components/Rodape.jsx';
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} position="top-right" />
      
      {/* Sidebar com links*/}
      <Sidebar /> 

      <div className="main-content" style={{ padding: '20px' }}>
        <Routes>
          {/* Listagem */}
          <Route path="/" element={<DataList />} />
          
          {/* Cadastro e Edição */}
          <Route path="/cadastro" element={<UserForm />} />
          <Route path="/usuarios/editar_usuario/:id" element={<UserForm />} />

          {/*Detalhes*/}
          <Route path="/usuarios/infos_usuario/:id" element={<UserDetails />} />
        </Routes>
      </div>
      <Rodape/>
    </Router>
  );
}

export default App;