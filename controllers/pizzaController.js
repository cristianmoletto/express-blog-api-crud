import pizzasData from "../data/pizzasData.js"

// INDEX
const index = (req, res) => {
    res.json(pizzasData)
}


// SHOW
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const pizza = pizzasData.find((pizza) => pizza.id === id);  
    res.json(pizza)
}


// STORE


// UPDATE


// MODIFY


// DESTROY
const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const pizza = pizzasData.find((pizza) => pizza.id === id);
    pizzasData.splice(pizzasData.indexOf(pizza), 1)
    res.sendStatus(204);
}


export default {index, show, destroy}