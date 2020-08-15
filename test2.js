const bodyChange = ( func ) => {
let num = 0;
document.body.addEventListener('mousemove', (e) => {
  
  let obj = document.createElement('div');
  
    if (num === 0) {
      obj.setAttribute('id', 'particle');
      num++
      func(obj, e)
      
  document.body.appendChild(obj);
    } else {
      if (num === 1) {
        setTimeout(() => document.getElementById('particle').remove(), 200);
    
      } else {
        let lessNum = num - 1;
        setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
      }
      obj.setAttribute('id', 'particle' + num);
      num++
      func(obj, e)
          
  document.body.appendChild(obj);
    }

  
})
}

exports.bodyChange = bodyChange;