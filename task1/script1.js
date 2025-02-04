let table = document.createElement("table");
let thead = document.createElement("thead");
let headerRow = document.createElement("tr");
for (let j = 0; j < cols; j++) {
    let th = document.createElement("th");
    th.textContent = Колонка ${j + 1};
    headerRow.appendChild(th);
}
thead.appendChild(headerRow);
table.appendChild(thead);