window.onload = () => {

    const search_btn = document.querySelector('#search_btn');
    const input = document.querySelector('#search');
    const searching = document.querySelector('#searching');
    const menu = document.querySelector('.menu-list');
    const gamb = document.querySelector('.header__gamb');
    const sidebar = document.querySelector('.sidebar');
    const dashboard = document.querySelector('.dashboard');

    gamb.onclick = () => {
        sidebar.classList.toggle('sidebar__open');
        dashboard.classList.toggle('dashboard__open');
        dashboard.classList.toggle('main__close');
    }


    search_btn.onclick = () => {
        input.classList.toggle('search_open');
        searching.classList.toggle("searching");
        menu.classList.toggle('animation-slide');
    }

    const popup_btn = document.querySelector('#dashboard__btn');
    const popup_open = document.querySelector('#popup');
    const popup_close = document.querySelector('.popup__close');
    popup_btn.onclick = () => {
        popup_open.classList.add('popup__open');
        popup_open.classList.add('animation-open');
    }
    popup_close.onclick = () => {
        popup_open.classList.remove('popup__open');
        popup_open.classList.remove('animation-open');
    }
}


