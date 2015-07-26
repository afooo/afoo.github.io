(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://afooo.github.io:3000/1/post',
	    success: function(response, jqXHR, textStatus) {
			$('#postTemplate')
				.tmpl(response.posts)
				.appendTo('#content');
	    },
	    complete: function(jqXHR, textStatus) {
	    }
	});
}) ($);
