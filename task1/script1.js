document.getElementById("custom-form").addEventListener("submit", function (event) {
    let login = document.getElementById("login").value.trim();
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeat-password").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let city = document.getElementById("city").value;

    if (login.length < 3) {
        alert("Логін має містити принаймні 3 символи.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("Пароль має містити принаймні 6 символів.");
        event.preventDefault();
    } else if (password !== repeatPassword) {
        alert("Паролі не співпадають.");
        event.preventDefault();
    } else if (!gender) {
        alert("Оберіть стать.");
        event.preventDefault();
    } else if (!city) {
        alert("Оберіть місто.");
        event.preventDefault();
    }
});

function generateTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);

    if (!rows || !cols || rows <= 0 || cols <= 0) {
        alert("Введіть коректні значення для рядків і стовпців!");
        return;
    }

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
}
