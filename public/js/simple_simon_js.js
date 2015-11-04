
var randomStored = [];
var userArray = [];
var correct = true;
function simonRandom() {
	return Math.floor((Math.random() * 4));
}

var compareTurn = function(){
	// for(var i=0; i<simonArray.length; i++) {
	console.log(randomStored);
	console.log(userArray);
	if (userArray[userArray.length - 1] != randomStored[userArray.length - 1]) {
		randomStored = [];
		userArray = [];
		console.log('incorrect');

	alert('Time to start over!', 'Game Over');
		$(".scoreUp").html("0");
		$(".levUp").html("0");
		} 

	if (userArray.length == randomStored.length) {
		console.log('correct');
		userArray = [];
		console.log(userArray);
		simonTurn();
		levUp();
		scoreUp();
	};
}
var levUp = function() {
	var lastLevel = $(".levUp").text()
	var newLevel = parseInt(lastLevel) + 1;
	if ($(".scoreUp").text() % 3 == 0) {
		$(".levUp").text(newLevel);		
	}
}
var scoreUp = function() {
	var lastScore = $(".scoreUp").text()
	var newScore = parseInt(lastScore) + 1;
	$(".scoreUp").text(newScore);
}
var compareTurnHard = function(){
	console.log(randomStored);
	console.log(userArray);
	if (userArray[userArray.length - 1] != randomStored[userArray.length - 1]) {
		randomStored = [];
		userArray = [];
		console.log('incorrect');

	alert('Time to start over!', 'Game Over');
		$(".scoreUp").html("0");
	} 

	if (userArray.length == randomStored.length) {
		console.log('correct');
		userArray = [];
		console.log(userArray);
		simonTurnHard();
		levUp();
		scoreUp();
	};
}

$('.pad').click(function() {
	// $(this).animate({opacity: 1}, 500).animate({opacity: 0.6}, 500);
	var buttonNumber = $(this).attr("id");
	animateSquare(buttonNumber);
	userArray.push(buttonNumber);
	compareTurn();
});

function animateSquare (id) {
	$("#" + id).addClass('active');
	setTimeout(function() {
		$("#" + id).removeClass('active');
	}, 250);
}
function simonTurn() {
	var pad = $('.pad');
	var random = simonRandom();
	var buttonToAnimate = pad[random];
	var id = buttonToAnimate.getAttribute('id');
	console.log(id);
	var duration = 1000;
	randomStored.push(id);

	randomStored.forEach(function(buttonId, index) {
		setTimeout(function(){
			console.log(buttonId);
			animateSquare(buttonId);
		}, duration);
		duration += 1000;
	});
};
function simonTurnHard() {
	var pad = $('.pad');
	var random = simonRandom();
	var buttonToAnimate = pad[random];
	var id = buttonToAnimate.getAttribute('id');
	console.log(id);
	var duration = 50;
	randomStored.push(id);
	
	randomStored.forEach(function(buttonId, index) {
		setTimeout(function(){
			console.log(buttonId);
			animateSquare(buttonId);
		}, duration);
		duration += 50;
	})
};

$('#normal').click(function(){
	simonTurn();
});
$('#hard').click(function(){
	simonTurnHard();
});


