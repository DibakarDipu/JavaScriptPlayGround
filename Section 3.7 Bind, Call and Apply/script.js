// Bind, Call and Apply

var john = {
	name: 'John',
	age: 29,
	job: 'Teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladis and Gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'casual') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 31,
	job: 'Dancer'
};

john.presentation('casual', 'morning');

john.presentation.call(emily, 'formal', 'afternoon');						// Method Borrowing		-- Call Method

//john.presentation.apply(emily, ['casual', 'night']);						// Apply Method, but this not gonna work, cause our John Object dosen't accept array

var johnCasual = john.presentation.bind(john, 'casual');					// Bind Method - Always Creates another variable to store data and works as a function
johnCasual('evening');														// Bind function example
johnCasual('night');														// Bind allows us to preset some arguments 	-- Carrying technique

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');


// Project Example

var years = [1990, 1995, 1997, 2001, 2005, 1998, 1999];

function arrayCalc (arr, fn) {												// generic function
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge (el) {												// callback function
	return 2018 - el;
}

function isFullAges (limit, el) {													// callback function
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAges.bind(this, 20));

console.log(ages);
console.log(fullJapan);

