// bar chart
var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Region"],
        datasets: [{
            label: "America", 
            data: [18791.13],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1,
        },{
            label: "East Asia & Pacific", 
            data: [14480.30],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
        },{
            label: "Europe & Central Asia", 
            data: [20818.45],
            backgroundColor: ['rgba(255, 205, 86, 0.2)'],
            borderColor: ['rgb(255, 205, 86)'],
            borderWidth: 1,
        },{
            label: "Middle East & North Africa", 
            data: [13856.00],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
        },{
            label: "South Asia", 
            data: [2505.17],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
            borderWidth: 1,
        },{
            label: "Sub-Saharan Africa", 
            data: [2569.00],
            backgroundColor: ['rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(153, 102, 255)'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per capita by region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The region with the highest GDP per capita is Europe and Central Asia.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

// line chart
var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1800','1825','1850','1875','1900','1925','1950','1975','2000','2021'],
        datasets: [{
            label: "Brazil", 
            data: [32,32,31.99,32.06,32.4,32.75,51.78,63.65,71.44,76.33],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1,
        },{
            label: "China", 
            data: [32,32,32,31.96,31.75,31.55,40.73,63.26,70.03,77.4],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
        },{
            label: "India", 
            data: [25.44,25.44,25.44,25.11,18.37,26.69,34.92,51.51,62.34,69.77],
            backgroundColor: ['rgba(255, 205, 86, 0.2)'],
            borderColor: ['rgb(255, 205, 86)'],
            borderWidth: 1,
        },{
            label: "Indonesia", 
            data: [30,30,30,30.04,30.24,30.43,37.16,56.49,67.27,72.51],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
        },{
            label: "United States", 
            data: [39.41,39.41,39.41,39.41,48.92,58.47,68.07,72.44,76.9,79.59],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
            borderWidth: 1,
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life expectancy of the most populated countries over time',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'By 1875, the United States began to see a rise in life expectancy while other countries lagged behind.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

// scatterplot

