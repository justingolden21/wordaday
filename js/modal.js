function modalSetup() {

	let modal = document.getElementById('modal');
	let btn = document.getElementById('modal-btn');
	let close = document.getElementsByClassName('close')[0];

	btn.onclick = function() {
		modal.style.display = 'block';
	}

	close.onclick = function() {
		modal.style.display = 'none';
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	}

	window.onkeydown = function(event) {
		if (event.key == 'Escape') {
			modal.style.display = 'none';
		}
	}

}