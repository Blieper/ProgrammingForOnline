
let currentPeriod = "2016JJ00";
let currentAge = "11700";
let currentGender = "3000";
let currentOrigin = "6030";
let currentResults = [];

$(document).ready(function () {
    initialiseData(function () {
        buildButtonDrawer(
            'age-buttons', 
            Age, 
            function (input) {
                return input.Key != '99   ';
            },
            function (input) {
                currentAge = input;
            }
        );

        buildButtonDrawer(
            'period-buttons', 
            Periods, 
            function (input) {
                return true;
            },
            function (input) {
                currentPeriod = input;
            },            
        );

        buildButtonDrawer(
            'gender-buttons', 
            Gender, 
            function (input) {
                return input.Key != '1100';
            },
            function (input) {
                currentGender = input;
            }
        );

        buildButtonDrawer(
            'origin-buttons', 
            Origin, 
            function (input) {
                return input.Key != '1000';
            },
            function (input) {
                currentOrigin = input;
            }
        );

        getData();
    });
});