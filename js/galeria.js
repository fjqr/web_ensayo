let galeria = document.querySelector(".galeria");
let backgrounds = [
  "./recursos/img/burger-500054_1920.jpg",
  "./recursos/img/hamburger-1414422_1920.jpg"
];
let counter = 0;

const animacionDeGaleria = () => {
    if (counter <= backgrounds.length - 1) {
        galeria.style.backgroundImage = `url(${backgrounds[counter]})`;
        ++counter;
    } else {
        counter = 0;
        
    }
   setTimeout(() => {
     requestAnimationFrame(animacionDeGaleria);
   }, 4000);
};

requestAnimationFrame(animacionDeGaleria);
//animacionDeGaleria();
