window.addEventListener('load', function(){
  const observer = new IntersectionObserver(function(entries) {
    for(let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio <= 0) continue;
      showElm(entries[i].target);
    }
  },{
    rootMargin: '-20% 0% -10% 0%'
  });
  const fade = document.querySelectorAll('.c-fade');
  for(let i = 0; i < fade.length; i++) {
    observer.observe(fade[i]);
  }
  function showElm(fade) {
    fade.classList.add('fade-v');
    observer.unobserve(fade);
  }
},false);

