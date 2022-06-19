//bunny.js
document.body.addEventListener('mousemove', mouseEventBunny);
document.body.addEventListener('mousedown', mousedownEventBunny);
document.body.addEventListener('mouseup', mouseupEventBunny);
document.body.addEventListener('dblclick', dblclickEventBunny);
document.body.addEventListener('drag', dragEventBunny);
document.body.addEventListener('dragend', dragEndEventBunny);

window.addEventListener('scroll', onScrollEventBunny);
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('grpDivs').style.display = 'block'; 
  } else {
    document.getElementById('grpDivs').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEventBunny);
    document.body.removeEventListener('mousedown', mousedownEventBunny);
    document.body.removeEventListener('mouseup', mouseupEventBunny);
    document.body.removeEventListener('scroll', onScrollEventBunny);
    document.body.removeEventListener('dblclick', dblclickEventBunny);
    document.body.removeEventListener('drag', dragEventBunny);
    document.body.removeEventListener('dragend', dragEndEventBunny);

  }
});
