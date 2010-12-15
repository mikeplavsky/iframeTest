$( function() {

    $( 'iframe' ).bind( 'load', function inject() {

    var doc = $( 'iframe' ).contents()[0];
    
    doc.head.appendChild( $( '<link rel="Stylesheet" media="screen" href="../lib/qunit/qunit.css" />' )[0] );
    doc.body.appendChild( 
    
        $( '<div id="tests" style="position:fixed;top:0;left:0;">' )
        .append( $('<ol id="qunit-tests">' ) )[0]  ); 
    
    function loadScript(path, callback) {
        
        var scr =  $( '<script>' ).attr( 'src', path );
        scr.bind( 'load', callback );
        
        doc.head.appendChild( scr[0] ); 
    
    }
    
    function load (scripts) {
    
        if (scripts.length === 0) {
            return;
        }
            
        var first = scripts.splice(0,1);
        loadScript( first, function () { load( scripts ); } )
            
    }
    
	var path = location.pathname.match( '.*/' );
    
    load( [ path + '../lib/jquery-1.4.4.js',path + '../lib/qunit/qunit.js', path + 'tests.js', path + '../lib/run.js' ] );
   
    });
    
});
