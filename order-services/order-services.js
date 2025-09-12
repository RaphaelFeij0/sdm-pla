const express = require('express');
const app = express();

app.use(express.json());

app.post('/orders', (req, res) => {
    const order = req.body;
    console.log (`pedido recebido para o user Id: ${order.userId}`);
    res.send({message: 'pedido criado com sucesso! ', order});

} );

app.listen(4000, () => console.log('Order Service running in port 4000'))