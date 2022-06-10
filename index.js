const express = require('express')
const app = express();
const PORT  = 8080;
//handle bars modules
const handlebars = require('express-handlebars')

const productosRouter = require('./routes/productos');

app.set('views','./views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:true}))
app.use(express.json())

app.get('/' , (req,resp) =>{
    resp.render('pages/index.ejs')  
})


productosRouter.get('/api/productos', (req,resp) =>{
    resp.render('pages/index.ejs')
}) 

const server = app.listen(PORT ,
    ()=>{
        console.log(`Server http escuando en el puerto ${ server.address().port }`);
    }
)


