//test.js
function mouseEvent(e) {

  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
  let ranXpos = ballSize + parseInt(e.clientX, 10);
  let ranYpos = ballSize + parseInt(e.clientY, 10);
  let ranH = Math.trunc(Math.random() * 360);
  let ranH2 =  Math.trunc(Math.random() * 360);
  let ranHeit = 80 + randomBallSize;	  
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = randomBallSize + 'px';
  obj.style.height = randomBallSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';
  let aniArr = [
    {top: (ranYpos) + 'px'},
    {top: (ranYpos + ranHeit)+ 'px'},
    {top: (ranYpos + ranHeit/2) + 'px'},
    {top: (ranYpos + ranHeit) + 'px'},
    {top: (ranYpos + ranHeit * 3/4) + 'px'},
    {top: (ranYpos + ranHeit) + 'px'},
    {top: (ranYpos + ranHeit * 7/8) + 'px'},
    {top: (ranYpos + ranHeit) + 'px'},
    {top: (ranYpos + ranHeit * 15/16) + 'px'},
{top: (ranYpos + ranHeit) + 'px'}

  ]
  obj.animate( aniArr , {duration: 3000,
      timing(timeFraction) {
      return timeFraction}
  })
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 3000);
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  4 === 0 ) {
   trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
