alert("We recommend that you do the Listening Activity before");

class X{

	constructor(img_p, audio_p, word_p){
		this.img_path = img_p;
		this.audio_path = audio_p;
		this.word_validate = word_p.toUpperCase();
	}

	validate(word_written){
		return this.word_validate === word_written.toUpperCase();
	}

	show(){

		document.querySelector('.imagem').src = this.img_path;
		var audio_ing = new Audio(this.audio_path);

		var audiobtn = document.getElementById('btn');

		var old_element = audiobtn;
		var new_element = old_element.cloneNode(true);
		old_element.parentNode.replaceChild(new_element, old_element);

		new_element.addEventListener(	'click', function () {audio_ing.play();}	)

	}
}

function initX(){

	var l = [];

	l.push(new X("../img/img_vocabulary2.jpg",'../sounds/yarn.mp3', 'yarn' ) );
	l.push(new X("../img/hoser.jpg",'../sounds/hoser.mp3', 'hoser' ) );
	l.push(new X("../img/loonie.jpeg",'../sounds/loonie.mp3', 'loonie' ) );
	l.push(new X("../img/Kerfuffle.jpeg",'../sounds/kerfuffle.mp3', 'kerfuffle' ) );
	l.push(new X("../img/Mawga.jpeg",'../sounds/mawga.mp3', 'mawga' ) );
	l.push(new X("../img/Owly.jpg",'../sounds/owly.mp3', 'owly' ) );
	l.push(new X("../img/Runners.jpeg",'../sounds/runners.mp3', 'runners' ) );
	l.push(new X("../img/TakeOff.jpeg",'../sounds/taken.mp3', 'take off' ) );
	l.push(new X("../img/Weatherin.jpeg",'../sounds/weather.mp3', 'weather_in' ) );
	l.push(new X("../img/Washroom.jpg",'../sounds/washroom.mp3', 'washroom' ) );
	l.push(new X("../img/toque.jpeg",'../sounds/toque.mp3', 'toque' ) );
	l.push(new X("../img/pop.jpg",'../sounds/pop.mp3', 'pop' ) );
	l.push(new X("../img/double.jpg",'../sounds/double-double.mp3', 'double-double' ) );
	l.push(new X("../img/poutine.jpg",'../sounds/poutine.mp3', 'poutine' ) );

	return l;

}

window.onload = function () {

	var contador = 0;
	var vetor_coisas = initX();	

	if(vetor_coisas){
		vetor_coisas[0].show();
	}

	function updateShit(){
		if(contador >= 0 && contador <= vetor_coisas.length){
			vetor_coisas[contador].show();
			document.querySelector('#form').value = "";
		}
		else{
			window.location.href = '../exercises/exercicios.html'
		}
	}

	document.querySelector('.continue').addEventListener('click', function () {
		if(vetor_coisas[contador].validate(document.querySelector('#form').value)){
			alert('Congratulations!');
			contador++;
			updateShit();
			window.location.href = '../exercises/exercicios.html'
		}else{
			alert('Try again!')
		}
	})

	document.querySelector('.back').addEventListener('click', function () {
		contador--;
		updateShit();
	})

}
