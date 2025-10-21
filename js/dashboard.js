// JavaScript para el dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de ingresos mensuales
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [{
                label: 'Ingresos (Millones COP)',
                data: [8, 10, 12, 11, 13, 15, 14, 16, 18, 17, 19, 22],
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    
    // Gráfico de sectores
    const sectorCtx = document.getElementById('sectorChart').getContext('2d');
    const sectorChart = new Chart(sectorCtx, {
        type: 'doughnut',
        data: {
            labels: ['Manufactura', 'Comercio', 'Logística', 'Educación', 'Servicios'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    '#4361ee',
                    '#7209b7',
                    '#4cc9f0',
                    '#f72585',
                    '#3a0ca3'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Navegación del sidebar
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Filtro de gráficos
    const chartFilter = document.querySelector('.chart-filter');
    if (chartFilter) {
        chartFilter.addEventListener('change', function() {
            // En una implementación real, aquí se actualizarían los datos del gráfico
            console.log('Filtro cambiado:', this.value);
        });
    }
    
    // Botones de acción en la tabla
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.querySelector('i').className;
            const row = this.closest('tr');
            const projectName = row.cells[1].textContent;
            
            if (action.includes('fa-edit')) {
                alert(`Editar proyecto: ${projectName}`);
            } else if (action.includes('fa-eye')) {
                alert(`Ver detalles de: ${projectName}`);
            }
        });
    });
});