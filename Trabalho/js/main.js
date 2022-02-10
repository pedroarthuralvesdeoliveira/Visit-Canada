window.onload = function () {

    var contador = 0
    var audio_ing = new Audio('../sounds/yarn.mp3')

    document.getElementById('btn').addEventListener('click', function () {
        audio_ing.play()
    })

    document.querySelector('.continue').addEventListener('click', function () {
        contador += 1
        switch (contador) {
            case 1:
                document.getElementById('bottom1').innerHTML = 'Hoser'
                document.getElementById('bottom2').innerHTML = 'Unpleasant person'
                document.querySelector('.imagem').src = '../img/hoser.jpg'
                audio_ing = new Audio('../sounds/hoser.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 2:
                document.getElementById('bottom1').innerHTML = 'Loonie'
                document.getElementById('bottom2').innerHTML = 'Currency, the Canadian dollar.'
                document.querySelector('.imagem').src = '../img/loonie.jpeg'
                audio_ing = new Audio('../sounds/loonie.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 3:
                document.getElementById('bottom1').innerHTML = 'Kerfuffle'
                document.getElementById('bottom2').innerHTML = 'Slang to say that a situation is too crazy or confusing.'
                document.querySelector('.imagem').src = '../img/Kerfuffle.jpeg'
                audio_ing = new Audio('../sounds/kerfuffle.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 4:
                document.getElementById('bottom1').innerHTML = 'Mawga'
                document.getElementById('bottom2').innerHTML = 'When a person is not feeling very well'
                document.querySelector('.imagem').src = '../img/Mawga.jpeg'
                audio_ing = new Audio('../sounds/mawga.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 5:
                document.getElementById('bottom1').innerHTML = 'Owly'
                document.getElementById('bottom2').innerHTML = 'When a person is in a bad mood'
                document.querySelector('.imagem').src = '../img/Owly.jpg'
                audio_ing = new Audio('../sounds/owly.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 6:
                document.getElementById('bottom1').innerHTML = 'Runners'
                document.getElementById('bottom2').innerHTML = 'Specific tennis for running and gym.'
                document.querySelector('.imagem').src = '../img/Runners.jpeg'
                audio_ing = new Audio('../sounds/runners.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 7:
                document.getElementById('bottom1').innerHTML = 'Take Off'
                document.getElementById('bottom2').innerHTML = 'Used to talk that will leave some place suddenly.'
                document.querySelector('.imagem').src = '../img/TakeOff.jpeg'
                audio_ing = new Audio('../sounds/taken.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 8:
                document.getElementById('bottom1').innerHTML = 'Weather In'
                document.getElementById('bottom2').innerHTML = 'Expression used to talk about bad weather.'
                document.querySelector('.imagem').src = '../img/Weatherin.jpeg'
                audio_ing = new Audio('../sounds/weather.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 9:
                document.getElementById('bottom1').innerHTML = 'Washroom'
                document.getElementById('bottom2').innerHTML = 'Bathroom in Canadian.'
                document.querySelector('.imagem').src = '../img/Washroom.jpg'
                audio_ing = new Audio('../sounds/washroom.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 10:
                document.getElementById('bottom1').innerHTML = 'Toque'
                document.getElementById('bottom2').innerHTML = 'Type of cap made with very popular knitting'
                document.querySelector('.imagem').src = '../img/toque.jpeg'
                audio_ing = new Audio('../sounds/toque.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 11:
                document.getElementById('bottom1').innerHTML = 'Pop'
                document.getElementById('bottom2').innerHTML = 'Canadian English version for soda.'
                document.querySelector('.imagem').src = '../img/pop.jpg'
                audio_ing = new Audio('../sounds/pop.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break

            case 12:
                document.getElementById('bottom1').innerHTML = 'Double-double'
                document.getElementById('bottom2').innerHTML = 'Coffee made with two cubes of sugar and two layers of cream.'
                document.querySelector('.imagem').src = '../img/double.jpg'
                audio_ing = new Audio('../sounds/double-double.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            case 13:
                document.getElementById('bottom1').innerHTML = 'Poutine'
                document.getElementById('bottom2').innerHTML = 'They are fries with cheese cubes and spice sauce'
                document.querySelector('.imagem').src = '../img/poutine.jpg'
                audio_ing = new Audio('../sounds/poutine.mp3')
                document.getElementById('btn').addEventListener('click', function () {
                    audio_ing.play()
                })
                break
            
            default:
                window.location.href = '../exercises/exercicios.html'
                break
        }
    })
}
