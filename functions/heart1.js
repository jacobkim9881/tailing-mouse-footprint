//heart1.js

function mouseEventHeart1(e) {

  function trigger(e, moveX) {
    let halfHeart = document.createElement('div');
    let ranXpos = Math.trunc(Math.random() * 15) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 20) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 8) + window.innerWidth/200;
    let ranYpos2 = ranYpos + ran10;
    let secLeft = ranXpos + ran10/2; 
    halfHeart.style.position = 'fixed';
    if (moveX === 1) { 
      halfHeart.style.left = - secLeft + 'px';
    } else {
      halfHeart.style.left = ranXpos + 'px';
    }  
    halfHeart.style.width = ran10 + 'px';
    halfHeart.style.height = ran10 + 'px';
    halfHeart.style.backgroundColor = 'hsl(359, 100%, 50%)' 
    halfHeart.style.borderRadius = '50%';  
    halfHeart.style.transform = 'skewY(25deg)';

    halfHeart.animate([
      {top: ranYpos2 + 'px',
        transform: 'skewY(25deg)'},
      {top: ranYpos + 'px',
        transform: 'skewY(30deg)'}
    ], 500);
  
    document.body.appendChild(halfHeart);
    setTimeout(() => halfHeart.remove(), 490);
  
    let OtherHalfHeart = document.createElement('div');
    OtherHalfHeart.style.position = 'fixed';
    OtherHalfHeart.style.left = secLeft + 'px';
    OtherHalfHeart.style.width = ran10 + 'px';
    OtherHalfHeart.style.height = ran10 + 'px';
    OtherHalfHeart.style.backgroundColor = 'hsl(359, 100%, 50%)';
    OtherHalfHeart.style.borderRadius = '50%';  
    OtherHalfHeart.style.transform = 'skewY(25deg)';

    OtherHalfHeart.animate([
      {top: ranYpos2 + 'px',
        transform: 'skewY(-25deg)'},
      {top: ranYpos + 'px',
        transform: 'skewY(-30deg)'}

    ], 500);
  
    document.body.appendChild(OtherHalfHeart);
    setTimeout(() => OtherHalfHeart.remove(), 490);
 
    return;
  }
  if (new Date().getTime() %  13 === 0 ) {
    trigger(e, 0);
  }
}


