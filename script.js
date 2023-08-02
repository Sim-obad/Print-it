// Tableau Slide//

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Constante //

let compteur=0;
const arrow_right = document.getElementById("arrow_right");
const image = document.getElementById("image");
const tagLine = document.getElementById("tagLine");
const arrow_left = document.getElementById("arrow_left");
console.log(slides.length, compteur);


// Appel de fonction permettant le changement de Slide //

arrow_right.addEventListener('click', () => { 
	compteur++;
	changeImageAndText(compteur);
  	// console.log(slides [(compteur %4)],["image"],compteur %4);
});

arrow_left.addEventListener('click', () => {
	compteur--;	
	if (compteur < 0){ 
		console.log(compteur);
	compteur = slides.length - 1;
 }
	changeImageAndText(compteur);
});



// Factorisation //

function changeImageAndText(compteur){
	image.src = "./images/slideshow/"+ slides[(compteur %4)]["image"];
	tagLine.innerHTML= slides[(compteur %4)]["tagLine"];
}

//Dots//


const dotsContainer = document.querySelector('.dots');
let counter = 0;

function generateDots() {
  let dotsHTML = '';
  slides.forEach((_, index) => {
    dotsHTML += `<span class="dot" data-slide="${index}"></span>`;
  });
  dotsContainer.innerHTML = dotsHTML;
}

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none';
  });
}

function activateDot(dotIndex) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === dotIndex ? '#555' : '#bbb';
  });
}

generateDots();

// Afficher la première slide et activer le premier dot au chargement de la page
showSlide(counter);
activateDot(counter);

// Ajouter les écouteurs d'événements aux flèches gauche et droite
document.getElementById('arrow_left').addEventListener('click', () => {
  counter = (counter - 1 + slides.length) % slides.length;
  showSlide(counter);
  activateDot(counter);
});

document.getElementById('arrow_right').addEventListener('click', () => {
  counter = (counter + 1) % slides.length;
  showSlide(counter);
  activateDot(counter);
});

// Ajouter les écouteurs d'événements aux dots
dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    counter = parseInt(event.target.getAttribute('data-slide'));
    showSlide(counter);
    activateDot(counter);
  }
});

