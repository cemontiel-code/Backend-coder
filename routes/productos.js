const enrutador = require('express').Router();

let productosList = [
    { id:1 ,
      title:'pocion magica',
      price:5 ,
      thumbnail:'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-128.png' },
    { id:2 ,
      title:'espada',
      price:15 ,
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Sword-128.png'
    },
    { id:3 ,
      title:'unicornio',
      price:35 ,
      thumbnail:'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Unicorn-128.png' 
    }
];

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