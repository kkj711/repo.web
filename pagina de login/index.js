function enviar () {
	let bancoDDNome = "fulano";
	let bancoDDSenha = "123";
	let usuario = document.getElementById("usuario").value;
	let senha = document.getElementById("senha").value;
	if (usuario != bancoDDNome) {
		alert("Usuário e senha incorretos")
	}
	if (senha != bancoDDSenha) {
		alert("Usuário e senha incorretos")
	}
	if (usuario = bancoDDNome) {
		// redirecionar
	}	
	if (senha = bancoDDSenha) {
		// redirecionar
	}
}