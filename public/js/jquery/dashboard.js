;(function ($, window, document, undefined) {

	/*global jQuery, console*/

	'use strict';

	var pluginName = 'dashboard';

	$.fn[pluginName] = function (options) {
		this.each(function () {
			var _this = $.data(this, pluginName);
			if (typeof options === 'string') {
				_this[options].apply(_this, {});
			}
			else {
				return $.data(this, pluginName, new Dashboard(this, $.extend(true, {}, options)));
			}
		});
	};

	var Dashboard = function (el, options) {

		this.$element = $(el);
		this.options = options;
		this.render();
	};

	Dashboard.prototype.update = function () {
		this.options.factory.update();
		this.render();
	};

	Dashboard.prototype.render = function () {

		var data = this.options.factory.data;

		var $wrapper = $('<div></div>');
		for (i = 0; i < data.length; i++) {
			$wrapper.append('<div class="item" style="background-color:' + data[i] + ';"></div>');
		}
		this.$element.empty().append($wrapper);
	};

})(jQuery, window, document);
