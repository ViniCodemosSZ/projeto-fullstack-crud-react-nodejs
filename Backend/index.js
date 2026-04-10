import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('API Rodando!');
});

app.use("/usuarios", userRoutes);

app.listen(3001, () => {
    console.log('Servidor Conectado rodando na porta 3001!');
});