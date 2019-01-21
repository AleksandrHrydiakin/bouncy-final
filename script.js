$( ".menu-button" ).click(function() {
  $( ".menu-drop" ).slideToggle("slow");
});

$( window ).resize(function() {
  var newWindowWidth = $( window ).width();
  if( newWindowWidth > 991 ){
  	$( ".menu-drop" ).css("display", "flex");
  }else{
  	$( ".menu-drop" ).css("display", "none");
  }
});

$( ".details .btn_group div" ).click(function(){
	let thisIndex = $( ".details .btn_group div" ).index( this );
	$( ".details .btn_group div" ).removeClass( "btn-active" );
	$( this ).addClass( "btn-active" );
	$( ".creative" ).hide();
	$( ".creative" ).eq( thisIndex ).fadeIn();
})

$( ".services .btn_group div" ).click(function(){
	let thisIndex = $( ".services .btn_group div" ).index( this );
	$( ".services .btn_group div" ).removeClass( "btn-active" );
	$( this ).addClass( "btn-active" );
	$( ".services-item" ).hide();
	$( ".services-item" ).eq( thisIndex ).fadeIn();
})

$( ".portfolio .menu li div" ).click(function(){
	let thisIndex = $( ".portfolio .menu li div" ).index( this );
	$( ".portfolio .menu li div" ).removeClass( "portfolio-span-active" );
	$( this ).addClass( "portfolio-span-active" );
	$( ".works" ).hide();
	$( ".works" ).eq( thisIndex ).fadeIn();
})

$( ".like" ).click(function(){
	$( this ).toggleClass( "like-active" );
})

$( ".team .btn_10px" ).click(function(){
	let thisIndex = $( ".team .btn_10px" ).index( this );
	$( ".team .btn_10px" ).removeClass( "btn_10px-active" );
	$( this ).addClass( "btn_10px-active" );
	$( ".team_person" ).hide();
	$( ".team_person" ).eq( thisIndex ).fadeIn();
})

$( ".testimonials .btn_10px" ).click(function(){
	let thisIndex = $( ".testimonials .btn_10px" ).index( this );
	$( ".testimonials .btn_10px" ).removeClass( "btn_10px-active" );
	$( this ).addClass( "btn_10px-active" );
	$( ".testimonials-item" ).hide();
	$( ".testimonials-item" ).eq( thisIndex ).fadeIn();
})

$( ".news .btn_10px" ).click(function(){
	let thisIndex = $( ".news .btn_10px" ).index( this );
	$( ".news .btn_10px" ).removeClass( "btn_10px-active" );
	$( this ).addClass( "btn_10px-active" );
	$( ".news-item" ).hide();
	$( ".news-item" ).eq( thisIndex ).fadeIn();
})