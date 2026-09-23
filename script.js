
const toggle=document.querySelector('.menu-toggle');
if(toggle)toggle.addEventListener('click',()=>document.querySelector('.menu').classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.menu')?.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('[data-lightbox]').forEach(item=>item.addEventListener('click',()=>{
 const box=document.querySelector('.lightbox'); box.querySelector('img').src=item.dataset.lightbox;
 box.querySelector('.lb-caption').textContent=item.dataset.caption||''; box.classList.add('open');
}));
const lb=document.querySelector('.lightbox');
if(lb){lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('close'))lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});}
