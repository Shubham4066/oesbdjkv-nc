// Hamburger Menu
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active');});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    if(navLinks.classList.contains('active')) navLinks.classList.remove('active');
  });
});

// Animated Top Text
const texts=["Gaming & Designer","UI/UX Enthusiast","Canva Creator"];
let count=0;
const animatedText=document.querySelector(".animated-text");
setInterval(()=>{animatedText.textContent=texts[count];count=(count+1)%texts.length;},3000);

// Scroll Animation
const sections=document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
  const triggerBottom=window.innerHeight/5*4;
  sections.forEach(section=>{
    const sectionTop=section.getBoundingClientRect().top;
    if(sectionTop<triggerBottom){section.classList.add('active');}
  });
});

// Particle Background
const canvas=document.getElementById('particle-canvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth; canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)*0.7,
    dy:(Math.random()-0.5)*0.7
  });
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,0,0,0.7)';
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
