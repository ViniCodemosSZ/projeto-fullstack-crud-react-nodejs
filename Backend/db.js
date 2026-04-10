import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '1234',
    database: 'Banco_PBL'
});

db.connect(err => {
    if(err){
        switch(err.errno) {
            case 1045:
                console.error("[Erro 101] Usuário ou senha do banco incorretos.");
                break;
            case 1049:
                console.error("[Erro 102] O banco de dados 'Banco_PBL' não foi encontrado.");
                break;
            case 1146:
                console.error("[Erro 103] A tabela 'usuarios' não existe. Rode o setup.sql.");
                break;
            default:
                console.error(`[Erro ${err.errno}] Erro inesperado: ${err.message}`);
        }
        return;
    }
    console.log('Conectado ao Banco!');
});