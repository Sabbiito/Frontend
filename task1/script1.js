function generateTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;

    if (rows <= 0 || cols <= 0) {
        alert('Введіть кількість рядків та стовпців.');
        return;
    }

    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; //видаляєм минулі

    const table = document.createElement('table');

    // додаємо рядочки та стовпці з підписами
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = `Рядок ${i + 1}, Стовпець ${j + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}