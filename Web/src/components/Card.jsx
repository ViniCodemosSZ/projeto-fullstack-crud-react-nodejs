import { useNavigate } from "react-router-dom"; 
import { ChevronRight } from "lucide-react"; 
import "./../styles/CardStyle.css";

function Card(props) {
    const navigate = useNavigate(); 
    
    return (
        <div 
            className="containerCard" 
            onClick={() => navigate(`/usuarios/infos_usuario/${props.user.id}`)}
        >
            <div className="card-content">
                <strong>Nome:</strong> {props.user.nome}
            </div>
            <ChevronRight size={20} className="icon-arrow" />
        </div>
    );
}

export default Card;