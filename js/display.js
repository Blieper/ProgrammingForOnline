
function buildCountryButtons () {
    // Create button for each country
    for (country of countries) {
        // Create button
        let button = $('<button></button>');
        $(button).text(country.Title);

        // Add relevant info to the button
        button.country = country;

        button.click(function () {
            currentCountry = button.country.Key;

            getDataFrom();
        });

        // Append button
        $('#countryButtons').append(button);
    }
}

function buildPeriodButtons () {
    // Create button for each country
    for (period of periods) {
        // Create button
        let button = $('<button></button>');
        $(button).text(period.Title);

        // Add relevant info to the button
        button.period = period;

        button.click(function () {
            currentPeriod = button.period.Key;

            getDataFrom();
        });

        // Append button
        $('#periodButtons').append(button);
    }
}
