function validar(){

	var nome = form1.nome.value;
	var sobrenome = form1.sobrenome.value; 
	var email = form1.email.value;
	var rg = form1.rg.value;	
	var cpf = form1.cpf.value; 
	var passporte = form1.passporte.value;  
	var nResidencial = form1.nResidencial.value;  
	var rua = form1.rua.value;

	if(nome == "") {
		alert("Fill in the field name")
		form1.nome.focus();
		return false;

	}  else if (sobrenome == ""){
		alert("Fill in the last name field")
		form1.sobrenome.focus();
		return false;

	}  if(email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1){
		alert("Fill in the email field (use @ and .)!");
		form1.email.focus();
		return false;

	}  else if(rg == "" || rg.indexOf(".") == -1 || rg.indexOf("-") == -1 || rg.length < 9){ /* PARA VERIFICAR APENAS NUMEROS SE USA: (  isNaN(campo) ) */
		alert("Fill in the RG field correctly"); 
		form1.rg.focus();
		return false;

	}  else if(cpf == "" || cpf.indexOf(".") == -1 || cpf.indexOf("-") == -1 || cpf.length < 11){ /* PARA VERIFICAR APENAS NUMEROS SE USA: (  isNaN(campo) ) */
		alert("Fill in the field CPF correctly (numbers only)!");
		form1.cpf.focus();
		return false;

	}  else if(passporte == "" || passporte.length < 9){ /* PARA VERIFICAR APENAS NUMEROS SE USA: (  isNaN(campo) ) */
		alert("Fill in the Passport field correctly ");
		form1.passporte.focus();
		return false;

	}  else if( isNaN(nResidencial) ){ 		/* PARA VERIFICAR APENAS NUMEROS SE USA: (  isNaN(campo) ) */
		alert("Fill in the field number correctly (numbers only)!");
		form1.nResidencial.focus();
		return false;

	}  else if(rua == ""){
		alert("Fill in the field street correctly");
		form1.rua.focus();
		return false;

	} else {
		window.open('../pages/contato2.html'); /* ABRE A SEGUNDA PAGINA PARA PRENCHIMENTO */
	}

}



function validar2() {

	var cidade = form2.cidade.value;
	var estado = form2.estado.value;
	var fFixo = form2.fFixo.value;
	var celular = form2.celular.value;
	var nPai = form2.nPai.value;
	var nMae = form2.nMae.value;
	var senha = form2.senha.value;
	var rep_senha = form2.rep_senha.value;


	if (cidade == "") {
		alert ("Fill in the field city")
		form2.cidade.focus(); 
		return false;

	}  else if (estado == "" && estado != "AC" && estado != "AL" && estado != "AP" && estado != "AM" && estado != "BA"&& estado != "CE" && estado != "DF" && estado != "ES" && estado != "GO" && estado != "MA" && estado != "MT" && estado != "MS" && estado != "MG" && estado != "PA" && estado != "PB" && estado != "PR" && estado != "PE" && estado != "PI" && estado != "RJ" && estado != "RN" && estado != "RS" && estado != "RO" && estado != "RR" && estado != "SC" && estado != "SP" && estado != "SE" && estado != "TO") {
		alert ("Fill in the field State. Put only the acronym, please!")
		form2.estado.focus();
		return false; 

	}	else if (fFixo == "" || isNaN("-") == -1 || fFixo.length < 9 ) {
		alert ("Fill in the field the telephone (put dashes)")
		form2.fFixo.focus();
		return false;

	}  else if (celular == "" || isNaN("-") == -1 || celular.length < 9 ) { 
		alert ("Fill in the field cell phone (put dashes)")
		form2.celular.focus();
		return false; 
		
	} else if (nPai == "") {
		alert ("Fill in the field  name of the Father ")
		form2.nPai.focus();
		return false; 

	}  else if (nMae == "") {
		alert ("Fill in the field mother's name")
		form2.nMae.focus();
		return false; 

	}   else if (senha == "") {
		alert ("Fill in the field password")
		form2.senha.focus();
		return false; 
	}   else if (rep_senha == "" || rep_senha != senha) {
		alert ("Fill in the field repeat password. It doesn't have a password like this.")
		form2.rep_senha.focus();
		return false; 
	} else {
		window.open('../index.html');
	}
}