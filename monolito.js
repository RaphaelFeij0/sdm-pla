const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

//rotas de usuarios
app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).send("Usuário criado com sucesso!");
});

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.status(201).send("Pedido criado com sucesso!");
});

app.get("/dados",(req, res) => {
    res.send({ usuarios, pedidos })

    });

    
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });