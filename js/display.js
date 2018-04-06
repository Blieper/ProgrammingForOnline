function buildButtonDrawer(element, reference, filter, setter) {
    // Create button for each item in the reference object
    for (item of reference) {
        
        if (filter(item) === false) {
            continue;
        }

        // Create button
        let button = $('<button></button>');
        $(button).text(item.Title);

        // Add relevant data to the button
        button.data = item;

        button.click(function () {
            // Call the setter function
            setter(button.data.Key);

            // Change the on-screen chart
            getData();
        });

        // Append button
        $('#' + element).append(button);
    }
}

function updateCharts(data, gender) {
    let totalPeople = data[0].TotaalAantalHaltJongeren_1;

    let totalCrimes = data[0].TotaalMisdrijvenHalt_2;
    let violentCrimes = data[0].GeweldsmisdrijvenHalt_3;
    let destructionPublicOrder = data[0].VernielingEnOpenbareOrdeHalt_4;
    let theftCrimes = data[0].VermogensmisdrijvenHalt_5;
    let otherCrimes = data[0].OverigeMisdrijvenHalt_6;

    let totalOffences = data[0].TotaalOvertredingenHalt_7;
    let rowdynessOffences = data[0].BaldadigheidHalt_8;
    let educationOffences = data[0].OvertredingLeerplichtwet_9;
    let fireworkOffences = data[0].VuurwerkovertredingenHalt_10;
    let otherOffences = data[0].OverigeOvertredingenHalt_11;

    charts.crime[gender].data.datasets[0].data = [violentCrimes, destructionPublicOrder, theftCrimes, otherCrimes];
    charts.crime[gender].update();

    charts.offence[gender].data.datasets[0].data = [rowdynessOffences, educationOffences, fireworkOffences, otherOffences];
    charts.offence[gender].update();    
}