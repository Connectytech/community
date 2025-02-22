const links = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')
let currentSection = null

const listActitiviesDescription = document.querySelectorAll('.activity-description')
const listActitiviesItem = document.querySelectorAll('.items-activity')

const listRoles = document.querySelectorAll('.role')
const hiddenImage = document.querySelectorAll('.img-hidden')

function changeState(item) {
    links.forEach((link) => {
        if(item === link){
            link.classList.add('active')
        }else{
            link.classList.remove('active')
        }
    })
}

function setActiveLink() {
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section
    }
  })

  if (currentSection) {
    const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`)
    changeState(activeLink)
  }
}


function addFonctionnality(parentList, chileList){
  parentList.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      chileList[index].classList.add('visible')
    })
    
    item.addEventListener('mouseleave', () => {
      chileList.forEach((description) => {
        description.classList.remove('visible')
      })
    })
  })
}

links.forEach((link) => {
  link.addEventListener('click', () => {
      changeState(link)
  })
})

window.addEventListener('scroll', () => {
    setActiveLink()
    console.log(window)
})

setActiveLink()

// addFonctionnality(listActitiviesItem, listActitiviesDescription)
// addFonctionnality(listRoles, hiddenImage)