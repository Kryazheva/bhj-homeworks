const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');
const arrMenuSub = Array.from(menuSub);
const arrMenuLinks = Array.from(menuLink);


function closeAllMenus(array, mainMenu) {
    array.forEach(function (menu) {
        (mainMenu === menu.closest('ul.menu_main')) ? menu.classList.remove('menu_active') : '';
        });
};
arrMenuSub.forEach(function (menu) {
    menu.previousElementSibling.onclick = function () {
        if (menu.classList.contains('menu_active')) {
            closeAllMenus(arrMenuSub, menu.closest('ul.menu_main'));
            return false;
        } else {
            closeAllMenus(arrMenuSub, menu.closest('ul.menu_main'));
            menu.classList.add('menu_active');
            return false;
        };
    };
});