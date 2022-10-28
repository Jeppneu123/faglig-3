// Bar Chart
//Varaibles
let rBSoul = 40.59;
let drama = 57.71;
let blues = 60.39;
let jazz = 70.2;
let tvShows = 93.53;
let alternativePunk = 241.46;
let metal = 261.36;
let latin = 382.12;
let rock = 826.65;

// Setup
const dataBar =
    {
        labels: ['Jazz', 'Tv-Shows', 'Alternative-Punk', 'Metal', 'Latin', 'Rock'],
        datasets: [{
            label: 'The sum of each genres earning',
            data: [jazz,tvShows,alternativePunk,metal,latin,rock],
            backgroundColor: [
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(245, 143, 41, 1)'
            ],
            borderColor: [
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(180, 180, 180, 0.5)',
                'rgba(245, 143, 41, 1)'
            ],
            borderWidth: 1,
            clip: false
        }]
    }
// Config
const configBar =
    {
        type: 'bar',
        data:dataBar,
        options: {
            scales:
                {
                    x:
                        {
                            ticks:
                                {
                                    color: "#55917F",
                                    font:
                                        {
                                            size:20,
                                        },
                                },
                            grid:
                                {
                                    display: true
                                },
                            title:
                                {
                                    display:true,
                                    text: 'Genres',
                                    color: "#5E4C5A",
                                    font:
                                        {
                                            size: 20
                                        },
                                    padding: 20
                                }
                        },
                    y:
                        {
                            ticks:
                                {
                                    color: "#55917F",
                                    font:
                                        {
                                            size:20
                                        }
                                },
                            beginAtZero: true,
                            grid:
                                {
                                    display:false
                                },
                            title:
                                {
                                    display: true,
                                    text: 'Earnings in Dollars $ ',
                                    color: "#5E4C5A",
                                    font:
                                        {
                                            size: 20,
                                        },

                                    padding: 25
                                }
                        }

                },
            plugins:
                {
                    legend:
                        {
                            position: "bottom",
                            margin: 22,

                            labels:
                                {
                                    color: "#55917F",
                                    font: {
                                        size: 22
                                    }
                                }
                        }
                }

        }
    };

// Initialisation
const myChart = new Chart (
    document.querySelector('#myChart1'),
    configBar
);


// Doughnut Chart
// setup
const dataDoughnut =
    {
        labels: ['All other genres','Rock'],
        datasets: [{
            label: 'doughnut',
            data: [rock,((jazz+tvShows+alternativePunk+metal+latin))],
            backgroundColor: [
                'rgba(245, 143, 41, 1)',
                'rgba(180, 180, 180, 0.5)',
            ],
            borderColor: [
                'rgba(245, 143, 41, 1)',
                'rgba(180, 180, 180, 0.5)',

            ],
            borderWidth: 1,

        }]
    };

// config
const configDoughnut =
    {
        type: 'pie',
        data: dataDoughnut,
        options:
            {
                plugins:
                    {
                        legend:
                            {
                                position: "bottom",

                                labels:
                                    {
                                        color: "#55917F",
                                        font: {
                                            size: 22
                                        }
                                    }
                            }
                    },
                responsive:true
            }
    };

// render init block
const myChartDoughnut = new Chart(
    document.querySelector('#myChart2'),
    configDoughnut
);