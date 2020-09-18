console.log('bubble js')

function mouseEvent(e) {
  return console.log('bubble', e.clientX, e.clientY);
}

window.location.reload();
document.body.addEventListener('mousemove', mouseEvent);