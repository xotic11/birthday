
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];


let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");


function showCode(test) {

	document.getElementById("code-list").style.opacity = 1;
}


let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)
var countDownDate = new Date("Aug 14, 2023 20:24:40").getTime();

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + countDownDate); //just for this demo today + 7 days

var myfunc = setInterval(function() {
	var now = new Date().getTime();
	var timeleft = countDownDate - now;
	$("#test").css("display", "none")

	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	$("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
	if (timeleft < 0) {
	
		$("body").css("display", "block")
		$("html").css("display", "block")
	$("#test").css("display", "unset")
	$("#countdown-slide").hide(200)
		clearInterval(myfunc);
	
	}
	}, 1000)

	
