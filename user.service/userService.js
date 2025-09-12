const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
     
    const user = req.body;
    await axios.post ('http://localhost:4000/orders', 
        {userId: user.id}

    );
    res.send({message: 'Usuario criado com sucesso', user})
});

app.listen(3000, () => {
    console.log('User Service running in port 3000')
})