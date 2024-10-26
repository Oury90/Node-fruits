import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

const app = express()
const port = 5000

const jsonString = `[
    {
        "id": "1",
        "name": "Tomato",
        "benefits": [
            "Rich in nutrients (vitamins C, A, K, potassium, folate)",
            "Source of antioxidants (lycopene)",
            "Improves heart health",
            "Contributes to hydration",
            "Promotes digestion (rich in fiber)",
            "Protects skin health"
        ]
    },
    {
        "id": "2",
        "name": "Lemon",
        "benefits": [
            "Rich in vitamin C",
            "Aids in iron absorption",
            "Promotes digestion",
            "Strengthens the immune system",
            "Has antioxidant properties",
            "Hydrating"
        ]
    },
    {
        "id": "3",
        "name": "Apple",
        "benefits": [
            "Rich in fiber (good for digestion)",
            "Source of antioxidants (quercetin)",
            "May help reduce the risk of heart disease",
            "Helps control weight",
            "Rich in vitamin C",
            "Contributes to dental health"
        ]
    }
]`;

let data;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req, res) =>{
    res.render('index.ejs', {result: data})
})

app.post('/', (req, res) =>{
    switch (req.body.choice) {
        case "tomate":
            data = JSON.parse(jsonString)[0];
            break;
        case "citron":
            data = JSON.parse(jsonString)[1];
            break;
        case "pomme":
            data = JSON.parse(jsonString)[2];
            break;
    
        default:
            break;
    }

    res.redirect('/')
})


app.listen(port, () =>{
    console.log(`This server is running on port ${port}`)
})

