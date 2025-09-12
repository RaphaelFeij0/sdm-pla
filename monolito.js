const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

<<<<<<< HEAD
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
=======
// Rutas para criação de usuarios

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send({ message: "Usuário criado com sucesso!" });
});


// Rota para criar um pedido
app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: "Pedido criado com sucesso!" });
});

// Rota para listar todos os pedidos e usuários
app.get("/dados", (req, res) => {
    res.send({ usuarios, pedidos });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
>>>>>>> e4befa3cbc9a9b5c7c518ae5fb02429f2e710cf6
