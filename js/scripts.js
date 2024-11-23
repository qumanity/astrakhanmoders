// Пример данных (вместо базы данных)
const services = [
    { id: 1, name: "Разработка веб-сайтов", description: "Создание уникальных веб-сайтов под ключ." },
    { id: 2, name: "SEO-оптимизация", description: "Оптимизация сайтов для поисковых систем." },
    { id: 3, name: "Техническая поддержка", description: "Поддержка и обновление вашего сайта." }
];

// Загрузка данных на страницу
document.addEventListener("DOMContentLoaded", () => {
    const servicesList = document.getElementById("services-list");

    services.forEach(service => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
        servicesList.appendChild(listItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Функция для плавного появления контента
    function showContent() {
        document.getElementById("content").classList.add("show-content");
    }

    // Загружаем контент через AJAX
    function loadPage(url) {
        // Скрыть текущий контент
        document.getElementById("content").classList.remove("show-content");

        // Загружаем новый контент через fetch
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Обновляем основной контент страницы
                document.getElementById("content").innerHTML = data;
                // Обновляем URL без перезагрузки
                history.pushState({}, "", url);
                // Плавно показываем новый контент
                setTimeout(showContent, 500); // Ожидаем окончания скрытия старого контента
            });
    }

    // Обработчик кликов на ссылки
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Предотвращаем обычный переход по ссылке
            loadPage(link.href); // Загружаем новую страницу
        });
    });

    // При первой загрузке страницы показываем контент
    showContent();

    // Обрабатываем возврат по истории
    window.onpopstate = function() {
        loadPage(location.pathname);
    };
});
