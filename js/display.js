function updateCharts(data, gender) {

    // Get numbers from data object
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

    // Set the data of the given chart
    charts.crime[gender].data.datasets[0].data = [violentCrimes, destructionPublicOrder, theftCrimes, otherCrimes];
    // Update the given chart
    charts.crime[gender].update();

    // Set the data of the given chart
    charts.offence[gender].data.datasets[0].data = [rowdynessOffences, educationOffences, fireworkOffences, otherOffences];
    // Update the given chart
    charts.offence[gender].update();
}

function updateLineGraphs () {

    // initialise empty array
    let maleArray = [];

    for (i of periodMaleResults){
        // get total numbers of delinquencies for males for a period
        maleArray.push(i.TotaalMisdrijvenHalt_2 + i.TotaalOvertredingenHalt_7);
    }

    // Set the data of the given chart
    charts.lineGraph['male'].data.datasets[0].data = maleArray;
    // Update the given chart
    charts.lineGraph['male'].update();

    // initialise empty array
    let femaleArray = [];

    for (i of periodFemaleResults){
        // get total numbers of delinquencies for females for a period
        femaleArray.push(i.TotaalMisdrijvenHalt_2 + i.TotaalOvertredingenHalt_7);
    }

    // Set the data of the given chart
    charts.lineGraph['female'].data.datasets[0].data = femaleArray;
    // Update the given chart
    charts.lineGraph['female'].update();
}