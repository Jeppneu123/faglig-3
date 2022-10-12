// Constants
const ctx = document.querySelector('#chart').getContext('2d')

//Varaibles
let yourImage = new Image ();
yourImage.src = "download-removebg-preview.png"

let ctxw = ctx.width = 1800;
let ctxh = ctx.height = 900;
let cx = ctxw/2, cy= ctxh/2;

ctx.fillStyle = "#ccc";
ctx.font = " 14px monospace";


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
                        position: "bottom"
                    }
            }

    }
});




