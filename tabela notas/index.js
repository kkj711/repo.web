function inserir(){
	const linhaAluno = new Array();

	let nomeAluno = document.getElementById("nomeAluno").value;
	let notaAluno = document.getElementById("nota").value;

	linhaAluno[0] = nomeAluno;
	linhaAluno[1] = notaAluno;

	let linhaNome = document.getElementById("trNome");
	let linhaNota = document.getElementById("trNota");

	let colunaNome = document.createElement("td");
	colunaNome.innerHTML = linhaAluno[0];

	let colunaNota = document.createElement("td");
	colunaNota.innerHTML = linhaAluno[1];

	linhaNome.appendChild(colunaNome);
	linhaNota.appendChild(colunaNota)
}