(function($){
	$(document).ready(function(){
		jQuery('.sort-by')
		.val('{{ collection.sort_by | default: collection.default_sort_by }}')
		.on('change', function() {
			Shopify.queryParams.sort_by = jQuery(this).val();
			location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
		});

		$('.grid-wrapper').css({
			height : ($('.grid').height())
		});
	});
})(jQuery);