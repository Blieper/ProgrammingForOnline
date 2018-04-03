
let currentPeriod = "2014JJ00";
let currentCountry = "L008552";
let currentResults = [];

$( document ).ready(function() {
    initialiseData(function() {
        buildCountryButtons();
        buildPeriodButtons();

        getDataFrom(currentCountry, currentPeriod);
    });
});