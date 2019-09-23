//Browser identify
function browserIdentify (){
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if(isIE11 === true){
		document.write("<div id='internet-explorer-alert'><div class='modal-content'><span onclick='hideModal()'>cerrar</span><h2>Mejora tu experiencia</h2><p>Apreciado intermediario, para disfrutar más la experiencia en nuestro Escritorio Virtual de SBS le recomendamos utilizar los siguientes navegadores:</p><div class='browsers'><a href='https://www.mozilla.org/es-ES/firefox/new/'><img src='https://sbs.modyocdn.com/uploads/9096eee0-1429-45f7-996e-23b6e9c39a47/original/Mozilla.svg'></a><a href='https://www.google.com/chrome/'><img src='https://sbs.modyocdn.com/uploads/99597d84-1c53-45b9-b1e2-9d982767062c/original/Google.svg'></a><a href='https://www.microsoft.com/en-us/windows/microsoft-edge'><img src='https://sbs.modyocdn.com/uploads/d309ae0b-5d34-4268-b102-6138ea3814db/original/Microsoft_Edge.svg'></a></div></div></div> ");
	}
}
function hideModal(){
	document.getElementById("internet-explorer-alert").style.display = "none";
}
window.onpaint = browserIdentify();
