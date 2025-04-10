const express = require('express');/*requiring express package */
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();/*creating an instance */

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{ /*for GET requests(for reading data, not changing it) */
    res.send('helo')
})

app.use('/ai',aiRoutes); /*ab server p koi b request ayegi or agr vo API ai se start hogi toh ai routes m jayegi */

module.exports = app;