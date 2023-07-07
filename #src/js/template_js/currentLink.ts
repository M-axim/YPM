let links: NodeListOf<HTMLOptionElement | HTMLOptGroupElement> = document.querySelectorAll('.filter-portfolio__link');
let createActiveLink: HTMLElement = document.querySelector('.filter-portfolio__link');
createActiveLink.classList.add('filter-portfolio__link_active');

for (let i: number = 0; i < links.length; i++) { // выводим каждый элемент по отдельности
    let link: HTMLElement = links[i]; // записываем их в одну переменную
    activeLink(link);
}

function activeLink(link: HTMLElement) {
    const _this: HTMLElement = link;
    link.addEventListener('click', () => {
        let activeLink: HTMLElement = document.querySelector('.filter-portfolio__link_active');
        activeLink.classList.remove('filter-portfolio__link_active');
        _this.classList.add('filter-portfolio__link_active');
    });
}
