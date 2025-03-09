const btnChatBottom = document.querySelector('.qela-chat-btn');
const navBottom = document.querySelector('.qela-bottom')
const observer = new ResizeObserver(entrirs => {
	const elem = entrirs[0];
	console.log(elem);
	let heightAside = elem.borderBoxSize[0].blockSize;
	btnChatBottom.style.bottom = heightAside + 'px';
	console.log(btnChatBottom.style.bottom = heightAside + 'px');

})
observer.observe(navBottom);