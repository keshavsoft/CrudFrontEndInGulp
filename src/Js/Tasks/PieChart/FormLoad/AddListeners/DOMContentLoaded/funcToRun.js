import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const labels = DataAsJson.map(item => item.month);
    const dataCounts = DataAsJson.map(item => item.count);

    const ctx = document.getElementById('pieChart'); 

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Events Scheduled',
                data: dataCounts,
                backgroundColor: [
                    '#1abc9c', '#3498db', '#9b59b6', '#f1c40f',
                    '#e67e22', '#e74c3c', '#2ecc71', '#34495e',
                    '#95a5a6', '#d35400', '#7f8c8d', '#8e44ad'
                ],
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
};

export { StartFunc };
