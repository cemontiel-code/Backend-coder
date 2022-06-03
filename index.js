const express = require('express');
const app = express();
const PORT  = 8080;

const productosRouter = require('./routes/productos');



app.use(express.json())

router.get('/api/productos', (req,resp) =>{

})

const server = app.listen(PORT ,
    ()=>{
        console.log(`Server htto escuando en el puerto ${ server.address().port }`);
    }
)


