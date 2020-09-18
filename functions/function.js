//function.js

function mouseEvent(e) {
    return console.log('function', e.clientX, e.clientY);
}

window.location.reload();
document.body.addEventListener('mousemove', mouseEvent);