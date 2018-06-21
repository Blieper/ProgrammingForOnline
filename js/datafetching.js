
// Initialise data variables
var TypedDataSet,
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
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            TableInfos = data.value;
        },
        async: false
    });    

    // Get request for the typed data 
    $.ajax({
        url: "https://opendata.cbs.nl/ODataApi/odata/71930ned/TypedDataSet",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            TypedDataSet = data.value;
            console.log(TypedDataSet);
        },
        async: false
    });

    // Get request for the data properties
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/DataProperties",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            DataProperties = data.value;
        },
        async: false
    });

    // Get request for the category groups
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/CategoryGroups",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            CategoryGroups = data.value;
        },
        async: false
    });

    // Get request for the gender data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Geslacht",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Gender = data.value;
        },
        async: false
    });

    // Get request for the age data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Leeftijd",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Age = data.value;
        },
        async: false
    });

    // Get request for the origin data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Herkomstgroeperingen",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Origin = data.value;
        },
        async: false
    });

    // Get request for the period data 
    $.ajax({
        url: "http://opendata.cbs.nl/ODataApi/odata/71930ned/Perioden",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        crossDomain: true,
        success: function (data) {
            // Set the global data variable to the data the we recieved
            Periods = data.value;
        },
        async: false
    });

    // execute the callback function after we recieved all the data
    callback();
}

function getData() {
    // Filter in such a way that we only get an object for the age of 17, in the current year, with the male gender, and which is autochtonous
    currentMaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Perioden == currentPeriod && obj.Geslacht == "3000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    // Filter in such a way that we only get an object for the age of 17, in the current year, with the female gender, and which is autochtonous
    currentFemaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Perioden == currentPeriod && obj.Geslacht == "4000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    // Filter in such a way that we only get objects for the age of 17, with the male gender, and which are autochtonous
    periodMaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Geslacht == "3000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    // Filter in such a way that we only get objects for the age of 17, with the female gender, and which are autochtonous
    periodFemaleResults = TypedDataSet.filter(function (obj) {
        return obj.Leeftijd == currentAge && obj.Geslacht == "4000" && obj.Herkomstgroeperingen == currentOrigin;
    });

    // update male bar charts
    updateCharts(currentMaleResults,'male');
    // update female bar charts
    updateCharts(currentFemaleResults,'female');  

    // update line graphs
    updateLineGraphs();
}