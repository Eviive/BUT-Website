//***************Toggle du menu***************

function menu() {
	var body = document.body; 											// sélection du body

    body.classList.toggle('menu-open') 									// toggle la classe .menu-visible sur le body
}

function searchbar() {
	var header = document.querySelector('header-custom')

	header.classList.toggle('sb-open')
}