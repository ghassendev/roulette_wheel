// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const back= document.querySelector('.back')
  let deg = 0;


  startButton.addEventListener('click', () => {
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 15s ease ';
    back.style.transition = 'all 14s ease-out';
    
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
    back.classList.add('rainbow');
  });
  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    back.classList.remove('rainbow');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
   /* if (actualDeg>=0 && actualDeg<45 ){
      alert('you  win grenouille');
    }
    if (actualDeg>=45 && actualDeg<90 ){
      alert('you  win snall!!');
    }
    if (actualDeg>=90 && actualDeg<135 ){
      alert('you  win dolphine');
    }
    if (actualDeg>=135 && actualDeg<180 ){
      alert('you  win coccinell');
    }
    if (actualDeg>=180 && actualDeg<225 ){
      alert('you  win koala');
    }
    if (actualDeg>=225 && actualDeg<270 ){
      alert('you  win unicorn');
    }
    if (actualDeg>=270 && actualDeg<315 ){
      alert('you  win dragon');
    }
    if (actualDeg>=315 && actualDeg<360 ){
      alert('you  win snowaman');
    }*/
    console.log(actualDeg);
  }
  );
})();
