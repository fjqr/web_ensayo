let frase = document.querySelector(".promo-frase");

const fraseEfecto = () => {
  frase.style.transform = `scale(${1.1},${1.1})`;
  frase.style.transitionTimingFunction = "ease-in-out";
  frase.style.transitionDuration = "2s";

  setTimeout(() => {
    requestAnimationFrame(fraseEfecto);
  }, 1000);
};

  requestAnimationFrame(fraseEfecto);


const fraseEfectoInv = () => {
    frase.style.transform = `scale(${1},${1})`;
    frase.style.transitionTimingFunction = "ease-in-out";
    frase.style.transitionDuration = "1s";
  
    setTimeout(() => {
      requestAnimationFrame(fraseEfectoInv);
    }, 3000);
  };

    requestAnimationFrame(fraseEfectoInv);

  