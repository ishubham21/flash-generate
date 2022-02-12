const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('o')
})

app.listen(3001, () => {
    console.log('ok listening');
})