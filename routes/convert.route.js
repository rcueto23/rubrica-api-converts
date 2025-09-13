const { CelsiusToFahrenheit, FahrenheitToCelsius, KmToMiles } = require("../controllers/convert.controller");

function convertRouter (express) {

    const router = express.Router();

    router.get('/celsius-to-fahrenheit/:value', CelsiusToFahrenheit)
    router.get('/fahrenheit-to-celsius/:value', FahrenheitToCelsius)
    router.get('/km-to-miles/:value', KmToMiles)

    return router;

}

module.exports = convertRouter;