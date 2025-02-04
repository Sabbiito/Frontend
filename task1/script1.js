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