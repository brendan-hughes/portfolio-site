//Variable Declarations
let projectCards = document.querySelectorAll('.card')
let learnMoreBtn = document.querySelector('#learn-more-btn')
let seeWorkArrow = document.querySelector('#learn-more-arrow')
let viewProjectsBtn = document.querySelector('#see-work-btn')
let viewProjectsArrow = document.querySelector('#see-work-arrow')
let toTopBtn = document.querySelector('.to-top-arrow')
let topOfPage = document.querySelector('#top')
let contactText = document.querySelector('.contact-text')
let fullName = document.querySelector('#full-name')



let projectDetails = [{
  id:'project1',
  details:"project 1 details",
  img:"project 1 image source",
  url:"project 1 url"
}, {
  id:'project2',
  details:"project 2 details",
  img:"project 2 image source",
  url:"project 2 url"
},{
  id:'project3',
  details:"project 3 details",
  img:"project 3 image source",
  url:"project 3 url"
},
{
  id:'project4',
  details:"project 4 details",
  img:"project 4 image source",
  url:"project 4 url"
}]

//FUNCTIONS
let clickCard=function(card) {
    let id = card.target.id
    for (i=0; i < projectDetails.length; i++) {
        if (projectDetails[i].id === id) {
            console.log(projectDetails[i].details) ;
        }
    }
}
// Button Functions
let learnMoreHover = function() {
  seeWorkArrow.classList.toggle('rotate-arrow')
}
let viewProjectsHover = function() {
  viewProjectsArrow.classList.toggle('rotate-arrow')
}

let showArrow = function(ev) {
   var aboutMeDiv = document.getElementById('about-me-area');
   var distanceToTop = aboutMeDiv.getBoundingClientRect().top;
   if (distanceToTop <=10) {
     toTopBtn.classList.add('visible')
   } else if (distanceToTop>10 && toTopBtn.classList.contains('visible')) {
     toTopBtn.classList.remove('visible')
   }
}

let showContact = function(ev) {
   var projectsDiv = document.getElementById('projects');
   var distanceToTop = projectsDiv.getBoundingClientRect().top;
   if (distanceToTop <=60) {
     contactText.classList.add('visible')
   } else if (distanceToTop>60 && contactText.classList.contains('visible')) {
     contactText.classList.remove('visible')
   }
};


//Add Event Listeners
learnMoreBtn.addEventListener('mouseover',learnMoreHover)
learnMoreBtn.addEventListener('mouseout',learnMoreHover)
viewProjectsBtn.addEventListener('mouseover',viewProjectsHover)
viewProjectsBtn.addEventListener('mouseout',viewProjectsHover)
window.addEventListener('scroll', showArrow)
window.addEventListener('scroll', showContact)

for (i=0;i<projectCards.length;i++) {
  projectCards[i].addEventListener('click',clickCard)
}
