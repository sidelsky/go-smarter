function initFlex(){
	$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: false,
			controlNav: true,
			directionNav: false,
			slideshow: false,
			before: function () {
				$('.info-box').hide();
				//$('.cont p').hide();
			},
			after: function () {
				$('.info-box').fadeIn(400);
				//$('.cont p').delay(100).fadeIn(600);
			}
		});
}

function wScroll(){
	 	//Scroll pane - scrollbars 
 	$('.scroll-pane').jScrollPane({
 		verticalDragMinHeight: 40,
 		verticalDragMaxHeight: 80,
 		horizontalDragMinWidth: 3,
 		horizontalDragMaxWidth: 3
 	});
}


//Initialise plugin
// $('.sf-menu').superfish({
// 	delay:       		1000,                            	// one second delay on mouseout
// 	animation:   		{opacity:'show', height:'show'},  // fade-in and slide-down animation
// 	animationOut:  	{height:'hide'},
// 	speed:       		200,                          		// faster animation speed
// 	autoArrows:  		false                            	// disable generation of arrow mark-up
// });

$('document').ready(function () {
 	
	initFlex();
	wScroll();
	
$('.main-navigation >ul >li:has(.sub-menu)').addClass('hasSub');
$(".hasSub").append("<i class='fa fa-angle-down' id='arrow'></i>");


$('#ham').click(function(e) {
	$('#mobile').toggleClass('toggle').promise().done(function(){
		$('.info-box, .plan-find-mobile').toggleClass('toggle');
	});
	e.preventDefault();
}); 

// $('ul.sf-menu').superfish({
// 	delay: 1000,  
// }, console.log();
// );	

// 	$(".fa-angle-down").click(function() { 
// 	//When trigger is clicked...  
	
// 		//Following events are applied to the subnav itself (hiding and showing subnav)  
// 		$(this).parent().addClass('tap').find(".menu-wrapper").addClass('tap'); //Drop down the subnav on click  
		
// 		$(this).parent().hover(function() {
// 		}, function(){  
// 			$(this).removeClass('tap').find(".menu-wrapper").removeClass('tap');
// 		});  
		
// 	//Following events are applied to the trigger (Hover events for the trigger)  
// 	}).hover(function() {  
// 		$(this).addClass("subhover"); //On hover over, add class "subhover"  
// 	}, function(){  //On Hover Out  
// 		$(this).removeClass("subhover"); //On hover out, remove class "subhover"  
// 	});
	
	
	
	
//$('#arrow').click(function(){
//	('this').parent().find('.menu-wrapper').show();
//});
	
//var myItem = $(this).parent().find('.menu-wrapper');	

	
//$('.fa-angle-down').click( function(e) {
//    e.preventDefault();
//    //$('.menu-wrapper').removeClass('tap');
//		//$(this).parent().find('.menu-wrapper').toggleClass('tap');
//		
//	if($(this).parent().find('.menu-wrapper').hasClass('tap')){
//			$(this).siblings().find('.menu-wrapper').removeClass('tap');
//	} else {
//			$(this).parent().find('.menu-wrapper').addClass('tap')
//	}
//	
//});	

	
	

//$('.menu-wrapper').parent().find('.menu-wrapper').hover(function() {
//}, function(){  
//	$(this).removeClass('tap').find('.menu-wrapper').fadeOut('fast');
//});	
 
	
//	$('.fa-angle-down').click(function(){
//		$('.menu-wrapper').css({
// 			'opacity': 1,
// 			'left': 0
//		});
//		
//	});

	
//	$("ul.sub-menu").parent().append("<span></span>"); 
//	//Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)  
//	
//	$("ul#menu-main-nav li span").click(function() { 
//	//When trigger is clicked...  
//	
//		//Following events are applied to the subnav itself (hiding and showing subnav)  
//		$(this).parent().addClass('sub-open').find("ul.sub-menu").fadeIn('fast').show(); //Drop down the subnav on click  
//		
//		$(this).parent().hover(function() {}, function(){  
//			$(this).removeClass('sub-open').find("ul.sub-menu").fadeOut('fast'); //When the mouse hovers out of the subnav, move it back up  
//		});  
//		
//		//Following events are applied to the trigger (Hover events for the trigger)  
//	}).hover(function() {  
//		$(this).addClass("subhover"); //On hover over, add class "subhover"  
//	}, function(){  //On Hover Out  
//		$(this).removeClass("subhover"); //On hover out, remove class "subhover"  
//	});
//	
	
	
 	var windowWidth = $(document).width(),
 			windowHeight = $(document).height(),
			
			flexsliderWidth = $('.flexslider').width(),
			wrapperHeight = $('.right').height()
	
			$(".right").css("min-height", windowHeight-151);
		
/*	$('.fa-angle-left').click(function () {
 		$('.fa-angle-right').removeClass('hidden');
 		$('.fa-angle-left').addClass('hidden');
 		$('.left').removeClass('open');
		$('.right').removeClass('close');
 		$('.slides li').addClass('close');
		$('.flexslider ul li').css({
 			'width': flexsliderWidth,
 			//'height': windowHeight
		});
		initFlex();
		window.focus();
 	});*/
	 
/*	
 		$('.fa-angle-right').click(function () {
 		$('.fa-angle-right').addClass('hidden'); 
 		$('.fa-angle-left').removeClass('hidden'); // Open / Close arrrows
 		$('.right').addClass('close');
 		$('.left').addClass('open');
 		$('.slides li').addClass('open');
		$('.flexslider ul li').css({
 			'width': windowWidth,
 			//'height': windowHeight
		});
			initFlex();
			window.focus();
 	});
	*/
	 
	//x=0;
 
 
	 
	
//	 $( window ).resize(function() {
//	 	$('.jspScrollable ').css({
// 			'height': wrapperHeight
//		});
//		 $(".info-box .inner").text(x+=1);
//		 console.log(wrapperHeight);
//		 //initFlex();
//	 });
		 
	
//
// 	$('.flexslider ul li').css({
// 		'width': windowWidth,
// 		'height': windowHeight
// 	});

 	$(window).resize(function () {
 		/*var ww = $(window).width();
 		$('.flexslider ul li').each(function () {
 			$(this).width(ww);
 		});*/
		wScroll();
 	});

 	//End	
 });