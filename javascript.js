// JavaScript Document

function saludar(){
alert("hola");
}

$("#saludo").click(saludar);


function guardar(){
	localStorage.setItem("nombre", "Pepe");
}

function ver(){
	alert(localStorage.getltem("nombre"));
	}

$("#btn_guardar").click(guardar);

$("#btn_ver").click(ver);






function hay(){
	alert("hay señal");
}
function noHay(){
	alert("no hay señal");
}

window.addEventListener();
window.addEventListener('online',hay);
window.addEventListener('online',noHay);