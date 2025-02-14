let noCounter = 0; 
let canBeClicked = true; 
const yesContainer = document.getElementById('yes'); 
const yesButton = yesContainer.querySelector('button'); 

const noContainer = document.getElementById('no'); 
const noButton = noContainer.querySelector('button'); 
const textHolder = document.querySelector('.text-holder');
const textHolderSecondary = document.getElementById('secondary'); 
const imageHolder = document.querySelector('.image-holder'); 

createEventListeners(yesContainer, yesButton); 
createEventListeners(noContainer, noButton); 


function createEventListeners(container, button) {
  button.addEventListener('click', ()=>{
    if (!canBeClicked) return;  

    if (container.id === 'yes' && noCounter === 3) {
      textHolder.innerHTML ='BAKA you are my valentines gal'; 
      textHolderSecondary.innerHTML = 'I show no mercy';
      imageHolder.innerHTML = `<img src="resources/sigma-homer.gif" alt="gif" class="gif" id="gif">`;
      yesButton.disabled = true;
      noButton.disabled = true; 
      return; 
    }

    else if (container.id ==='yes') {
      textHolder.innerHTML = 'TY Baby'; 
      imageHolder.innerHTML =  `<img src="resources/cat-heart.gif" alt="gif" class="gif" id="gif">`
      textHolderSecondary.innerHTML = 'Happy Valentines STELLA!!!';
      canBeClicked = false;
      yesButton.disabled = true;
      noButton.disabled = true;  
      return; 
    }
    
    noCounter++; 

    if (noCounter === 1) {
      textHolder.innerHTML ='wrong asnwer. Try again...'; 
      textHolderSecondary.innerHTML = ''; 
      imageHolder.innerHTML = `<img src='./images/kanye.png' class=image>`
      yesButton.classList.add('no-counter-one');
      noButton.classList.add('no-counter-one');
    }

    else if (noCounter === 2) {
      textHolder.innerHTML ='Ima ask only one more time. Or I\'m gonna use dark psychology'; 
      textHolderSecondary.innerHTML='(brown tear runs down leg)'; 
      imageHolder.innerHTML = `<img src='./images/cringe.png' class=image>`
      yesButton.classList.add('no-counter-two');
      noButton.classList.add('no-counter-two');
    }

    else if (noCounter === 3) {
      textHolder.innerHTML ='You\'re not sigma enough!!!'; 
      textHolderSecondary.innerHTML=''; 
      imageHolder.innerHTML = `<img src='./images/cringe2.png' class=image>`
      yesButton.classList.add('no-counter-three');
      noButton.remove()
    }
    
  })
}

/*
function changeImage(imageName) {
  return `<img src='./images/${imageName}.png' class=image>`
}; 
*/ 
