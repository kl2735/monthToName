var month = (function () {
	var _months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];

	var name = function (number) {
		if(isNaN(number)) {
			throw new Error("error - not a number");
		}
		if(number < 0 || number >11){
			return "error - not in the range";
		}
		return _months[number];
	};

	var number = function (name) {
		if(typeof name !== 'string'){
			return "error - not a string";
		}
		name = name.toLowerCase().slice(0, 3);
		return _months.indexOf(name);
	}

	return {
		name: name,
		number: number
	}
})();

module.exports = month;

