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
const store = (req, res) => {
    const data = req.body;
    const newId = pizzasData[pizzasData.length - 1].id + 1
    const newPizza = {
        id: newId,
        name: data.name,
        image: data.image,
        ingredients: data.ingredients
    }
   pizzasData.push(newPizza)
   res.json(newPizza) 
}


// UPDATE
const update = (req, res) => {
    const data = req.body;
    const id = parseInt(req.params.id);
    const pizza = pizzasData.find((pizza) => pizza.id === id);
    const updatedPizza = {
        id: id,
        name: data.name,
        image: data.image,
        ingredients: data.ingredients
    }
    pizzasData.splice(pizzasData.indexOf(pizza), 1 ,pizza)

    res.json(updatedPizza)
}


// MODIFY


// DESTROY
const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const pizza = pizzasData.find((pizza) => pizza.id === id);
    pizzasData.splice(pizzasData.indexOf(pizza), 1)
    res.sendStatus(204);
}


export default {index, show, destroy, store, update}