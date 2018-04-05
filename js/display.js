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

function buildChart(object, params) {
    // Create chart container
    let container = $('#chart-container');

    let totalPeople = object.TotaalAantalHaltJongeren_1;

    let totalCrimes = object.TotaalMisdrijvenHalt_2;
    let violentCrimes = object.GeweldsmisdrijvenHalt_3;
    let destructionPublicOrder = object.VernielingEnOpenbareOrdeHalt_4;
    let theftCrimes = object.VermogensmisdrijvenHalt_5;
    let otherCrimes = object.OverigeMisdrijvenHalt_6;

    let totalOffences = object.TotaalOvertredingenHalt_7;
    let rowdynessOffences = object.BaldadigheidHalt_8;
    let educationOffences = object.OvertredingLeerplichtwet_9;
    let firworkOffences = object.VuurwerkovertredingenHalt_10;
    let otherOffences = object.OverigeOvertredingenHalt_11;

    let width = 1000 * (violentCrimes / totalCrimes);

    $('#bar-violent').animate(
        {'foo':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );

    width += 1000 * (destructionPublicOrder / totalCrimes);
    
    $('#bar-destruction').animate(
        {'width':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );

    width += 1000 * (theftCrimes / totalCrimes);
    
    $('#bar-theft').animate(
        {'width':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );  
    
    width = 1000 * (rowdynessOffences / totalOffences);

    $('#bar-rowdyness').animate(
        {'foo':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );

    width += 1000 * (educationOffences / totalOffences);
    
    $('#bar-education').animate(
        {'width':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );

    width += 1000 * (firworkOffences / totalOffences);
    
    $('#bar-firworks').animate(
        {'width':width},
        {
            step: function(foo){
                $(this).attr('width', foo);
            },
            duration: 500
        }
    );   

    $('#chart-parent').append(container);
}