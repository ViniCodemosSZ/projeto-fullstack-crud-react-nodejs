# projeto-fullstack-crud-react-nodejs

Sistema CRUD Full Stack para gerenciamento de usuários. Desenvolvido com React, Node.js e MySQL. Possui validações, interface responsiva e integração completa com API.

Uma aplicação simples, mas completa de CRUD para gerenciamento de usuários, integrado a um banco de dados relacional MySQL. API construída com Node.js focada em usabilidade, arquitetura organizada e validações de dados.

## Tecnologias e Bibliotecas

### Frontend (React)
- **React Router Dom**: Implementação de rotas dinâmicas e URLs semânticas para melhor navegação e organização das páginas.
- **Axios**: Cliente HTTP para consumo da API RESTful do backend de forma assíncrona.
- **Lucide React**: Biblioteca de ícones vetoriais utilizada para melhorar a indicação visual de elementos clicáveis.
- **React-Toastify**: Sistema de notificações em tempo real para fornecer feedback imediato de sucesso ou erro ao usuário.
- **SweetAlert2**: Modais de confirmação para ações críticas, como a exclusão de registros, garantindo maior segurança operacional.

### Backend (Node.js)
- **Express**: Framework para construção de rotas, middlewares e gerenciamento de requisições HTTP.
- **MySQL2**: Driver de conexão utilizado para execução de queries SQL e persistência de dados.
- **CORS**: Configuração de segurança para permitir que o frontend acesse os recursos do backend em portas distintas.
- **Nodemon**: Ferramenta de auxílio ao desenvolvimento para reinicialização automática do servidor após alterações no código.

## Estratégias e Métodos

### 1. Validação de Dados
Foram implementadas camadas de validação para garantir a integridade do banco de dados e evitar falhas de processamento:
- **Frontend**: Utilização de atributos nativos do HTML5, como maxlength e required, para limitar a entrada de dados diretamente no formulário.
- **Backend**: Verificação de campos obrigatórios e tratamento de comprimento de strings antes da execução das queries, retornando status HTTP 400 em caso de inconsistência.

### 2. Experiência do Usuário (UX)
- **URLs Semânticas**: Substituição de IDs numéricos expostos por caminhos descritivos, tornando a navegação mais intuitiva.
- **Feedback Visual**: Uso de efeitos de transição, sombras e ícones de navegação nos cards para indicar interatividade.
- **Rodapé Persistente**: Inclusão de um rodapé fixo em todas as páginas para identificação clara da autoria e direitos reservados.

## Como Executar o Projeto

### 1. Configuração do Banco de Dados
- Certifique-se de ter o MySQL instalado em seu ambiente.
- Importe o arquivo `setup.sql` localizado na raiz do projeto para criar a estrutura da tabela de usuários. Selecione todo o script e execute-o.

### 2. Inicialização do Backend
1. Navegue até a pasta: `cd Backend`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start` (O servidor rodará na porta 3001).

### 3. Inicialização do Frontend (Web)
1. Navegue até a pasta: `cd Web`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `npm start` (Acesse no navegador via `http://localhost:3000`).

## Autor
**Vinicius Edivaldo Souza Penhorato** **Curso: Ciência da Computação - PUCPR**
