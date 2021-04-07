let galeria = document.querySelector(".galeria");
let backgrounds = [
  "./recursos/img/burger-1553287_1920.jpg",
  "./recursos/img/burger-500054_1920.jpg",
  "./recursos/img/burgers-1839090_1920.jpg",
];
let counter = 0;
const animacionDeGaleria = () => {
    
    if(counter <= backgrounds.length -1){
        galeria.style.backgroundImage = `url(${backgrounds[counter]})`;
        galeria.style.transitionTimingFunction = "ease-out";
        galeria.style.transitionDuration = "1.67s";
        counter++
    }else{
        counter = 0
    }
    setTimeout(() =>{
        
        requestAnimationFrame(animacionDeGaleria);
    },5000)
    }
  



requestAnimationFrame(animacionDeGaleria);
