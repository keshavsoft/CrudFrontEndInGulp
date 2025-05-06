import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const labels = DataAsJson.map(item => item.month);
    const dataCounts = DataAsJson.map(item => item.count);

    const ctx = document.getElementById('barChart'); 

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Events Scheduled',
                data: dataCounts,
                backgroundColor: 'rgba(26, 188, 156, 0.6)',
                borderColor: '#1abc9c',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
};

export { StartFunc };
