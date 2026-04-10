-- Criação Inicial do Banco
 CREATE DATABASE IF NOT EXISTS Banco_PBL;
 USE Banco_PBL;
 
 CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(13),       -- (00) 00000-0000
    cpf VARCHAR(15)NOT NULL UNIQUE, -- 000.000.000-00
    rg VARCHAR(15)  ,         -- 00.000.000-0
    idade INT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

 -- Insert para popular a tabela
 INSERT INTO usuarios (nome, email, telefone, cpf, rg, idade) VALUES 
('Vinicius Oliveira', 'vinicius.oli@email.com', '11988881', '123.456.789-10', '12.345.678-1', 22),
('Ana Beatriz Santos', 'ana.beatriz@email.com', '119772222', '234.567.890-21', '23.456.789-2', 28),
('Carlos Eduardo Lima', 'cadu.lima@email.com', '219666633', '345.678.901-32', '34.567.890-3', 35),
('Fernanda Souza', 'fe.souza@email.com', '91988000', '012.345.678-09', '01.234.567-0', 27);

-- Select para conferir se a tabela foi populada
SELECT * FROM usuarios;

-- Criação do Usuario e da senha para o banco de dados funcionar em conjunto com a biblitoca Mysql 
CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- LOG DE VERIFICAÇÃO
SELECT 'Database configurada com sucesso!' AS status;

