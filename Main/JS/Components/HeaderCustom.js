export default class HeaderCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `
			<div class="wrapper-hb">
				<button class="bouton-menu" onclick="menu()">
					<div class="hamburger">
						<span class="barre-1"></span>
						<span class="barre-2"></span>
					</div>
				</button>
			</div>
			<h3 id="title"></h3>
			<div class="wrapper-sb">
				<input type="checkbox" id="input">
				<div class="search-bar">
					<input placeholder="Recherche" list="suggestions">
					<span class="label">Recherche</span>
					<datalist id="suggestions">
						<option value="Acceuil">
						<option value="Caroussel">
						<option value="Graphique">
						<option value="A propos">
						<option value="Prendre RDV">
						<option value="Témoignages">
					</datalist>
				</div>
				<label for="input" class="loupe">
					<img src="../Images/loupe.png" alt="loupe">
				</label>
			</div>`
		this.h3 = document.querySelector('#title')
		this.h3.innerHTML = document.body.getAttribute('nom-page')
	}

}