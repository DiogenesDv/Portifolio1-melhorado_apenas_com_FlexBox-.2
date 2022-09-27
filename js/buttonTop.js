//1 pegue o botao
//2 Quando o usuário rolar para baixo 20px da parte superior do documento, mostre o botão
//3 Quando o usuário clicar no botão, role até o topo do documento

//1
let mybutton = document.getElementById("myBtn");
//2
window.onscroll = function(){
	scrollFunction();
};

function scrollFunction(){
	if (document.body.scrolltop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	}else{
		mybutton.style.display = "none";
	}
}
//3
function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}