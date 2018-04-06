
// Initialise data variables
let TypedDataSet,
    TableInfos,
    DataProperties,
    CategoryGroups,
    Gender,
    Age,
    Periods,
    Origin
    = null;

function initialiseData(callback) {   
    // Get request for tableinfos
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/TableInfos",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            TableInfos = data.value;
        },
        async: false
    });    

    // Get request for the typed data 
    $.ajax({
        url: "https://opendata.cbs.nl/ODataApi/odata/71930ned/TypedDataSet",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            TypedDataSet = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/DataProperties",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            DataProperties = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/CategoryGroups",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            CategoryGroups = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Geslacht",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Gender = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Leeftijd",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Age = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Herkomstgroeperingen",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Origin = data.value;
        },
        async: false
    });

    // Get request for the typed data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Perioden",
        dataType: 'json',
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Periods = data.value;
        },
        async: false
    });

    callback();
}

function getData() {
    currentMaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Perioden == currentPeriod && obj.Geslacht == "3000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    currentFemaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Perioden == currentPeriod && obj.Geslacht == "4000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    updateCharts(currentMaleResults,'male');
    updateCharts(currentFemaleResults,'female');  
}