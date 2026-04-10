import { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/DataListStyle.css";
import Card from "./Card";

function DataList() {
    const [data, setData] = useState([]);

    // Busca os dados assim que o componente é montado
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/usuarios");
            setData(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    return (
        <div className="container">
            <h1>Lista de usuários</h1> 
            
            <div className="containerDataList">
                {/* Se a lista estiver vazia mostra um aviso */}
                {data.length === 0 ? (
                    <p>Nenhum usuário cadastrado.</p>
                ) : (
                    data.map((usr) => (
                        <Card key={usr.id} user={usr} />
                    ))
                )}
            </div>
        </div>
    );
}

export default DataList;