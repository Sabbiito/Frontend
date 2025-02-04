if (!rows || !cols || rows <= 0 || cols <= 0) {
    alert("Введіть коректні значення для рядків і стовпців!");
    return;
}

rows = parseInt(rows);
cols = parseInt(cols);

let tableContainer = document.getElementById("table-container");
tableContainer.innerHTML = ""; // Очистка перед генерацією

let table = document.createElement("table");
for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        td.textContent = `(${i + 1}, ${j + 1})`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
tableContainer.appendChild(table);