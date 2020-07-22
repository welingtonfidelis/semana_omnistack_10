const axios = require('axios');
const Dev = require('../models/Dev');
const { findConnections, sendMessage } = require('../websocket');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({
            github_username
        });

        if (!dev) {
            const resp = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, bio, avatar_url } = resp.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            //filtrar conexões que estão no máximo à 10 km de distância
            //e o dev possua ao menos uma tecnologia filtrada pelo front end de busca
            const sendSocketMessageTo = findConnections({ latitude, longitude },
                techsArray
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        return response.json({ message: dev });
    },

    async index(request, response) {
        const dev = await Dev.find();

        return response.json({ message: dev });
    },

    async update(request, response) {
        const { id } = request.params, { github_username, techs, latitude, longitude, name, bio } = request.body;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const dev = await Dev.updateOne({
            id,
            github_username,
            name,
            bio,
            techsArray,
            location
        });

        return response.json({ message: dev })
    },

    async delete(request, response) {

        const { id } = request.params;
        console.log(id);

        const dev = await Dev.deleteOne({
            _id: id
        });

        return response.json({ message: dev });
    }
}