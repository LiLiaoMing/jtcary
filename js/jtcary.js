$().ready(function(){
	
	initTopMenuIcon();
	initButtons();

	setInterval(function(){
		$.ajax({
			method: "POST",
			url: "./getbuttons.php",
			data: { 
				"KEY": "6555aa61af01ed41f6bf51a3242239fe",
				"METHOD":"GET_UI_BUTTONS"
			},
			dataType: "json"
		})
		.done(function( data ) {
			
			$('.bottom-content-button').each(function(i) {
			    $(this).find("h4").html(data[i].main_label);
			    $(this).find(".main_url").val(data[i].main_url);
			    $(this).find(".left_label").html(data[i].left_label);
			    $(this).find(".left_value").html(data[i].left_value);
			    $(this).find(".right_label").html(data[i].right_label);
			    $(this).find(".right_value").html(data[i].right_value);
			    $(this).find(".right_url").val(data[i].right_url);
			    if (data[i].button_enabled == 0)
			    	$(this).addClass('dsabled-color');
			    else
			    	$(this).removeClass('dsabled-color');
			});			
		})
		.fail(function( jqXHR, textStatus ) {
			console.log( "Request failed: " + textStatus );
		})
		.always(function() {
			console.log( "complete" );
		});
	}, 1000);

	
	function initTopMenuIcon() {
		$.ajax({
			method: "POST",
			url: "./geticons.php",
			data: { 
				"KEY": "6555aa61af01ed41f6bf51a3242239fe",
				"METHOD":"GET_UI_BUTTONS"
			},
			dataType: "json"
		})
		.done(function( data ) {
			var spanSize = Math.floor(12/data.length);
			$(".top-menu-container .left-border").removeClass("span2").addClass("span" + spanSize.toString());
			
			for(i=0; i<data.length; i++) {
				$(".top-menu-container")
					.append( generateIcon(spanSize, data[i].img_file, data[i].main_label, data[i].main_url) );
			}

			$(".top-menu-icon").click( function() {
				window.location.href = $(this).find(".main_url").val();
			});
		})
		.fail(function( jqXHR, textStatus ) {
			console.log( "Request failed: " + textStatus );
		})
		.always(function() {
			console.log( "complete" );
		});
	}

	function initButtons() {
		$.ajax({
			method: "POST",
			url: "./getbuttons.php",
			data: { 
				"KEY": "6555aa61af01ed41f6bf51a3242239fe",
				"METHOD":"GET_UI_BUTTONS"
			},
			dataType: "json"
		})
		.done(function( data ) {
			
			$(".buttons-container").html("");
			
			for(i=0; i<data.length; i++) {
				$(".buttons-container")
					.append( generateButton (data[i].main_label, data[i].main_url, data[i].left_label, 
											data[i].left_value, data[i].right_label, data[i].right_value, 
											data[i].right_url, data[i].button_enabled) );
			}

			$(".bottom-content-button h4").click( function() {
				window.location.href = $(this).parent().find(".main_url").val();
			});

			$(".bottom-content-button .right_label").click( function() {
				window.location.href = $(this).parent().parent().find(".right_url").val();
			});
		})
		.fail(function( jqXHR, textStatus ) {
			console.log( "Request failed: " + textStatus );
		})
		.always(function() {
			console.log( "complete" );
		});
	}

	function generateIcon(spanSize, img_file, main_label, main_url) {

		var newItem = '';
		newItem += '<div class="span'+ spanSize +' top-menu-icon">';
		newItem += '<div>';
		newItem += '<img src=".' + img_file + '">';
		newItem += '</div>';
		newItem += '<div>';
		newItem += '<span>' + main_label + '</span>';
		newItem += '</div>';
		newItem += '<input type="hidden" clsss="urls"/>';								
		newItem += '<input type="hidden" class="main_url" value="' + main_url + '"/>';
		newItem += '</div>';
		return newItem;
	}

	function generateButton(main_label, main_url, left_label, left_value, 
							right_label, right_value, right_url, button_enabled ) {
		var btnClass = "";
		var clrClass = "";
		if (button_enabled == 0)
		{
			btnClass = "button-disabled";
			clrClass = "dsabled-color";
			main_url = "#";
			right_url = "#";
		}
		else
			btnClass = "button-enabled";

		var newItem = '';
		newItem += '<div class="span3">';
		newItem += '<div class="bottom-content-button ' + clrClass + '">';
		newItem += '<img src="img/HEX.png">';
		newItem += '<h4 class="text-center ' + btnClass + '">' + main_label + '</h4>';
		newItem += '<div class="bottom-left">';
		newItem += '<sapn class="left_label">' + left_label + '</sapn><span class="left_value">' + left_value + '</span>';
		newItem += '</div>';
		newItem += '<div class="bottom-right">';
		newItem += '<sapn class="right_label ' + btnClass + '">' + right_label + '</sapn><span class="right_value">' + right_value + '</span>';
		newItem += '</div>';
		newItem += '<input type="hidden" clsss="urls"/>';
		newItem += '<input type="hidden" class="main_url" value="' + main_url + '"/>';
		newItem += '<input type="hidden" class="right_url" value="' + right_url + '"/>';							
		newItem += '</div>';
		newItem += '</div>';
		return newItem;	
	}
});

