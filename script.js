const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.product-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); button.classList.add('active');
  const filter=button.dataset.filter;
  cards.forEach(card=>card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter));
}));

const modal=document.getElementById('imageModal');
const modalImage=document.getElementById('modalImage');
const modalTitle=document.getElementById('modalTitle');
const download=document.getElementById('downloadImage');
function openViewer(source,title){
  modalImage.src=source; modalImage.alt=title||'Product image'; modalTitle.textContent=title||'Ku Shina\'s Collections'; download.href=source; download.download=(title||'ku-shinas-collections-image').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.jpg'; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeViewer(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';modalImage.src=''}
document.querySelectorAll('[data-full]').forEach(el=>el.addEventListener('click',()=>openViewer(el.dataset.full,el.dataset.title)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeViewer));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeViewer()});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();
