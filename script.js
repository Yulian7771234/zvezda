const lenormandCards = [
    { name: "Всадник", meaning: "Новости, вести, скорое событие.", img: "img/всадник.jpg" },
    { name: "Клевер", meaning: "Удача, мелкий выигрыш, везение.", img: "img/клевер.jpg" },
    { name: "Корабль", meaning: "Путешествие, переезд, перемены.", img: "img/корабль.jpg" },
    { name: "Дом", meaning: "Семья, уют, стабильность.", img: "img/дом.jpg" },
    { name: "Дерево", meaning: "Здоровье, рост, долголетие.", img: "img/дерево.jpg" },
    { name: "Тучи", meaning: "Сомнения, препятствия. Скоро прояснится.", img: "img/тучи.jpg" },
    { name: "Змея", meaning: "Хитрость, измена, мудрость.", img: "img/змея.jpg" },
    { name: "Гроб", meaning: "Завершение цикла, трансформация.", img: "img/гроб.jpg" },
    { name: "Букет", meaning: "Подарок, радость, комплимент.", img: "img/букет.jpg" },
    { name: "Коса", meaning: "Резкий поворот, расставание.", img: "img/коса.jpg" },
    { name: "Метла", meaning: "Ссоры, споры, очищение.", img: "img/метла.jpg" },
    { name: "Птицы", meaning: "Разговоры, суета, пара.", img: "img/птицы.jpg" },
    { name: "Ребёнок", meaning: "Начало, доверие, новое хобби.", img: "img/ребенок.jpg" },
    { name: "Лиса", meaning: "Обман, хитрость. Проверяйте информацию.", img: "img/лиса.jpg" },
    { name: "Медведь", meaning: "Сила, власть, покровитель.", img: "img/медведь.jpg" },
    { name: "Звезды", meaning: "Удача, творчество, духовный рост.", img: "img/звезда.jpg" },
    { name: "Аист", meaning: "Перемены, переезд, беременность.", img: "img/аист.jpg" },
    { name: "Собака", meaning: "Дружба, верность, помощь друга.", img: "img/собака.jpg" },
    { name: "Башня", meaning: "Одиночество, официальность, институты.", img: "img/башня.jpg" },
    { name: "Сад", meaning: "Общество, тусовка, публичное мероприятие.", img: "img/сад.jpg" },
    { name: "Гора", meaning: "Препятствие, задержка. Нужно усилие.", img: "img/гора.jpg" },
    { name: "Развилка", meaning: "Выбор, альтернатива. Доверьтесь интуиции.", img: "img/развилка.jpg" },
    { name: "Крысы", meaning: "Потери, воровство, суета.", img: "img/крысы.jpg" },
    { name: "Сердце", meaning: "Любовь, страсть, сердечные дела.", img: "img/сердце.jpg" },
    { name: "Кольцо", meaning: "Союз, обязательства, партнёрство.", img: "img/кольцо.jpg" },
    { name: "Книга", meaning: "Тайна, обучение, секрет.", img: "img/книга.jpg" },
    { name: "Письмо", meaning: "Документы, сообщение, официальная бумага.", img: "img/письмо.jpg" },
    { name: "Мужчина", meaning: "Важный мужчина в вашей жизни.", img: "img/мужчина.jpg" },
    { name: "Женщина", meaning: "Важная женщина в вашей жизни.", img: "img/женщина.jpg" },
    { name: "Лилия", meaning: "Гармония, сексуальность, зрелость.", img: "img/лилии.jpg" },
    { name: "Солнце", meaning: "Успех, тепло, счастье.", img: "img/солнце.jpg" },
    { name: "Луна", meaning: "Интуиция, эмоции, подсознание.", img: "img/луна.jpg" },
    { name: "Ключ", meaning: "Решение, открытие дверей.", img: "img/ключ.jpg" },
    { name: "Рыбы", meaning: "Финансы, прибыль, изобилие.", img: "img/рыбы.jpg" },
    { name: "Якорь", meaning: "Стабильность, безопасность, остановка.", img: "img/якорь.jpg" },
    { name: "Крест", meaning: "Судьба, карма, испытание.", img: "img/крест.jpg" }
];

function initServices() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.getAttribute('data-service') || card.querySelector('h3')?.innerText || 'услуга';
            alert(`✨ Благодарю за интерес к услуге «${serviceName}». Напишите мне в MAX для записи. ✨`);
        });
    });
}

function getRandomCard() {
    return lenormandCards[Math.floor(Math.random() * lenormandCards.length)];
}

function updatePreviewCard(card) {
    const previewDiv = document.getElementById("cardPreview");
    if (previewDiv) {
        previewDiv.innerHTML = `<div class="card-placeholder">
            <img src="${card.img}" alt="${card.name}" class="preview-img" onerror="this.src='img/cards/back.png'">
        </div>`;
    }
}

function showPredictionModal(card) {
    const modal = document.getElementById("predictionModal");
    const modalText = document.getElementById("modalPredictionText");
    if (!modal) return;
    modalText.innerHTML = `
        <img src="${card.img}" alt="${card.name}" onerror="this.src='img/cards/back.png'">
        <h3 style="color:#ffd966;">${card.name}</h3>
        <p>${card.meaning}</p>
        <p style="margin-top:15px;">✨ Пусть звёзды укажут путь ✨</p>
    `;
    modal.style.display = "flex";
}

function fortune() {
    const card = getRandomCard();
    updatePreviewCard(card);
    showPredictionModal(card);
}

function initBurger() {
    const burger = document.getElementById("burgerMenu");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;
    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("active");
    });
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove("active");
        }
    });
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("active"));
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    const msgDiv = document.getElementById("contactFormMsg");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const msg = document.getElementById("contactMsg").value.trim();
        if (!name || !email || !msg) {
            msgDiv.innerHTML = "Заполните все поля";
            msgDiv.style.color = "#ffaa88";
            return;
        }
        msgDiv.innerHTML = "Спасибо! Я свяжусь с вами. ✨";
        msgDiv.style.color = "#ffd966";
        form.reset();
        setTimeout(() => msgDiv.innerHTML = "", 4000);
    });
}

function initModal() {
    const modal = document.getElementById("predictionModal");
    const closeSpan = document.querySelector(".close-modal");
    const closeBtn = document.querySelector(".modal-close-btn");
    if (!modal) return;
    const close = () => modal.style.display = "none";
    if (closeSpan) closeSpan.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
}

document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initContactForm();
    initModal();
    initServices();
    const fortuneBtn = document.getElementById("fortuneBtn");
    if (fortuneBtn) fortuneBtn.addEventListener("click", fortune);
});
