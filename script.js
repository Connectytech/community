const links = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
let isScrolling = false;

links.forEach((link) => {
    link.addEventListener('click', () => {
        changeState(link);
        isScrolling = false;
    });
});

function changeState(item) {
    links.forEach((link) => {
        if(item === link){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    });
}

function setActiveLink() {
  if (!isScrolling) return;

  let currentSection = null;
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
    changeState(activeLink)
  }
}

window.addEventListener('scroll', () => {
    isScrolling = true;
    setActiveLink();
});

setActiveLink();
