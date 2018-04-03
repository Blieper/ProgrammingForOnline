
// Initialise data variables
let countries,
    tableInfos,
    untypedDataSet,
    typedDataSet,
    dataProperties,
    categoryGroups,
    personalCharacteristics
periods
    = null;

function initialiseData(callback) {
    // Get request for countries
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/Countries",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            countries = data.value;
        },
    });

    // Get request for tableInfos
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/TableInfos",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            tableInfos = data.value[0];

            $('#header').text(tableInfos.Title);
        },
    });

    // Get request for untypedDataSet
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/UntypedDataSet",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            untypedDataSet = data.value;
        },
    });

    // Get request for typedDataSet
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/TypedDataSet",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            typedDataSet = data.value;

            console.log(typedDataSet);
        },
    });

    // Get request for dataProperties
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/DataProperties",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            dataProperties = data.value[0];
        },
    });

    // Get request for categoryGroups
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/CategoryGroups",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            categoryGroups = data.value[0];
        },
    });

    // Get request for personalCharacteristics
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/PersonalCharacteristics",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            personalCharacteristics = data.value[0];
        },
    });

    // Get request for periods
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/80518ENG/Periods",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            periods = data.value;

            // Call callback function
            callback();
        },
    });
}

function getDataFrom() {
    console.log(currentCountry, currentPeriod);

    // Get results based on the country and period
    let results = typedDataSet.filter(function (obj) {
        return obj.Countries == currentCountry && obj.Periods == currentPeriod;
    });

    currentResults = results;
}