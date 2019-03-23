//Variable Declarations
const projectCards = document.querySelectorAll('.card')
const learnMoreBtn = document.querySelector('#learn-more-btn')
const seeWorkArrow = document.querySelector('#learn-more-arrow')
const viewProjectsBtn = document.querySelector('#see-work-btn')
const viewProjectsArrow = document.querySelector('#see-work-arrow')
const toTopBtn = document.querySelector('.to-top-arrow')
const topOfPage = document.querySelector('#top')
const contactText = document.querySelector('.contact-text')
const fullName = document.querySelector('#full-name')
const projectOneCard = document.querySelector('.project1');
const projectTwoCard = document.querySelector('.project2');
const projectThreeCard = document.querySelector('.project3');
const projectFourCard = document.querySelector('.project4');
const aboutMeCard = document.querySelector('.about-me-card');
const mySkillsCard = document.querySelector('.my-skills-card');
const aboutMeDiv = document.getElementById('about-me-area');
const projectsDiv = document.getElementById('projects');



const projectDetails = [{
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
//clickCard pulls project details data from array based on ID of project card. Would be used for a modal.
const clickCard=function(card) {
    const id = card.target.id
    for (i=0; i < projectDetails.length; i++) {
        if (projectDetails[i].id === id) {
            console.log(projectDetails[i].details) ;
        }
    }
}
// Button Functions
//Button Hover Animations
const learnMoreHover = function() {
  seeWorkArrow.classList.toggle('rotate-arrow')
}
const viewProjectsHover = function() {
  viewProjectsArrow.classList.toggle('rotate-arrow')
}

//Show Back to Top Arrow after reaching the About Me section
const showArrow = function(ev) {
   let distanceToAboutMeDiv = aboutMeDiv.getBoundingClientRect().top;
   if (distanceToAboutMeDiv <=10) {
     toTopBtn.classList.add('visible')
   } else if (distanceToAboutMeDiv>10 && toTopBtn.classList.contains('visible')) {
     toTopBtn.classList.remove('visible')
   }
}
//Show Contact Callout when you get to project section
const showContact = function(ev) {
   let distanceToProjectsDiv = projectsDiv.getBoundingClientRect().top;
   if (distanceToProjectsDiv <=60) {
     contactText.classList.add('visible')
   } else if (distanceToProjectsDiv>60 && contactText.classList.contains('visible')) {
     contactText.classList.remove('visible')
   }
};

//Show project 1 when you reach Project 1

const showTopBtn = function (ev) {
  let distanceToAboutMeDiv = aboutMeDiv.getBoundingClientRect().top;
  if (distanceToAboutMeDiv <=10) {
    toTopBtn.classList.add('visible')
  } else if (distanceToAboutMeDiv>10 && toTopBtn.classList.contains('visible')) {
    toTopBtn.classList.remove('visible')
  }
};
 const showContactText = function (ev) {
  let distanceToProjectsDiv = projectsDiv.getBoundingClientRect().top;
  if (distanceToProjectsDiv <=60) {
    contactText.classList.add('visible')
  } else if (distanceToProjectsDiv>60 && contactText.classList.contains('visible')) {
    contactText.classList.remove('visible')
  }}

const showAboutMeCard = function (ev) {
  let distanceToAboutMe = aboutMeCard.getBoundingClientRect().top;
  if (distanceToAboutMe <= 400) {
    aboutMeCard.classList.add('visible-project')
    window.removeEventListener('scroll', showAboutMeCard)
  };
}

const showMySkillsCard = function (ev) {
  let distanceToMySkills = mySkillsCard.getBoundingClientRect().top;
  if (distanceToMySkills <= 400) {
    mySkillsCard.classList.add('visible-project')
    window.removeEventListener('scroll', showMySkillsCard)
  }
}

const showProjectOneCard = function (ev) {
  let distanceToProjectOne = projectOneCard.getBoundingClientRect().top;
  if (distanceToProjectOne <= 400) {
    projectOneCard.classList.add('visible-project')
    window.removeEventListener('scroll', showProjectOneCard)
  };
}

const showProjectTwoCard = function(ev) {
  let distanceToProjectTwo = projectTwoCard.getBoundingClientRect().top;
  if (distanceToProjectTwo <= 400) {
    projectTwoCard.classList.add('visible-project')
    window.removeEventListener('scroll', showProjectTwoCard)
  };
}

const showProjectThreeCard = function(ev) {
  let distanceToProjectThree = projectThreeCard.getBoundingClientRect().top;
  if (distanceToProjectThree <= 400) {
    projectThreeCard.classList.add('visible-project')
    window.removeEventListener('scroll', showProjectThreeCard)
  };
}
 
const showProjectFourCard = function(ev) {
  let distanceToProjectFour = projectFourCard.getBoundingClientRect().top;
  if (distanceToProjectFour <= 400) {
    projectFourCard.classList.add('visible-project')
    window.removeEventListener('scroll', projectFourCard)
  };
}

//Add Event Listeners
learnMoreBtn.addEventListener('mouseover',learnMoreHover)
learnMoreBtn.addEventListener('mouseout',learnMoreHover)
viewProjectsBtn.addEventListener('mouseover',viewProjectsHover)
viewProjectsBtn.addEventListener('mouseout',viewProjectsHover)
window.addEventListener('scroll', showTopBtn)
window.addEventListener('scroll', showContactText)
window.addEventListener('scroll', showAboutMeCard)
window.addEventListener('scroll', showMySkillsCard)
window.addEventListener('scroll', showProjectOneCard)
window.addEventListener('scroll', showProjectTwoCard)
window.addEventListener('scroll', showProjectThreeCard)
window.addEventListener('scroll', showProjectFourCard)

for (i=0;i<projectCards.length;i++) {
  projectCards[i].addEventListener('click',clickCard)
}
