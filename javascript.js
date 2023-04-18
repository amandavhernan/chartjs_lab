// bar chart
var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Region"],
        datasets: [{
            label: "America", 
            data: [18791.13],
            backgroundColor: ['rgba(186, 133, 171, 0.2)'],
            borderColor: ['rgb(186, 133, 171)'],
            borderWidth: 2,
        },{
            label: "East Asia & Pacific", 
            data: [14480.30],
            backgroundColor: ['rgba(94, 99, 164, 0.2)'],
            borderColor: ['rgb(94, 99, 164)'],
            borderWidth: 2,
        },{
            label: "Europe & Central Asia", 
            data: [20818.45],
            backgroundColor: ['rgba(0, 59, 94, 0.2)'],
            borderColor: ['rgb(0, 59, 94)'],
            borderWidth: 2,
        },{
            label: "Middle East & North Africa", 
            data: [13856.00],
            backgroundColor: ['rgba(61, 106, 151, 0.2)'],
            borderColor: ['rgb(61, 106, 151)'],
            borderWidth: 2,
        },{
            label: "South Asia", 
            data: [2505.17],
            backgroundColor: ['rgba(83, 141, 202, 0.2)'],
            borderColor: ['rgb(83, 141, 202)'],
            borderWidth: 2,
        },{
            label: "Sub-Saharan Africa", 
            data: [2569.00],
            backgroundColor: ['rgba(252, 185, 88, 0.2)'],
            borderColor: ['rgb(252, 185, 88)'],
            borderWidth: 2,
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
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'GDP per Capita'
                }
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
            backgroundColor: ['rgba(186, 133, 171, 0.2)'],
            borderColor: ['rgb(186, 133, 171)'],
            borderWidth: 2,
        },{
            label: "China", 
            data: [32,32,32,31.96,31.75,31.55,40.73,63.26,70.03,77.4],
            backgroundColor: ['rgba(94, 99, 164, 0.2)'],
            borderColor: ['rgb(94, 99, 164)'],
            borderWidth: 2,
        },{
            label: "India", 
            data: [25.44,25.44,25.44,25.11,18.37,26.69,34.92,51.51,62.34,69.77],
            backgroundColor: ['rgba(0, 59, 94, 0.2)'],
            borderColor: ['rgb(0, 59, 94)'],
            borderWidth: 2,
        },{
            label: "Indonesia", 
            data: [30,30,30,30.04,30.24,30.43,37.16,56.49,67.27,72.51],
            backgroundColor: ['rgba(61, 106, 151, 0.2)'],
            borderColor: ['rgb(61, 106, 151)'],
            borderWidth: 2,
        },{
            label: "United States", 
            data: [39.41,39.41,39.41,39.41,48.92,58.47,68.07,72.44,76.9,79.59],
            backgroundColor: ['rgba(83, 141, 202, 0.2)'],
            borderColor: ['rgb(83, 141, 202)'],
            borderWidth: 2,
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
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Life Expectancy'
                }
            }
        },
    },
});

// scatterplot
var ctx = document.getElementById('scatterChart').getContext('2d');
      var scatterChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                    {x: 71.5, y: 3678},
                ],
                label: "China",
                backgroundColor: ['rgba(61, 106, 151, 0.2)'],
                borderColor: ['rgb(61, 106, 151)'],
                borderWidth:2,
               
              },{ 
                data: [
                    {x: 61.1, y: 2548},
                ],
                label: "India",
                backgroundColor: ['rgba(83, 141, 202, 0.2)'],
                borderColor: ['rgb(83, 141, 202)'],
                borderWidth:2,
                
              },{ 
                data: [
                    {x: 77.1, y: 45986},
                ],
                label: "United States",
                backgroundColor:"rgb(180, 82, 72,0.2)",
                borderColor: ['rgb(180, 82, 72)'],
                borderWidth:2,
              },{
                data: [
                    {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                backgroundColor:"rgb(212, 140, 132,0.2)",
                borderColor: ['rgb(212, 140, 132)'],
                borderWidth:2,
              },{
                data: [
                    {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                backgroundColor:"rgb(168, 154, 73,0.2)",
                borderColor: ['rgb(168, 154, 73)'],
                borderWidth:2,
              },{
                data: [
                    {x: 65.4, y: 13173},
                ],
                label: "Russia",
                backgroundColor:"rgb(214, 207, 162,0.2)",
                borderColor: ['rgb(214, 207, 162)'],
                borderWidth:2,
              },{
                data: [
                    {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                backgroundColor:"rgb(60, 180, 100,0.2)",
                borderColor: ['rgb(60, 180, 100)'],
                borderWidth:2,
              },{
                data: [
                    {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                backgroundColor: ['rgba(186, 133, 171, 0.2)'],
                borderColor: ['rgb(186, 133, 171)'],
                borderWidth:2,
              },{
                data: [
                    {x: 81.1, y: 32193},
                ],
                label: "Japan",
                backgroundColor: ['rgba(94, 99, 164, 0.2)'],
                borderColor: ['rgb(94, 99, 164)'],
                borderWidth:2,
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'The relationship between GDP per capita and life expectancy',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Countries with higher life expectancies tend to also have higher GDPs per capita.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
