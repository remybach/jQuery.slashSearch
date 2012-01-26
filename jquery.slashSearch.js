/*
 *  Title: jQuery Slash Search plugin
 *  Author: Rémy Bach
 *  Version: 1.0
 *
 *  Description:
 *  All this plugin does is essentially allow you to bind the '/' key to go to the first search box on your page.
 *	This kind of functionality is used on quite a few sites.
 *
 *	License: MIT License - http://remybach.mit-license.org/
 */
(function($) {
	var defaults = {
		charCode:47, // default to '/'
		selector:'[name="search"]'
	};

	$.fn.slashSearch = function(options) {
		// If options were passed in, merge them with the defaults.
		$.extend(defaults, options || {});

		// Try find the search field on the page.
		var _search = $(this).find('input[type="search"]');

		if (_search.length === 0) { // Ok, that didn't work - try using the selector from our options
			_search = $(this).find(defaults.selector);
		}

		if (_search.length === 0) { // This still isn't working. Attempt to make some suggestions.
			var _msg = 'Maybe try $(document).slashSearch();';
			if (this.toString().match(/HTMLDocument/)) { // If they're already trying within the document scope...
				_msg = 'Maybe try passing in a selector as follows: $(document).slashSearch({ selector:\'input.search\' });';
			}

			if (window.console && console.info)console.info('Can\'t seem to find your search field within the context specified. '+_msg);
			return false;
		}

		this.keypress(function(e) {
			// If the user isn't trying to legitimately type & the key that was pressed matches
			if ($('input:focus, textarea:focus').length === 0 && e.charCode === defaults.charCode) {
				_search.focus();
				return false;
			}
		});

		return this;
	}
})(jQuery);
