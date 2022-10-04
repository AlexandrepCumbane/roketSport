import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alex1'},
        {id: '3', name: 'Alex22'},
        {id: '4', name: 'Alexxss'},
        {id: '4', name: 'Alexxss'},
    ])
})

app.listen(3001)