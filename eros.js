
var gen_array = function (n, m) {
	var a = [];
	for (var i = n; i < m; ++i) {
		a.push (i);
	}
	return a;
};

var remove_multiples = function (a, d) {
	var new_a = [];
	var len = a.length;
	for (var i = 0; i < len; ++i) {
		if (a[i] <= d) {
			new_a.push (a[i]);
			continue;
		}
		
		if (a[i] % d != 0) {
			new_a.push (a[i]);
		}
	}
	
	return new_a;
};

	
var sieve = function (m) {
	var a = gen_array (2, m);
	var position = 0;
	
	var max = Math.floor (Math.sqrt (m));
	while (position < a.length && a[position] <= max) {
		a = remove_multiples (a, a[position]);
		++position;
	}
	
	return a;
};

var a = sieve (100);

console.log (a);
	
