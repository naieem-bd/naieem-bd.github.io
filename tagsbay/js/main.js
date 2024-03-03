$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},450);
		return false;
	});



	// count down
	$('#clock').countdown('2017/05/25', function(event) {
		$(this).html(event.strftime('%D days %H:%M:%S'));
	});

	// raty
	$('.raty-star').raty({
		score: function() {
		    return $(this).attr('data-score');
		},
		path: 'img/raty-imgs/',
		readOnly: true
	});


	// list / grid switcher

	
    $('.btn-list-view').click(function(event){
    	event.preventDefault();
    	$('.single-ps-item').addClass('list-view');
    	$('.btn-grid-view').removeClass('active');
    	$(this).addClass('active');
    });

    $('.btn-grid-view').click(function(event){
    	event.preventDefault();
    	$('.single-ps-item').removeClass('list-view');
    	$('.btn-list-view').removeClass('active');
    	$(this).addClass('active');
    });



    // add to fav toggle
    $('.single-ps-item .add-to-fav i.fa').click( function(event) {
    	event.preventDefault();
    	$(this).toggleClass('fa-heart-o fa-heart');
    });





	// navbar becomes cross cross
	// $(".navbar-toggle").on("click", function () {
	// 	$(this).toggleClass("active");
	// });


	$("input:checkbox").on('click', function() {
	  // in the handler, 'this' refers to the box clicked on
	  var $box = $(this);
	  if ($box.is(":checked")) {
	    // the name of the box is retrieved using the .attr() method
	    // as it is assumed and expected to be immutable
	    var group = "input:checkbox[name='" + $box.attr("name") + "']";
	    // the checked state of the group/box on the other hand will change
	    // and the current value is retrieved using .prop() method
	    $(group).prop("checked", false);
	    $box.prop("checked", true);
	  } else {
	    $box.prop("checked", false);
	  }
	});


	// mobile offcanvas menu
	$('#main-menu .mbl-offset-content .offset-dropdown-content>a.dropdown').click( function() {
		$(this).toggleClass('open');
	});




















	
});





// if ( window.innerWidth < 768) {
// 	$("#all-dept-nav").addClass('collapse');
	
// }


// $(window).resize( function() {
// 	if (window.innerWidth < 768) {
// 		$("#all-dept-nav").addClass('collapse');
// 	} else {
// 		$("#all-dept-nav").removeClass('collapse');
// 	}
// })
