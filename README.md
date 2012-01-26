jQuery Slash Search Plugin
==========================


About
-----

This plugin allows you to give focus to the search field by typing the '/' (forward-slash) key.

Usage
-----

All you need to do is include Slash Search after jQuery and then include the following:

`jQuery(function($)) {
	$(document).slashSearch();
});`

You can pass in any of the following two options as part of an options object as well:

1. charCode: Use this if you decide you want a character other than '/' to bring focus to your search field.
2. selector: By default, the plugin will try to find the search field by the HTML5 'search' input type. Failing that, it will try using this jQuery selector (which defaults to '[name="search"]').

License
-------

MIT License - [http://remybach.mit-license.org/](http://remybach.mit-license.org/ 'Link through to read my License.')