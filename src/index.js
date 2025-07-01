const express = require ('express');
const app = express();
const cors= require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// configuracion icial del servidor  en el puerto

app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)



//Nuestro primer WS Get  // A ESTAS RUTAS SE CONOCEN COMO END
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})


// rutas  responde el servidor a esta  ruta
app.get('/mensaje/mensaje1', (req, res) => {    
    res.json(
        {
            "Title": "mensaje de prueba"
        }
    );
})




app.post('/sumar', (req, res) => {
    const {num1, num2} = req.body;

    if (!num1 || !num2){
        return res.status(400).send({error: 'Faltan numeros para sumar'});
    }

const resultado = num1 + num2;

res.send({resultado});
});

app.post('/edad', (req, res) => {
    const {nacimiento, actual} = req.body;

    if (!nacimiento || !actual){
        return res.status(400).send({error: 'Faltan numeros para sumar'});
    }

const edad = actual - nacimiento;

res.send({edad});
});



//Variables en una API suma de dos números 
//Para enviar información al servidor usamos el metodo post


//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log("ESTE ES MI SERVIDOR Y ESTA EN EL htt://localhost:4000");
console.log("mi primer servidor ");
 


});