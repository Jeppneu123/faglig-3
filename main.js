// Constants
const ctx = document.querySelector('#chart').getContext('2d')

//Varaibles
let yourImage = new Image ();
yourImage.src = "download-removebg-preview.png"

let ctxw = ctx.width = 1800;
let ctxh = ctx.height = 900;
let cx = ctxw/2, cy= ctxh/2;

let rBSoul = 40.59;
let drama = 57.71;
let blues = 60.39;
let jazz = 70.2;
let tvShows = 93.53;
let alternativePunk = 241.46;
let metal = 261.36;
let latin = 382.12;
let rock = 826.65;

// stigning i procent fra point et til to
const x1 = rBSoul - drama
const incrementInProcent1 = (x1 / rBSoul)*100

// stigning i procent fra point to til tre

const x2 = drama - blues
const incrementInProcent2 = (x2 / drama)*100

// stigning i procent fra point tre til fire

const x3 = blues - jazz
const incrementInProcent3 = (x3 / blues)*100

// stigning i procent fra point fire til fem

const x4 = jazz - tvShows
const incrementInProcent4 = (x4 / jazz)*100

// stigning i procent fra point fem til seks

const x5 = tvShows - alternativePunk
const incrementInProcent5 = (x5 / tvShows)*100

// stigning i procent fra point seks til syv

const x6 = alternativePunk - metal
const incrementInProcent6 = (x6 / alternativePunk)*100

// stigning i procent fra point syv til otte

const x7 = metal - latin
const incrementInProcent7 = (x7 / metal)*100

// stigning i procent fra point otte til ni

const x8 = latin - rock
const incrementInProcent8 = (x8 / latin)*100

ctx.fillStyle = "#ccc";
ctx.font = " 14px monospace";


const data =
{
    datasets:
        [{
            label: 'First Dataset',
            data:
                [{
                    x: 20,
                    y: 30,
                    r: rBSoul/5
                },

                {
                    x: 45,
                    y: 30,
                    r: drama/5
                },

                {
                    x: 42,
                    y: 40,
                    r:blues/5
                },

                {
                    x: 70,
                    y: 20,
                    r:jazz/5
                },

                {
                    x: 70,
                    y: 20,
                    r:tvShows/5
                },

                {
                    x: 70,
                    y: 20,
                    r:alternativePunk/5
                },

                {
                    x: 37,
                    y: 40,
                    r:metal/5
                },

                {
                    x: 40,
                    y: 32,
                    r:latin/5
                },

                {
                    x: 50,
                    y: 30,
                    r:rock/5
                }],
        backgroundColor: 'blue'
        }]
}

beginAtZero: true
;

const config = {
    type: 'bubble',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.querySelector('#chart'),
    config
);

/*
const chart = new Chart(ctx,
{
    type:'line',
    data:
    {
        labels:['Classical','R&B/Soul','Drama','Blues','Jazz','TV Shows','Alternative Punk','Metal','Latin','Rock'],
        datasets:
        [{
            data: [40.59,40.59,57.71,60.39,79.20,93.53,241.56,261.36,382.12,826.65],
            backgroundColor: ["black"],
            borderColor: ["#93F1EE"],
            tension: 0.1,
            pointStyle: "circle",
            pointRadius: 10,
            pointHoverRadius: 35
        }]
    },
    options:
    {
        scales:
        {
            x:
            {
                ticks:
                    {
                        color: "#00CC99",
                        font:
                            {
                                size:20,
                            },
                    },
        title:
        {
            display:true,
            text: 'Genres',
            color: "#93F1EE",
            font:
                {
                    size: 25,
                }
        }
            },
            y:
            {
                ticks:
                    {
                        color: "#00CC99",
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
                    color: "#93F1EE",
                    font:
                        {
                            size: 25,
                        }
                }
            }

        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return "$ and so worth it !";
                }
            }
        },
        plugins:
            {
                title:
                {
                    display: true,
                    text: " Denne graf viser mængden af køb i genre ud fra genre",
                    font:
                        {
                            size: 30,
                        }
                },
                legend:
                    {
                        position: "bottom",
                        margin: 20
                    }
            }

    }
});

*/


