
const menuBtn=document.getElementById('menuBtn');
const menuPanel=document.getElementById('menuPanel');
if(menuBtn&&menuPanel){
  menuBtn.addEventListener('click',()=>{
    const open=menuPanel.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
    menuPanel.setAttribute('aria-hidden',String(!open));
  });
  menuPanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menuPanel.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
    menuPanel.setAttribute('aria-hidden','true');
  }));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
