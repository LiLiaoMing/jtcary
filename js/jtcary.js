$().ready(function(){
	
	setInterval(function(){
		$.ajax({
			method: "GET",
			url: "./back_service.php",
			dataType: "json"
		})
		.done(function( data ) {
			$(".bottom-content-button p span").each(function(index, obj) {
				$(this).html(data.active[index]);
			});
		})
		.fail(function( jqXHR, textStatus ) {
			console.log( "Request failed: " + textStatus );
		});
	}, 1000);
});