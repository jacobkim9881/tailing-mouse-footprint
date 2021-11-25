//
function animateBar(obj, cls) {	
  let pD = 45,
  aD = 90,		
  d = cls === 'off' ? pD : aD,
  d2 = cls === 'on' ? pD : aD,
  c = cls === 'off' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)',
  c2 = cls === 'on' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)';	
  
  obj.animate([
      {
    transform: `rotate(${d}deg)`,
    backgroundColor: c 	      
      }, 
      {
    transform: `rotate(${d2}deg)`,
    backgroundColor: c2 	      
      }, 
    ], 400)
  
 obj.style.backgroundColor = c2;
  obj.style.transform = `rotate(${d2}deg)`;
  obj.className = obj.className === 'off' ? 'on' : 'off';
}

function animateStamp(obj, cls) {
  let pT = (window.innerHeight - 120),
  aT = (window.innerHeight - 100),
  t = cls === 'off1' ? pT : aT,
  t2 = cls === 'on1' ? pT : aT,	
  c = cls === 'off1' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',
  c2 = cls === 'on1' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',		
  aniArr = [
    {
      top: `${t}px`,
      backgroundColor: c,
      easing: 'ease-in'	    
    },
     {
      top: `${t + (t2-t)* 7/8}px`,
      backgroundColor: c2,
      easing: 'ease-out'	    
    },   {
      top: `${t2}px`,
      backgroundCOlor: c2,
      easing: 'ease-in'	    
    }
  ],
  dur = {duration: 500
  };		

  obj.animate(aniArr, dur);	
  obj.style.backgroundColor = c2;
  obj.style.top = `${t2}px`;
  obj.className = obj.className === 'off1' ? 'on1' : 'off1';	
}

function animateSlide(obj, cls, i) {
  let pL = (i * 45 + 20),
  aL = (i * 45),
  l = cls === 'off3' ? pL : aL,
  l2 = cls === 'on3' ? pL : aL,	
  c = cls === 'off3' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',
  c2 = cls === 'on3' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',		
  aniArr = [
    {
      left: `${l}px`,	    
//      backgroundColor: c,
      easing: 'ease-in'	    
    },
     {
      left: `${l + (l2-l)* 7/8}px`,
//      backgroundColor: c2,
      easing: 'ease-out'	    
    },   {
      left: `${l2}px`,
//      backgroundCOlor: c2,
      easing: 'ease-in'	    
    }
  ],
  dur = {duration: 700
  };		
  setTimeout(() =>
  obj.animate(aniArr, dur)
  ,500
};	
//  obj.style.backgroundColor = c2;
  obj.style.left = `${l2}px`;
  obj.className = obj.className === 'off3' ? 'on3' : 'off3';	
}

