function exibirComentario() {
	var nome       = document.getElementById('nome').value;
	var comentario = document.getElementById('comentario').value;
	var result     = document.getElementById('result');
	var corTexto   = document.getElementById('cor-texto').value;
	var corFundo   = document.getElementById('cor-fundo').value;
	

	result.innerHTML += '<div class="result" style="color: ' + corTexto + '; background-color: ' + corFundo + ';"><strong>'+ nome + '</strong><hr /><br />' + comentario + '</div>';

	document.getElementById('nome').value       = '';
	document.getElementById('comentario').value = '';
}


