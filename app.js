'use strict'

const containerList = document.querySelector('.accordian__list');

closeAllAccordians();

function closeAllAccordians() {
    document.querySelectorAll('.accordian__item').forEach(accordian => {

        const accordianSubtitle = accordian.querySelector('.accordian__subtitle');

        const accordianArrow = accordian.querySelector('.accordian__arrow');

        const accordianDescription = accordian.querySelector('.accordian__description');

        accordianSubtitle.classList.remove('accordian__subtitle--active');

        accordianArrow.classList.remove('accordian__arrow--active');

        accordianDescription.classList.add('accordian__description--collapsed');

    });
}

function handlerAccordianOpen(accordian) {

    const accordianSubtitle = accordian.querySelector('.accordian__subtitle');

    const accordianArrow = accordian.querySelector('.accordian__arrow');

    const accordianDescription = accordian.querySelector('.accordian__description');

    if (!accordianSubtitle.classList.contains('accordian__subtitle--active')) {

        accordianSubtitle.classList.add('accordian__subtitle--active');

        accordianArrow.classList.add('accordian__arrow--active');

        accordianDescription.classList.remove('accordian__description--collapsed');
    }

}


containerList.addEventListener('click', e => {

    const accordian = e.target.closest('.accordian__item');

    if (!accordian) return;

    closeAllAccordians();

    handlerAccordianOpen(accordian);

});

