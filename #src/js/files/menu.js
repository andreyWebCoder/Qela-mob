
window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		// ====== Меню
		if (targetElement.classList.contains('qela-btn-menu') || targetElement.classList.contains('qela-burger')) {
			if (document.querySelector('.qela-btn-menu') || document.querySelector('.qela-burger')) {
				document.querySelector('.qela-menu').classList.toggle('active');
				document.querySelector('.qela-btn-menu').classList.toggle('active');
			}
		} else if (!targetElement.closest('#gela-nav') && document.querySelector('.qela-menu.active')) {
			document.querySelector('.qela-menu').classList.remove('active');
			document.querySelector('.qela-btn-menu').classList.remove('active');
		}
		//== випадашки search
		if (targetElement.classList.contains('qela-search-btn')) {
			if (document.querySelector('.qela-search-btn')) {
				document.querySelector('.qela-wrapper').classList.toggle('qela--visible');
			}
		} else if (!targetElement.closest('.qela-wrapper') && document.querySelector('.qela-wrapper.qela--visible')) {
			document.querySelector('.qela-wrapper').classList.remove('qela--visible');
		}
		//== випадашки dots
		if (targetElement.classList.contains('dots-table')) {
			if (document.querySelector('.dots-table')) {
				document.querySelector('.dots-table').classList.toggle('active');
			}
		} else if (!targetElement.closest('.dots-table') && document.querySelector('.dots-table.active')) {
			document.querySelector('.dots-table').classList.remove('active');
		}
	}
}