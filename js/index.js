/*
// Editor Вариан 1
const elements = document.querySelectorAll('button');

elements.forEach(element =>{
	element.addEventListener('click', () =>{

		let command = element.dataset['element'];
		window.navigator.clipboard(command, false, null);
	});
});
// Editor Вариан 2
const button = document.querySelectorAll('button');
textField.document.designMode = "On";
for(let i=0; i<button.length; i++){
	button[i].addEventListener('click', ()=>{
		let cmd = button[i].getAttribute('data-cmd');
		if(button[i].name === "active"){
			button[i].classList.toggle('active');
		}
	});
}
*/


// Modal window
const btns = document.querySelectorAll('.controls__button'),
			modalOverlay = document.querySelector('.modal__overlay'),
			modals = document.querySelectorAll('.modal');

/* Открытие модальных окон при нажатии кнопок */
btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});
/* Модальное окно закрывается при нажатие клавиши Esc */
btns.forEach((el) => {
	el.addEventListener('keydown', (e) =>{
	if(e.code === "Escape"){
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
	});
});
/* Модельное окно закрывается при клике не в рамках модального окна */
modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});



// Slider
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	let i;
	const slides = document.getElementsByClassName("comic-slider__item");
	const dots = document.getElementsByClassName("comic-slider__dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" comic-slider__dot--active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " comic-slider__dot--active";
}
