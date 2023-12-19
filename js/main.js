

    var data = {
      labels: ['Developer', 'Testing', 'Data_Analytic', 'Designer'],
      datasets: [{
        data: [40, 20, 25, 15], // Removed the extra comma here
        backgroundColor: ['red', 'blue', 'yellow', 'grey'],
      }]
    };
    
    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');
    
    // Create the pie chart
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
    