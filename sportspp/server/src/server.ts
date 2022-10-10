import express from 'express';

const app = express();
/**
 * Type of parameters
 * Query
 * Route
 * Body
 */


// HTTP METHODS / API REST FULL / HTTP Codes

// List
app.get('/games',(req, res)=>{
    return res.status(201).json([])
})

// create
app.post('/ads',(req, res)=>{
    return res.status(201).json([])
})

app.get('/games/:id/ads', (req, res) => {
    return res.json([
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alex1'},
        {id: '3', name: 'Alex22'},
        {id: '4', name: 'Alexxss'},
        {id: '4', name: 'Alexxss'},
    ])
})

app.get('/ads/:id/discord ', (req, res) => {
    return res.json([])
})

app.listen(3001)