'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    // * 1. Начало.
    // * 2. Получаем все карточки. Получаем все элементы (полная новость).
    // * 3. Проверка массива карточек (пустой или нет).
    // *    3.1.  Да: продолжаем.
    // *    3.2. Нет: продолжаем.
    // * 4. Нажали на кнопку "Читать дальше".
    // *    4.1. Да: открываем полную карточку новости.
    // *    4.2. Нет: продолжаем.
    // * 5. Нажали на кнопку "закрыть"(крестик).
    // *    5.1. Да: новость закрыта.
    // *    5.2. Нет: продолжаем.
    // * 6. Конец.

// Динамический вывод карточек
// const newsCard = document.querySelector('.news');
// if (newsCard) {
//     const newsWrap = newsCard.querySelector('.news__wrap');
//     const newsCardData = {

//         news1: {
//             image: 'images/minnie1.jpg', 
//             subtitle: 'Новость 1',
//             desc:'(G)I-DLE вокалистка Минни выпустила свой дебютный сольный сингл «Her» вместе с одноимённым мини-альбомом',
//             button: 'Читать дальше',
//         },
//         news2: {
//             image: 'images/jisoo1.jpg', 
//             subtitle: 'Новость 2',
//             desc:'Джису из BLACKPINK выпустила свой сольный дебютный мини-альбом «Amortage» вместе с музыкальным видео на заглавную песню «Earthquake»',
//             button: 'Читать дальше',
//         },
//         news3: {
//             image: 'images/felix1.jpg', 
//             subtitle: 'Новость 3',
//             desc:'Участник Stray Kids Феликс сломал руку после «незначительной» автомобильной аварии, о которой сообщил его лейбл JYP Entertainment',
//             button: 'Читать дальше',
//         },
//         news4: {
//             image: 'images/Cosmosy', 
//             subtitle: 'Новость 4',
//             desc:'(G)I-DLE вокалистка Минни выпустила свой дебютный сольный сингл «Her» вместе с одноимённым мини-альбомом',
//             button: 'Читать дальше',
//         },
//         news5: {
//             image: 'images/echo.png', 
//             subtitle: 'Новость 5',
//             desc:'(G)I-DLE вокалистка Минни выпустила свой дебютный сольный сингл «Her» вместе с одноимённым мини-альбомом',
//             button: 'Читать дальше',
//         },
//         news6: {
//             image: 'images/jennie.png', 
//             subtitle: 'Новость 6',
//             desc:'(G)I-DLE вокалистка Минни выпустила свой дебютный сольный сингл «Her» вместе с одноимённым мини-альбомом',
//             button: 'Читать дальше',
//         },
//         news7: {
//             image: 'images/jin.png', 
//             subtitle: 'Новость 7',
//             desc:'(G)I-DLE вокалистка Минни выпустила свой дебютный сольный сингл «Her» вместе с одноимённым мини-альбомом',
//             button: 'Читать дальше',
//         },

//     }

//     const createCard = (image, subtitle, desc, button) => {
//         const card = `
//         <div class="news__card">
//             <img class="news__image" src="${image}" alt="Фото" width="200">
//             <p class="news__subtitle">${subtitle}</p>
//             <p class="news__desc">${desc}</p>
//             <button class="news__link" data-id="1"> ${button}</button>
//         </div>
//         `;
//         return card;
//     }
//     for (const cardKey in newsCardData) {
//         const card = newsCardData[cardKey];
//         const cardElement = createCard(card.image, card.subtitle, card.desc, card.button);
//         newsCard.insertAdjacentHTML('beforeend', cardElement);
//     }
// }

// Модальное окно
    const news__link = document.querySelectorAll(".news__link");
    // news__link.addEventListener('click', () => {
    //     console.log ("Нажали на кнопку Читать дальше");
    // })
    news__link.forEach((item, index) => {

        item.addEventListener('click', () => {
            const dataid = item.dataset.id;
            const modalApplication = document.querySelector(".applications[data-id='" + dataid + "']")
            modalApplication.removeAttribute("hidden")
        
// Закрытие модального окна
            window.addEventListener("click", (event) => {
                if (event.target === modalApplication) {
                    modalApplication.setAttribute("hidden", true)
                }
            });

            const closeModalButton = modalApplication.querySelector(".application__close");
            closeModalButton.addEventListener("click", () => {
                modalApplication.setAttribute("hidden", true);
            });
        });
    });


// Создание слайдера
    let currentIndex = 0; 
    const slider = document.querySelectorAll(".news__card");
    const prevButton = document.querySelector(".news__left");
    const nextButton = document.querySelector(".news__right");
    const visibleCards = 3;
    updateSlider();

    if (prevButton){
    prevButton.addEventListener("click", () =>{
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slider.length - visibleCards;
        }
        updateSlider();
    });
}
if (nextButton){
    nextButton.addEventListener("click", () =>{
        if (currentIndex < slider.length - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });
}

    function updateSlider() {
        slider.forEach((item, index)=>{
            if (index >= currentIndex && index < currentIndex + visibleCards) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }


// Массивы
const newsContainer = document.querySelector (".news");
if (newsContainer) {
    const dataTitleNews= [
        "Минни из (G)I-DLE дебютировала с сольным мини-альбомом «Her»",
        "Джису выпустила дебютный мини-альбом «Amortage»",
        "Феликс сломал руку после автомобильной аварии",
        "Новость 4",
        "ECHO - новый альбом Джина из BTS",
        "Новость 6",
        "Новость 7",
    ];
    const titleNews = newsContainer.querySelectorAll(".news__subtitle");
    titleNews.forEach((item, index) => {
        item.textContent = dataTitleNews[index];
    });
}

//Динамический вывод навигационного меню
const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
    const headerList = headerMenu.querySelector('.header__list');
    const menuData = {
        link1: {
            link:'index.html',
            title: 'Главная',
        },
        link4: {
            link:'biography.html',
            title: 'Биография',
        },
        link3: {
            link:'shop.html',
            title: 'Магазин',
        }
    }
    const createLink = (UrlLink, title) =>{
        const link = `<li class="header__item"><a class="header__link" href="${UrlLink}">${title}</a></li>`;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.link, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}

// предзагрузчик
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // Показываем контент
        content.style.display = "block";

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}


});
