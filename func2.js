$("document").ready(function(){


$(".menu").mouseenter(function () {
	$( ".menu-bar" ).fadeIn( "500","swing","slide" );
});
$( ".menu-bar" ).mouseleave(function(){
$( ".menu-bar" ).fadeOut( "500","swing","slide" );
});

//to set position of 2nd and 3rd button
$(".shift").animate({
bottom:"20px"
});
$(".shift2").animate({
bottom:"20px"
});
$(".lowright").animate({
bottom:"20px"
});
$(".lowright2").animate({
bottom:"20px"
});
$(".block").animate({
bottom:"20px"
});
$(".totop").animate({
bottom:"20px"
});
$(".totop2").animate({
bottom:"20px"
});
$(".go-down").animate({
bottom:"80px"
});
$(".go-up").animate({
bottom:"140px"
});


$("#but").click(function(){
$("#but").animate({value:"changed"},"slow");
});
$("#top").animate({fontSize:'70'});	

$("#home").addClass("change");

$(window).scroll(function(){
console.log($(window).scrollTop());
if($(window).scrollTop() > 100){
    //begin to scroll
    $("#bar").addClass("fix");
    $(".menu-bar").addClass("fix2");
    $(".lowright").fadeIn();
    $(".lowright2").fadeIn();
    $(".shift").fadeIn();
    $(".shift2").fadeIn();
    
}
else{
    //lock it back into place
    $("#bar").removeClass("fix");
    $(".menu-bar").removeClass("fix2");
	$(".totop").fadeOut("fast");
	$(".totop2").fadeOut("fast");
	$(".shift").fadeOut("fast");
	$(".shift2").fadeOut("fast",function(){
		$(".lowright").fadeOut("fast");
	});
	$(".go-down").fadeOut();
	$(".go-up").fadeOut();

    $(".lowright2").fadeOut();
      
}
}) ;

$("#home").mouseover(function(){
$("#home").addClass("change2");
});
$("#home").mouseout(function(){
$("#home").removeClass("change2");
});
$("#first").mouseover(function(){
$("#first").addClass("change2");
});
$("#first").mouseout(function(){
$("#first").removeClass("change2");
});
$("#second").mouseover(function(){
$("#second").addClass("change2");
});
$("#second").mouseout(function(){
$("#second").removeClass("change2");
});
$("#third").mouseover(function(){
$("#third").addClass("change2");
});
$("#third").mouseout(function(){
$("#third").removeClass("change2");
});
$("#fourth").mouseover(function(){
$("#fourth").addClass("change2");
});
$("#fourth").mouseout(function(){
$("#fourth").removeClass("change2");
});

//function when mouse hovers lower right button for first 4 pages
$(".lowright").mouseover(function(){
$(".totop").fadeIn("fast");
/*$(".lowright").css({
webkitTransform: 'rotate(90deg)'
});*/
$(".shift").animate({
bottom:"80px"
},"fast");
$(".shift2").animate({
bottom:"140px"
},"fast");
});

//function when mouse leaves lower right button for first 4 pages
$(".lowright").mouseout(function(){
$(".totop").fadeOut();
});
//To go to top of the fisrt 4 pages
$(".lowright").click(function(){
console.log($(window).scrollTop("0"));
$(".totop").fadeOut();
});

//function when mouse hovers lower right button for sign up 
$(".lowright2").mouseover(function(){
$(".totop2").fadeIn();
});
//function when mouse leaves lower right button for sign up 
$(".lowright2").mouseout(function(){
$(".totop2").fadeOut();
});
//To go to top of the sign up page
$(".lowright2").click(function(){
console.log($(window).scrollTop("0"));
$(".totop2").fadeOut();
});

//To slide buttons back to original position
$(".block").on("mouseleave",function(){
$(".shift").animate({bottom:"20px"},"fast");
$(".shift2").animate({bottom:"20px"},"fast");
});
$(".shift").mouseenter(function(){
 $(".block").off("mouseleave");
 $(".block").off("mouseleave");
 $(".shift").stop();
 $(".shift2").stop();
 $(".go-down").fadeIn();
 });
$(".shift").mouseleave(function(){
$(".block").on("mouseleave",function(){
$(".shift").animate({bottom:"20px"},"fast");
$(".shift2").animate({bottom:"20px"},"fast");
});
$(".go-down").fadeOut();
});

//for going marginally lower in the page
$(".shift").click(function(){
console.log($(window).scrollTop());
var a=($(window).scrollTop()+500);
console.log($(window).scrollTop(a));

});
$(".shift2").mouseenter(function(){
$(".block").off("mouseleave");
$(".shift").stop();	
$(".shift2").stop(); 
$(".go-up").fadeIn();
 });
$(".shift2").mouseleave(function(){
$(".block").on("mouseleave",function(){
$(".shift").animate({bottom:"20px"},"fast");
$(".shift2").animate({bottom:"20px"},"fast");
});
$(".go-up").fadeOut();
});
//for going marginally higher in the page
$(".shift2").click(function(){
var a=($(window).scrollTop()-500);
console.log($(window).scrollTop(a));
});
//functions on clicking elements of bar
$("#home").click(function(){
console.log($(window).scrollTop("0"));
$("#home").addClass("change");
$("#first").removeClass("change");
$("#second").removeClass("change");
$("#third").removeClass("change");
$("#fourth").removeClass("change");
$("#hom").show();
$("#prod").css("display","none");
$("#serv").css("display","none");
$("#hist").css("display","none");
$("#sign").css("display","none");
});

$("#first").click(function(){
console.log($(window).scrollTop("0"));
$("#first").addClass("change");
$("#home").removeClass("change");
$("#second").removeClass("change");
$("#third").removeClass("change");
$("#fourth").removeClass("change");
$("#prod").show();
$("#hom").css("display","none");
$("#serv").css("display","none");
$("#hist").css("display","none");
$("#sign").css("display","none");
});

$("#second").click(function(){
console.log($(window).scrollTop("0"));
$("#second").addClass("change");
$("#home").removeClass("change");
$("#first").removeClass("change");
$("#third").removeClass("change");
$("#fourth").removeClass("change");
$("#serv").show();
$("#hom").css("display","none");
$("#prod").css("display","none");
$("#hist").css("display","none");
$("#sign").css("display","none");
});

$("#third").click(function(){
console.log($(window).scrollTop("0"));
$("#third").addClass("change");
$("#home").removeClass("change");
$("#first").removeClass("change");
$("#second").removeClass("change");
$("#fourth").removeClass("change");
$("#hist").show();
$("#hom").css("display","none");
$("#serv").css("display","none");
$("#prod").css("display","none");
$("#sign").css("display","none");
});

$("#fourth").click(function(){
console.log($(window).scrollTop("0"));
$("#fourth").addClass("change");
$("#home").removeClass("change");
$("#first").removeClass("change");
$("#second").removeClass("change");
$("#third").removeClass("change");
$("#sign").show();
$("#hom").css("display","none");
$("#serv").css("display","none");
$("#prod").css("display","none");
$("#hist").css("display","none");
});
});