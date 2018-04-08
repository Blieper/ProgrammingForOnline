
function initialiseCharts() {
    // Set the default font color to white
    Chart.defaults.global.defaultFontColor = 'white';

    // bar chart for the crime rates (males)
    charts.crime['male'] = new Chart($('#male-crime-chart')[0].getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: ["Violent", "Destruction", "Theft", "Other"],
            datasets: [{
                label: '# of commited crimes',
                data: [0, 0, 0, 0],
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
            responsiveness: true,
            maintainAspectRatio: false,
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

    // bar chart for the crime rates (females)
    charts.crime['female'] = new Chart($('#female-crime-chart')[0].getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: ["Violent", "Destruction", "Theft", "Other"],
            datasets: [{
                label: '# of commited crimes',
                data: [0, 0, 0, 0],
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
            responsiveness: true,
            maintainAspectRatio: false,
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

    // bar chart for the offense rates (males)
    charts.offence['male'] = new Chart($('#male-offence-chart')[0].getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: ["Rowdyness", "Educational", "Fireworks", "Other"],
            datasets: [{
                label: '# of commited offences',
                data: [0, 0, 0, 0],
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
            responsiveness: true,
            maintainAspectRatio: false,
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

    // bar chart for the offense rates (females)
    charts.offence['female'] = new Chart($('#female-offence-chart')[0].getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: ["Rowdyness", "Educational", "Fireworks", "Other"],
            datasets: [{
                label: '# of commited offences',
                data: [0, 0, 0, 0],
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
            responsiveness: true,
            maintainAspectRatio: false,
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

    // line graph depicting the amount of delinquencies per year (males)
    charts.lineGraph['male'] = new Chart($('#line-graph-male')[0].getContext('2d'), {
        type: 'line',
        data: {
            labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            datasets: [{
                label: 'Total crimes and offences over time',
                data: [12312, 123, 123123, 23423],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235,1)',
                ],
                borderWidth: 2
            }]
        },
        backgroundColor: 'rgba(251, 85, 85, 0.4)',
        options: {
            responsiveness: true,
            maintainAspectRatio: false,
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

    // line graph depicting the amount of delinquencies per year (females)
    charts.lineGraph['female'] = new Chart($('#line-graph-female')[0].getContext('2d'), {
        type: 'line',
        data: {
            labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            datasets: [{
                label: 'Total crimes and offences over time',
                data: [12312, 123, 123123, 23423],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132,1)',
                ],
                borderWidth: 2
            }]
        },
        backgroundColor: 'rgba(251, 85, 85, 0.4)',
        options: {
            responsiveness: true,
            maintainAspectRatio: false,
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
}