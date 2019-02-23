document.querySelector('#submit-btn').addEventListener('click',function(e){
	e.preventDefault()
	console.log("Success")
})


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