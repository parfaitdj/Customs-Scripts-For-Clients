<script>
	( function( $ ) {
		$( function() {
			window.FX_CHAT_SENT = false;
			const targetNode = document.body;
		    const config = { attributes: true, childList: true, subtree: true };
		    const callback = function(mutationsList, observer) {
		        for(const mutation of mutationsList) {
		            if (mutation.type === 'childList') {
		                if ( $( 'iframe#podium-modal' ).length ) {
		                    setTimeout( function() {
		                        var iframe = $( 'iframe#podium-modal' ).contents();
		                        iframe.find( 'button' ).on( 'click', function() {
			                        if ( ! window.FX_CHAT_SENT ) {
			                        	var yourName = iframe.find( 'input#Name' ).val();
			                        	var yourPhone = iframe.find( 'input[id="Mobile Phone"]' ).val();
			                        	var yourMessage = iframe.find( 'textarea#Message' ).val();
			                        	console.log( yourName, yourPhone, yourMessage );
			                        	var $form = $( '<form id="podium"></form>' );
			                        	$form.append( '<input type="hidden" name="your-name" value="' + yourName + '">' );
			                        	$form.append( '<input type="hidden" name="your-phone" value="' + yourPhone + '">' );
			                        	$form.append( '<input type="hidden" name="your-message" value="' + yourMessage + '">' );
			                        	if ( typeof mcfx !== 'undefined' ) {
                                            mcfx('capture', $form.get(0)); 	
			                        	}
			                        	window.FX_CHAT_SENT = true;
			                        }
		                        });
		                    }, 500 );
		                    observer.disconnect();
		                }
		            }
		        }
		    };
		    const observer = new MutationObserver(callback);
		    observer.observe(targetNode, config);
		});
	}( jQuery ));
</script>
