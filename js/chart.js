var weeklyLC = document.getElementById('weeklyLineChart').getContext('2d');
var dailyBC = document.getElementById('dailyBarChart').getContext('2d');
var mobilePC = document.getElementById('mobilePieChart').getContext('2d');
var weeklyLineChart = new Chart(weeklyLC, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "Weekly Traffic",
            backgroundColor: '#9370DB',
            borderColor: 'rgb(255, 99, 132)',
            data: [500, 1000, 750, 1250, 1700, 1200, 1500, 1000, 1500, 2000, 1500],
            lineTension: 0,
            pointBackgroundColor: "white",
            pointBorderColor: "#49386D",
            pointRadius: "4",
            pointHoverRadius: "4",
            borderColor: "#49386D",
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 2500,
            min: 500,
            stepSize: 500,
          },
        }]
      }

    }
});

var dailyBarChart = new Chart(dailyBC, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      backgroundColor: '#9370DB',
      data: [50, 75, 150, 100, 200, 175, 75],
    }],
  },
  options: {
    legend: {
      display: false,
    },
    scales : {
      yAxes: [{
        ticks: {
          min: 50,
          max: 250,
          stepSize: 50,
        },
      }],
    }
  },
});

var mobilePieChart = new Chart(mobilePC, {
type: 'doughnut',
data: {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [{
    backgroundColor: ["#4CA377", "#66B2B2", "#9370DB"],
    borderWidth: [0, 0, 0],
    data: [165, 220, 810],
  }],
},
options: {
  legend: {
    position: "right",
  },
  rotation: -2,
  cutoutPercentage: 55,
},
});
