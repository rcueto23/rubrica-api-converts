
module.exports = {

    CelsiusToFahrenheit: (request, response) => {
        const value = parseFloat(request.params.value);
        const fahrenheit = (value * 9/5) + 32;
        response.json({ fahrenheit });
    },

    FahrenheitToCelsius: (request, response) => {
        const value = parseFloat(request.params.value);
        const celsius = (value - 32) * 5/9;
        response.json({ celsius });
    },

    KmToMiles: (request, response) => {
        const value = parseFloat(request.params.value);
        const miles = value * 0.621371;
        response.json({ miles });
    },

}