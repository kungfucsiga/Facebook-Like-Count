(function($){
	$.fn.fblikecount = function(options){
		var defaults = {
			baseUrl: 'http://graph.facebook.com/?ids='
		};
		var options = $.extend(defaults, options);
		var count = 0;
		return this.each(function(){
			var $this = $(this);
			$this.hide();
			var objLink = $(this).attr('title');
			if(objLink.indexOf('http') === 0){
				$.getJSON(defaults.baseUrl + objLink + '&callback=?', function(json){
					if(json[objLink] && json[objLink].shares){
						$this.html(json[objLink].shares);
//						$this.show();
                                                $(".result").text(json[objLink].shares);
					}
				});				
			}
		});
	}
})(jQuery);/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


