//FIX input search
let searchForm = document.querySelector('.search');
let btnCloze = document.querySelector('.search__close');
let btns = document.querySelector('.search__buttons');
let btnOpen = document.querySelector('.search__btn-open');
let formWrapper = document.querySelector('.search__wrapper');
let btnReset = document.querySelector('.form-search__reset');
let inputs = document.querySelectorAll('.input-search').forEach(function (inputs) {
	inputs.addEventListener('focus', function () {
		searchForm.classList.add('focus');
	}, true);
	inputs.addEventListener('blur', function () {
		if (this.value === '') {
			searchForm.classList.remove('focus');
		}
	}, true);
	inputs.addEventListener('input', function () {
		searchForm.classList.add('active');
		if (this.value === '') {
			searchForm.classList.remove('active');
		}
	})
	//FIX input open/cloze/reset

	btnOpen.addEventListener('click', function () {
		btns.classList.add('active-btn');
		formWrapper.classList.add('visible');

	})
	btnCloze.addEventListener('click', function () {
		btns.classList.remove('active-btn');
		formWrapper.classList.remove('visible');
		searchForm.classList.remove('active');
		if (window.innerWidth <= 990) {
			searchForm.classList.remove('focus');
		}
		inputs.value = "";
	})
	btnReset.addEventListener('click', function () {
		inputs.value = "";
		inputs.focus();
		searchForm.classList.remove('active');
	})
});



// input label pasword not show/show
let btnPass = document.querySelectorAll('.password');
btnPass.forEach(function (btn) {
	btn.addEventListener('click', function () {
		let targetPass = this.getAttribute('data-target');
		inputPass = document.querySelector(targetPass);
		if (inputPass.getAttribute('type') === 'password') {
			inputPass.setAttribute('type', 'text');
			// Иконка
			btn.classList.add('show');
			// Иконочниий шрифт
			// btn.classList.add('_ic-eye-line');
			// btn.classList.remove('_ic-eye-off-line');
		} else {
			inputPass.setAttribute('type', 'password');
			// btn.classList.remove('_ic-eye-line');
			// btn.classList.add('_ic-eye-off-line');
			btn.classList.remove('show')
		}
	});
}) 