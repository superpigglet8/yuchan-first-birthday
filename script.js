(function(){
  const eventDate = new Date('2026-08-01T00:00:00+09:00');
  const now = new Date();
  const diff = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
  const dday = document.getElementById('dday');
  if (dday) dday.textContent = diff > 0 ? `D-${diff}` : diff === 0 ? 'D-DAY' : 'THANK YOU';

  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  items.forEach((el, i)=>{
    el.style.transitionDelay = `${Math.min(i*80, 360)}ms`;
    io.observe(el);
  });
})();
