$().ready(function(){
	
	setInterval(function(){
		$.ajax({
			method: "POST",
			url: "./api.php",
			data: { 
				"KEY": "6555aa61af01ed41f6bf51a3242239fe",
				"METHOD":"GET_UI_BUTTONS"
			},
			dataType: "json"
		})
		.done(function( data ) {
			$(".bottom-content-button").each(function(index, obj) {
				// $(this).html(data.active[index]);
				$(this).find("h4").html(data[index].main_label);
				$(this).find(".left_label").html(data[index].left_label);
				$(this).find(".left_value").html(data[index].left_value);
				$(this).find(".right_label").html(data[index].right_label);
				$(this).find(".right_value").html(data[index].right_value);
				$(this).find(".main_url").val(data[index].main_url);
				$(this).find(".right_url").val(data[index].right_url);
			});
		})
		.fail(function( jqXHR, textStatus ) {
			console.log( "Request failed: " + textStatus );
		});
	}, 1000);

	$(".bottom-content-button h4").click( function() {
		window.location.href = $(this).parent().find(".main_url").val();
	});

	$(".bottom-content-button .right_label").click( function() {
		window.location.href = $(this).parent().parent().find(".right_url").val();
	});
});

