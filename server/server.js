require('./config/config');
const express = require('express');
const app = express();
const validar = require('./ced/app');

app.use(express.urlencoded({extended:false}));
app.use(express.json());




app.get('/',()=>{
    res.send('Hello World');
});

app.post('/cedula/:ced',(req,res)=>{

    let id = req.params.ced;

    if(validar(id)){
        res.status(200).json({
            cédula:id,
            mensaje:'Su cedula es correcta',
            status:true
        });
    }
    else{
        res.status(400).json({
            cédula:id,
            mensaje:'Su cédula es incorrecta',
            status:false
        });
    }

   
})

app.listen(process.env.PORT,()=>{
    console.log('Escuchando puerto: ',process.env.PORT);
});
