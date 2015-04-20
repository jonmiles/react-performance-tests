var factory = (function () {

	var options = {};

	var data = [];

	function init(optionsIn) {

		options = optionsIn;
		
		this.data = [];

		for (i = 0; i < options.maxCount; i++) {
			var stateNum = Math.round(Math.random() * 100);
			this.data[i] = { val: stateNum, color: getStateColor(stateNum) };
		}

		return this;
	}

	function update() {
		
		for (i = 0; i < options.changeCount; i++) {
			var stateNum = Math.round(Math.random() * 100);
			this.data[Math.round(Math.random() * options.maxCount)] = { val: stateNum, color: getStateColor(stateNum) };
		}

		return this;
	}

	function getStateColor(state) {

		var colour = 'lightGray';
		var stateNum = +state;

		if (stateNum === 0) {
			colour = 'red';
		}
		else if (stateNum === 100) {
			colour = 'lime';
		}
		else if ((stateNum > 0) && (stateNum < 1)) {
			colour = 'rgb(255, 141, 0)';
		}
		else if ((stateNum >= 1) && (stateNum < 100)) {
			colour = 'rgb(255, ' + (140 + Math.floor(stateNum)) + ', 0)';
		}

		return colour;
	}

	return {
		init: init,
		update: update,
		data: data
	};

})();