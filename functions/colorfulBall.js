let particles = [];
let lines = [];
let isActive = true;
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let radius = 80;
let lastMouseMoveTime = Date.now();
let cursorOffsetX = 4; // 마우스의 실제 너비 반영
let cursorOffsetY = 4; // 마우스의 실제 높이 반영

function createFerrisWheelStructure() {
  let obj = document.createElement('div');
  document.body.appendChild(obj);

  let angle = particles.length * (Math.PI / 4);
  let colorOffset = Math.random() * 360;
  
  obj.style.position = 'fixed';
  obj.style.width = '12px';
  obj.style.height = '12px';
  obj.style.borderRadius = '50%';
  obj.style.boxShadow = `0px 0px 12px hsl(${colorOffset}, 100%, 70%)`;
  obj.style.backgroundColor = `hsl(${colorOffset}, 100%, 50%)`;

  let line = document.createElement('div');
  line.style.position = 'fixed';
  line.style.width = '2px';
  line.style.height = `${radius}px`;
  line.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  line.style.transformOrigin = 'top';

  document.body.appendChild(line);
  
  particles.push({ element: obj, angle, colorOffset });
  lines.push(line);
}

// 마우스 움직임 감지
document.body.addEventListener('mousemove', (e) => {
  if (!isActive) return;

  lastMouseMoveTime = Date.now();
  centerX = e.clientX;
  centerY = e.clientY;

  particles.forEach((p, index) => {
    p.angle += 0.05; 
    let x = (centerX - cursorOffsetX) + radius * Math.cos(p.angle);
    let y = (centerY - cursorOffsetY) + radius * Math.sin(p.angle);
    p.element.style.left = x + 'px';
    p.element.style.top = y + 'px';

    // 뼈대 선을 파티클 중심과 정확히 연결
    let deltaX = x - centerX;
    let deltaY = y - centerY;

    // 마우스의 중심점을 기준으로 뼈대 선을 정렬
    lines[index].style.left = centerX + 'px';
    lines[index].style.top = centerY + 'px';
    lines[index].style.transform = `rotate(${Math.atan2(deltaY, deltaX) * (180 / Math.PI)}deg)`;
  });
});

// 자동 회전 기능 추가
function autoRotate() {
  if (!isActive) return;

  let elapsedTime = Date.now() - lastMouseMoveTime;

  if (elapsedTime > 500) { 
    particles.forEach((p, index) => {
      p.angle += 0.05;
      let x = (centerX - cursorOffsetY) + radius * Math.cos(p.angle);
      let y = (centerY - cursorOffsetX) + radius * Math.sin(p.angle);
      p.element.style.left = x + 'px';
      p.element.style.top = y + 'px';

      // 뼈대 선 자동 회전
      lines[index].style.left = centerX + 'px';
      lines[index].style.top = centerY + 'px';
      lines[index].style.transform = `rotate(${p.angle * (180 / Math.PI)}deg)`;
    });
  }

  requestAnimationFrame(autoRotate);
}

autoRotate();

// 확장앱 메시지로 기능 끄기
chrome.runtime.onMessage.addListener((msg) => {
  if (msg === "disableParticles") {
    isActive = false;
    particles.forEach((p) => p.element.remove());
    lines.forEach((line) => line.remove());
    particles = [];
    lines = [];
  }
});

// 초기화 - 8개의 파티클과 선 생성
for (let i = 0; i < 8; i++) {
  createFerrisWheelStructure();
}
