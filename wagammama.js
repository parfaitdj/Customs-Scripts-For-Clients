<script>
//Adding Jquery to the website in case the client doesn't use Jquery
var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
script.onload = function(){
    // Executing JQuery code after making sure the library is loaded
  ( function( $ ) {
		$( function() {
//Selecting the submit button (customize the selector to your liking)
$(document).on('click', '.ContactForm__enquiry-form__submit-btn_1vn9', function() {

//Targetting the first parent before the fields in the form start
var $fxform = $('.ContactForm__enquiry-form_1c07');

//Checking MCFX isn't anchoring to the form
if ( typeof mcfx !== 'undefined' ) {

//Creating a fake jQuery form and assign it the id you'll use to track the form in LMFX
$form = $( '<form id="contact-us">' );

//Append all the fields under the last parent 
$form.append( $fxform.children() )

//Adding name attributes to the inputs (You'll use those while mapping)
$form.find( 'input, select, textarea' ).each( function( index ) {
		$( this ).attr( 'name', 'fx-' + index );
	});
    
//Verifying we're still working with the right form
console.log( $form.get( 0 ) );

//Capture the form (This is where the fake form data is sent to LMFX)
mcfx('capture', $form.get(0)); 
		
	 }
      });
   });
  }( jQuery ));} 
</script>
