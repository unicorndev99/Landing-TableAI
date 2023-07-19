

$(".menuBtn").click(function(){
    $(".nav-box").css("transform","translateX(0%)");
  })
  $(".closebtn").click(function(){
    $(".nav-box").css("transform","translateX(-100%)");
  })
const datafill = {
    labels: ['W 1','W 2','W 3','W 4','W 5','W 6','W 7','W 1','W 2','W 3','W 4','W 5','W 6','W 7'],
    datasets: [{
        type:"line",
        label: 'Weekly Sales',
        pointRadius: 0,
        lineTension: 0.1,
        borderWidth:2,
        data: [5,6,4,6,2,8,9,3,5,6,4,6,2,8,9,3 ],
        borderColor:'rgb(4,202,0)',
        backgroundColor: (context) =>{
            const bgColor =[
                'rgba(204,242,239, 0.2)',
                'rgba(204,242,239, .5)',
                'rgba(204,242,239, .2)',
                'rgba(204,242,239, .2)',
            ];
            if(!context.chart.chartArea){
                return;
            }
            const { ctx, data, chartArea: {top, bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient (0, top, 0, bottom) ;
            gradientBg.addColorStop(0,bgColor[0])
            gradientBg.addColorStop(0.5,bgColor[1])
            gradientBg.addColorStop(1,bgColor[2])
            return gradientBg;
        },
            fill: 'start',
    }, ]
};
// config 
const configfill = {
    type: 'bar',
    data: datafill,
    options: {
        indexAxis: 'x',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 0.5,
            },
        },
        scales: {
            x: {
                display:false,
                grid: {
                    display: false
                },
                min: 0,
                max: 12,
                ticks: {
                // forces step size to be 50 units
                stepSize: 4}
            },
            y: {
                display:false,
                grid: {
                    display: false
                },
                min: 0,
                max: 12,
                ticks: {
                // forces step size to be 50 units
                stepSize: 4}
            }
        },
        responsive: true,

        plugins: {
            legend: {
                display: false
            },
        }
    },
};

// render init block
const fillChart = new Chart(
    document.getElementById('fillChart'),
    configfill
);


// render init block
const fillChartTwo = new Chart(
    document.getElementById('fillChartTwo'),
    configfill
);


// render init block
const fillChartThree = new Chart(
    document.getElementById('fillChartThree'),
    configfill
);



const datafillOne = {
    labels: ['W 1','W 2','W 3','W 4','W 5','W 6','W 7','W 1','W 2','W 3','W 4','W 5','W 6','W 7'],
    datasets: [{
        type:"line",
        label: 'Weekly Sales',
        pointRadius: 0,
        lineTension: 0.1,
        data: [5,6,4,6,2,8,9,3,5,6,4,6,2,8,9,3 ],
        borderColor:'rgb(223,72,76)',
        borderWidth:2,
        backgroundColor: (context) =>{
            const bgColor =[
                'rgba(254,230,229, 0.2)',
                'rgba(254,230,229, .5)',
                'rgba(254,230,229, .2)',
                'rgba(254,230,229, .2)',
            ];
            if(!context.chart.chartArea){
                return;
            }
            const { ctx, data, chartArea: {top, bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient (0, top, 0, bottom) ;
            gradientBg.addColorStop(0,bgColor[0])
            gradientBg.addColorStop(0.5,bgColor[1])
            gradientBg.addColorStop(1,bgColor[2])
            return gradientBg;
        },
            fill: 'start',
    }, ]
};
// config 
const configfillOne = {
    type: 'bar',
    data: datafillOne,
    options: {
        indexAxis: 'x',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 0.5,
            },
        },
        scales: {
            x: {
                display:false,
                grid: {
                    display: false
                },
                min: 0,
                max: 12,
                ticks: {
                // forces step size to be 50 units
                stepSize: 4}
            },
            y: {
                display:false,
                grid: {
                    display: false
                },
                min: 0,
                max: 12,
                ticks: {
                // forces step size to be 50 units
                stepSize: 4}
            }
        },
        responsive: true,

        plugins: {
            legend: {
                display: false
            },
        }
    },
};

// render init block
const fillChartFour = new Chart(
    document.getElementById('fillChartFour'),
    configfillOne
);

// render init block
const fillChartFive = new Chart(
    document.getElementById('fillChartFive'),
    configfillOne
);
// render init block
const fillChartSix = new Chart(
    document.getElementById('fillChartSix'),
    configfillOne
);
// render init block
const fillChartSeven = new Chart(
    document.getElementById('fillChartSeven'),
    configfillOne
);
// render init block
const fillChartEigth = new Chart(
    document.getElementById('fillChartEigth'),
    configfillOne
);
