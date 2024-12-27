<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Review Backlog Visualization</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<canvas id="backlogChart" width="400" height="200"></canvas>
<script>
    // Sample data (usually retrieved from an API or data source)
    const reviewBacklogs = [
        { date: '2023-01-01', backlog: 10, optimization: 5 },
        { date: '2023-02-01', backlog: 15, optimization: 4 },
        { date: '2023-03-01', backlog: 20, optimization: 3 },
        { date: '2023-04-01', backlog: 25, optimization: 2 },
        { date: '2023-05-01', backlog: 30, optimization: 1 },
    ];

    // Processing data
    const dates = reviewBacklogs.map(entry => entry.date);
    const backlogs = reviewBacklogs.map(entry => entry.backlog);
    const optimizations = reviewBacklogs.map(entry => entry.optimization);

    // Creating the chart
    const ctx = document.getElementById('backlogChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Review Backlog',
                    data: backlogs,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Code Optimization',
                    data: optimizations,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Count'
                    }
                }
            }
        }
    });
</script>
</body>
</html>
