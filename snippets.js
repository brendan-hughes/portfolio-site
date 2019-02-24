var popup = document.querySelector(".popup");
var popupText = document.querySelector(".popup-text");
var popupHeader = document.querySelector('.popup-header');
var projectIcons = document.querySelectorAll(".item-project");
var popupBackground = document.querySelector(".popup-background");
var popupSeeLive = document.querySelector(".popup-live");
var popupImage = document.querySelector(".popup-image");
var popupCloseBtn =document.querySelector(".popup-close");


var popupToggle = function () {
	console.log("Toggled class")
  popup.classList.toggle("show");
	popupHeader.classList.toggle("show");
	popupText.classList.toggle("show");
	popupCloseBtn.classList.toggle("show");
	popupSeeLive.classList.toggle("show");
	popupImage.classList.toggle("show");
	//popupBackground.classList.toggle("greyed-out");
};

//Animate Skill Lists
var skillLists = document.querySelectorAll('.skill-list');
	var aboutMeTop = document.querySelector('div.content-area.content-area-about-me');
	var elementHeight = aboutMeTop.clientHeight;
	document.addEventListener('scroll', animateAboutMe);

	function inViewAbout() {
	  // get window height
	  var windowHeight = window.innerHeight;
	  // get number of pixels that the document is scrolled
	  var scrollY = window.scrollY || window.pageYOffset;

	  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
	  var scrollPosition = scrollY + windowHeight;
	  // get element position (distance from the top of the page to the bottom of the element)
	  var elementPosition = aboutMeTop.getBoundingClientRect().top + scrollY + elementHeight;

	  // is scroll position greater than element position? (is element in view?)
	  if (scrollPosition > elementPosition) {
	    return true;
	  }

	  return false;
	}

	function animateAboutMe() {
	  // is element in view?
	  if (inViewAbout()) {
			for (i=0;i<skillLists.length;i++) {
	      // element is in view, add class to element
	      skillLists[i].classList.add('about-me-visible');
			}
			document.querySelector('.content-area-about-me h1').classList.add('about-me-visible');
			document.querySelector('.content-area-about-me p').classList.add('about-me-visible');
			document.querySelector('.content-area-about-me hr').classList.add('about-me-visible');
			var skillHeaders = document.querySelectorAll('.skill-list-header')
			for (i=0;i<skillHeaders.length;i++) {
				skillHeaders[i].classList.add('about-me-visible');
			}
			var skillImg = document.querySelectorAll('.skill-img')
			for (i=0;i<skillImg.length;i++) {
				skillImg[i].classList.add('about-me-visible');
			}
	  }
	}


	//Animate Footer
	var footer = document.querySelector('#main-footer');
	var header = document.querySelector('nav');
	var contactButton = document.querySelector('#submit-btn');
	var contactHead = document.querySelector('#contact');
		var elementHeight = contactButton.clientHeight;
		document.addEventListener('scroll', animateNavs);

		function inViewContactBtn() {
			// get window height
			var windowHeight = window.innerHeight;
			// get number of pixels that the document is scrolled
			var scrollY = window.scrollY || window.pageYOffset;

			// get current scroll position (distance from the top of the page to the bottom of the current viewport)
			var scrollPosition = scrollY + windowHeight;
			// get element position (distance from the top of the page to the bottom of the element)
			var elementPosition = contactButton.getBoundingClientRect().top + scrollY + elementHeight;
			// is scroll position greater than element position? (is element in view?)
			if (scrollPosition > elementPosition) {
				return true;
			}
			return false;
		}

		function inViewContactHead() {
			// get window height
			var windowHeight = window.innerHeight;
			// get number of pixels that the document is scrolled
			var scrollY = window.scrollY || window.pageYOffset;

			// get current scroll position (distance from the top of the page to the bottom of the current viewport)
			var scrollPosition = scrollY + windowHeight;
			// get element position (distance from the top of the page to the bottom of the element)
			var elementPosition = contactHead.getBoundingClientRect().top + scrollY + elementHeight;
			// is scroll position greater than element position? (is element in view?)
			if (scrollPosition > elementPosition) {
				return true;
			}
			return false;
		}

		function animateNavs() {
		  // is element in view?
		  if (inViewContactBtn()) {

		      footer.classList.add('turn-blue');
					header.classList.add('turn-blue');
					header.classList.add('add-white-bk');
					var links = document.querySelectorAll('nav a');
					for (i=0;i<links.length;i++) {
						links[i].classList.add('turn-blue');

					}
				}
					else {
						footer.classList.remove('turn-blue');
						header.classList.remove('turn-blue');
						header.classList.remove('add-white-bk');
	 				 var links = document.querySelectorAll('nav a');
	 				 for (i=0;i<links.length;i++) {
	 					 links[i].classList.remove('turn-blue');

	 				}
					}

				}

//Add Event Listeners to Project Icons//
for (i=0;i<projectIcons.length;i++) {
	projectIcons[i].addEventListener('click', popupToggle);
}
popupCloseBtn.addEventListener('click',popupToggle);


		$(document).ready(function(){
	        $("#frontend-img").hover(function () {
	            $("#frontend-list").css('color','#23B5D3');
	        });
    });

		$(document).ready(function(){
	        $("#frontend-img").mouseout(function () {
	            $("#frontend-list").css('color','#A2AEBB');
	        });
    });

		$(document).ready(function(){
	        $("#backend-img").hover(function () {
	            $("#backend-list").css('color','#23B5D3');
	        });
    });

		$(document).ready(function(){
	        $("#backend-img").mouseout(function () {
	            $("#backend-list").css('color','#A2AEBB');
	        });
    });

		$(document).ready(function(){
	        $("#languages-img").hover(function () {
	             $("#languages-list").css('color','#23B5D3');
	        });
    });

		$(document).ready(function(){
	        $("#languages-img").mouseout(function () {
	             $("#languages-list").css('color','#A2AEBB');
	        });
    });

		$(document).ready(function(){
	        $("#other-img").mouseover(function () {
	            $("#other-list").css('color','#23B5D3');
	        });
    });

		$(document).ready(function(){
	        $("#other-img").mouseout(function () {
	            $("#other-list").css('color','#A2AEBB');
	        });
    });


$( document ).ready(function() {
    $("#project-desc").animate({opacity:'0'},10)
});


		$(document).ready(function(){
	        $("#project1-img").hover(function () {
	            $("#project-desc").animate({opacity:'1'},50);
	            $("#project-desc").text("This is the description for project 1.");
	        });
    });

		$(document).ready(function(){
	        $("#project1-img").mouseout(function () {
	            $("#project-desc").animate({opacity:'0'},50);


	        });
    });


		$(document).ready(function(){
	        $("#project2-img").hover(function () {
	            $("#project-desc").animate({opacity:'1'},50);
	            $("#project-desc").text("This is the description for project 2.");
	        });
    });

		$(document).ready(function(){
	        $("#project2-img").mouseout(function () {
	            $("#project-desc").animate({opacity:'0'},50);
	        });
    });


		$(document).ready(function(){
	        $("#project3-img").hover(function () {
	            $("#project-desc").animate({opacity:'1'},50);
	            $("#project-desc").text("This is the description for project 3.");
	        });
    });

		$(document).ready(function(){
	        $("#project3-img").mouseout(function () {
	           $("#project-desc").animate({opacity:'0'},50);
	        });
    });
