
let currentPeriod = "2016JJ00";
let currentAge = "11700";
let currentGender = "3000";
let currentOrigin = "6030";
let currentMaleResults = [];
let currentFemaleResults = [];

let charts = {};
charts.crime = {};
charts.offence = {};

$(document).ready(function () {
    initialiseData(function () {
        Chart.defaults.global.defaultFontColor = 'white';

        charts.crime['male'] = new Chart($('#male-crime-chart')[0].getContext('2d'), {
            type: 'horizontalBar',
            data: {
                labels: ["Violent", "Destruction", "Theft", "Other"],
                datasets: [{
                    label: '# of commited crimes',
                    data: [0,0,0,0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 2
                }]
            },
            backgroundColor: 'rgba(251, 85, 85, 0.4)',
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

        charts.crime['female'] = new Chart($('#female-crime-chart')[0].getContext('2d'), {
            type: 'horizontalBar',
            data: {
                labels: ["Violent", "Destruction", "Theft", "Other"],
                datasets: [{
                    label: '# of commited crimes',
                    data: [0,0,0,0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 2
                }]
            },
            backgroundColor: 'rgba(251, 85, 85, 0.4)',
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

        charts.offence['male'] = new Chart($('#male-offence-chart')[0].getContext('2d'), {
            type: 'horizontalBar',
            data: {
                labels: ["Rowdyness", "Educational", "Fireworks", "Other"],
                datasets: [{
                    label: '# of commited offences',
                    data: [0,0,0,0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 2
                }]
            },
            backgroundColor: 'rgba(251, 85, 85, 0.4)',
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

        charts.offence['female'] = new Chart($('#female-offence-chart')[0].getContext('2d'), {
            type: 'horizontalBar',
            data: {
                labels: ["Rowdyness", "Educational", "Fireworks", "Other"],
                datasets: [{
                    label: '# of commited offences',
                    data: [0,0,0,0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 2
                }]
            },
            backgroundColor: 'rgba(251, 85, 85, 0.4)',
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

        getData();

        let yearChangeButton = $('.year-change-button');
        yearChangeButton.isToggled = false;
        $('#year-button-list').hide();

        yearChangeButton.click(function () {
            yearChangeButton.isToggled = !yearChangeButton.isToggled;

            if (yearChangeButton.isToggled) {
                $('#year-button-list').show();
            } else {
                $('#year-button-list').hide();
            }
        });

        $('.year-button').each(function(i, obj) {
            let year = obj.id.substr(obj.id.length - 4)

            $(obj).click(function () {
                currentPeriod = year + "JJ00"
                console.log(currentPeriod);

                $('#year-button-list').hide();
                yearChangeButton.isToggled = false;

                getData();
            });
        });
    });
});