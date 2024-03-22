function trocar() {
	let estado = document.getElementById('select').value;
	let img = document.getElementById('imagem');
	img.src = ("mapas/" + estado + ".gif");
}