(function(){
  const eventDate = new Date('2026-08-01T00:00:00+09:00');
  const target = document.getElementById('dday');
  function updateDday(){
    const now = new Date();
    const todayKst = new Date(now.toLocaleString('en-US',{timeZone:'Asia/Seoul'}));
    todayKst.setHours(0,0,0,0);
    const diff = Math.ceil((eventDate - todayKst) / 86400000);
    if(diff > 0) target.textContent = `D-${diff}`;
    else if(diff === 0) target.textContent = 'D-DAY';
    else target.textContent = 'THANK YOU';
  }
  updateDday();

  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.14});
  items.forEach(el=>observer.observe(el));
})();
