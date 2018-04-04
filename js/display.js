
function buildAgeButtons () {
    // Create button for each country
    for (age of Age) {
        // Create button
        let button = $('<button></button>');
        $(button).text(age.Title);

        // Add relevant info to the button
        button.age = age;

        button.click(function () {
            currentCountry = button.age.Key;

            getDataFrom();
        });

        // Append button
        $('#ageButtons').append(button);
    }
}

function buildPeriodButtons () {
    // Create button for each country
    for (period of Periods) {
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
