const enrutador = require('express').Router();

let productosList = [];

enrutador.get('/productos', ( req , resp ) =>{
    resp.json(productosList);
})

enrutador.get('/productos/:id', ( req , resp ) =>{

    for (const i of productosList) {
        if ( productosList[i].id == req.params ) { 
            resp.json( productosList[i].id )
        }
    }
})

enrutador.put('/productos/:id', ( req , resp ) =>{

    for (const i of productosList) {
        if ( productosList[i].id == req.params ) { 
            resp.json( productosList[i].id )
        }
    }
})


enrutador.post('/productos' , ( req , resp ) =>{

    const { title ,price ,thumbnail } = req.body;
    const id =  productosList.length+1;

    productosList.push({ id ,title ,price ,thumbnail });

    resp.json(productosList);
})

enrutador.delete('/productos/:id' ,  (req ,resp) =>{
    for (const i of productosList) {
        if ( productosList[i].id == req.params ) { 
            resp.json( productosList[i].id )
        }
    }
})

module.exports = enrutador;