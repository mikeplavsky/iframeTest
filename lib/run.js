function log(msg) {
	$.get( '/remote_log', {msg: msg} );
}

QUnit.done = function (failures,total) {
	log( 'Done test:' + window.parent.document.location.href + ' Failures:' + failures + ' Total:' + 	total);
}

QUnit.start_tests();