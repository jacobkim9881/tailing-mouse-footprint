//letter.js

function mouseEvent(e) {
  return console.log('letter', e.clientX, e.clientY);
}

document.body.removeEventListener('mousemove', mouseEvent);
document.body.addEventListener('mousemove', mouseEvent);