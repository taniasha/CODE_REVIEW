require('dotenv').config() /*accessing the key inside .env file*/
const app = require('./src/app');

const port = process.env.PORT || 3000;/*this process.env make the server run on available port */

app.listen(port,()=>{ /*app.listen we started the server */
   console.log('Server is running on http://localhost:3000')
 }) 