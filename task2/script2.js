const items = [
    { title: "Меню Акордеон з HTML", content: "Це контент для акордеона з HTML." },
    { title: "Акордеон за допомогою CSS", content: "Це контент для акордеона з CSS." },
    { title: "Меню Акордеон з JavaScript", content: "Це контент для акордеона з JavaScript." },
    { title: "Акордеон із jQuery", content: "Це контент для акордеона з jQuery." },
    { title: "Акордеон з Bootstrap 5", content: "Це контент для акордеона з Bootstrap 5." }
];

const container = document.querySelector(".accordion");
items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("accordion-item");
    div.innerHTML = `<div class="accordion-header">${item.title}</div>
                     <div class="accordion-content"><p>${item.content}</p></div>`;
    container.appendChild(div);
});
