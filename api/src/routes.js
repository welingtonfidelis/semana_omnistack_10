const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros
//Query params: req.query (filtros, ordenação, paginação...)
//Route params: req.params (identificar recurso na alteração ou remoção)
//Body: req.body (dados para criação ou alteração)

//MogoDB (não-relacional)

//Routes para dev
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:id', DevController.update);
routes.delete('/devs/:id', DevController.delete);

//busca por devs
routes.get('/search', SearchController.index);

module.exports = routes;