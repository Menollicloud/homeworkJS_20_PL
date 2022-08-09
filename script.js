// Написать скрипт, который добавит класс `last` всем последним li в группах.
// Написать функцию setFirstItemClassName(level), 
// где level - это номер уровня вложенности, в котором нужно произвести изменения. 
// Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
// * при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды (transaction)

const rootList = document.querySelector('.root');

function setFirstItemClassName(level, element) {
    level--;

    if(level > 0) {
        [...element.children].forEach(child => setFirstItemClassName(level, child));
    } else {
        element.firstElementChild.classList.add('firstItem');
        element.lastElementChild.classList.add('lastItem');
    }
};

setFirstItemClassName(1, rootList);