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

/*
    // Создание слайдера
    let currentIndex = 0;
    const slider = document.querySelectorAll(".news__card");
    const prevButton = document.querySelector(".news__left");
    const nextButton = document.querySelector(".news__right");
    const visibleCards = 3;
    updateSlider();

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slider.length - visibleCards;
            }
            updateSlider();
        });
    }
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (currentIndex < slider.length - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });
    }

    function updateSlider() {
        slider.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCards) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
*/

    // Массивы
    const newsContainer = document.querySelector(".news");
    if (newsContainer) {
        const dataTitleNews = [
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
    if (headerMenu) {
        const headerList = headerMenu.querySelector('.header__list');
        const menuData = {
            link1: {
                link: 'index.html',
                title: 'Главная',
            },
            link4: {
                link: 'biography.html',
                title: 'Биография',
            },
            link3: {
                link: 'shop.html',
                title: 'Магазин',
            }
        }
        const createLink = (UrlLink, title) => {
            const link = `<li class="header__item"><a class="header__link" href="${UrlLink}">${title}</a></li>`;
            return link;
        }
        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.link, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);
        }
    }

    const cardsImages = document.querySelector(".images");
    if (cardsImages) {
        const cardListImages = cardsImages.querySelector(".images__list");

        // Пример URL для получения данных с сервера
        const apiUrl = "images.json";

        // Функция для создания карточки
        const createCard = (imageUrl, imageAlt, imageWidth) => {
            // Шаблонные строки и подстановки
            const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;

            return image;
        };
        // Загрузка данных с сервера
        fetch(apiUrl)
            .then((response) => response.json())
            .then((images) => {
                console.log(images); // Данные
                console.log(typeof images); // Тип полученных данных

                images.forEach((item) => {
                    const cardElement = createCard(
                        item.imageUrl,
                        item.imageAlt,
                        item.imageWidth
                    );
                    cardListImages.insertAdjacentHTML("beforeend", cardElement);
                });


                const pictures = document.querySelectorAll(".images__picture");
                if (pictures) {
                    // Перебираем каждое изображение
                    pictures.forEach((picture) => {
                        picture.addEventListener("click", () => {
                            // Получаем родительский элемент (li)
                            const parentItem = picture.parentElement;

                            // Получаем все изображения в родительском элементе
                            const parentPictures =
                                parentItem.querySelectorAll(".images__picture");

                            // Переключаем видимость изображений
                            parentPictures.forEach((parentPictures) => {
                                if (parentPictures !== picture) {
                                    parentPictures.style.display = "block"; // Показываем другое изображение
                                } else {
                                    parentPictures.style.display = "none"; // Скрываем текущее изображение
                                }
                            });
                        });
                    });
                }

            });
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
        }, 1000); // Задержка 1 секунда
    }


    // объявляем переменную sliders,куда помещаем элемент с классом swiper
    const sliders = document.querySelector('.mySwiper');
    //проверяем существует ли элемент
    if (sliders) {
        const swiper = new Swiper(sliders, {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


// Слайдер. Биография.
    var swiper = new Swiper(".mySwiperr", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-paginationn",
        },
      });


// Функция открытия модального окна
function openModal(groupName, groupImgSrc, description) {
    const modal = document.getElementById('modalWindow');
    const title = document.getElementById('modalTitle');
    const image = document.getElementById('modalImage');
    const desc = document.getElementById('modalDescription');
    
    // Заполняем данные
    title.textContent = groupName;
    image.src = groupImgSrc;
    desc.textContent = description || 'Описание отсутствует';
    
    // Показываем модальное окно
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modalWindow');
    modal.style.display = 'none';
}

// Обработчик закрытия окна при клике на элемент ".close-button"
document.querySelector('.close-button').addEventListener('click', function(event){
    event.preventDefault();
    closeModal();
});

// Открываем модалку при клике на каждую группу
const groups = document.querySelectorAll('.group');
groups.forEach((group) => {
    group.addEventListener('click', () => {
        const name = group.querySelector('.group__name').textContent.trim();  
        const imgSrc = group.querySelector('.group__img').src;
        
        // Простое описание по названию группы
        let description = '';
        switch(name.toLowerCase()) {
            case 'bts':
                description = 'Корейская группа BTS — одна из самых популярных K-pop-групп в мире.';
                break;
            case 'txt':
                description = 'TXT — молодой корейский бойз-бэнд от агентства Big Hit Entertainment.';
                break;
            case 'seventeen':
                description = 'Seventeen — многонациональная южнокорейская группа с уникальным стилем музыки.';
                break;
            case 'ateez':
                description = 'ATEEZ — музыкальная группа с мощным вокалом и энергичными выступлениями.';
                break;
            case 'stray kids':
                description = 'Stray Kids — коллектив из Южной Кореи, известный своими хип-хоп треками и уникальными визуальными эффектами.';
                break;
            case 'enhypen':
                description = 'ENHYPEN — молодая K-pop группа, ставшая популярной благодаря участию в шоу I-LAND.';
                break;
        }
        
        openModal(name, imgSrc, description);
    });
});


    





























});
