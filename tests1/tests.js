module( 'start' );

test( 'check devs',  function () {

    same($('#header').length, 1, 'header is there' );
	same($('#main').length, 1, 'main is there' );
	same($('#footer').length, 1, 'footer is there' );

});
