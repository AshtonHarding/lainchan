/*
 * auto-reload.js
 * https://github.com/savetheinternet/Tinyboard-Tools/blob/master/js/auto-reload.js
 *
 * Brings AJAX to Tinyboard.
 *
 * Released under the MIT license
 * Copyright (c) 2012 Michael Save <savetheinternet@tinyboard.org>
 *
 * Usage:
 *   $config['additional_javascript'][] = 'js/jquery.min.js';
 *   $config['additional_javascript'][] = 'js/auto-reload.js';
 *
 */

$(document).ready(function(){
	if($('div.banner').length == 0)
		return; // not index
	
	setInterval(function() {
		if($(window).scrollTop() + $(window).height() < $('div.post.reply:last').position().top + $('div.post.reply:last').height())
			return; // not scrolled past last reply
		
		$.ajax({
			url: document.location,
			success: function(data) {
				$(data).find('div.post.reply').each(function() {
					var id = $(this).attr('id');
					if($('#' + id).length == 0) {
						$(this).insertAfter($('div.reply:last').next()).after('<br class="clear">');
					}
				});
			}
		});
	}, 5000);
});

