
// Reference Firebase //
var rootRef = new Firebase('https://zeu80fakn4c.firebaseio-demo.com/');
rootRef.child('gameTitle');


// This is chosen by user as "game board size" //
var size = 2 ;


// Find number of tiles based on Centered Hexagonal Number sequence //
var tiles = 3 * (Math.pow(size, 2) - size) + 1;


// Create all hex objects //
var hexes = [];
for (var i = 0; i < tiles; ++i) {
	hexes[i] = {
		values: [0, 0, 0, 0, 0, 0],
		owner: 0,
		position: []
	};
};


// This will be position of top-left hex //
var row = 0;
var col = size - (size * 2 - 1);


// Dynamically sets position of all hexes //
for (var i = 0; i < tiles; ++i) {
	if (col < 1) {
		hexes[i] = {
			position: [col, row]
		};
		++row;
		if (row == size) {
			row = (row + col) * (-1);
			++col;
		}
	} else {
		++row;
		hexes[i] = {
			position: [col, row]
		};
		if (row + col + 1 == size) {
			row = (row + col + 1) * (-1);
			++col;
		};
	}
};


// Set card values //
var cardValues = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
];


// Totals hex ownership to determine winner //
var hexSum = 0;


// Set turn counter (undefined until first player arrives) and player id's //
var turn;

function setPlayer() {
	if (turn === undefined) {
		playerId = 1;
		turn = -1;
	} else {
		playerId = 2;
		turn++;
	}
};


// Increment turn counter //
function nextTurn() {
	turn++;
	if (turn == 7) {
		winLogic();
	}
};


// When a hex is claimed by a player //
function steal(hex) {
	if (turn %2 == 0) {
		hexClaims[hex] = 1;
	} else {
		hexClaims[hex] = -1;
	}
};


// When a hex is made neutral //
function neutralize(hex) {
	hexClaims[hex] = 0;
}


// Run win logic after all hexes have been filled - negative vs. positive //
function winLogic() {
	if (hexSum > 0) {
		oneWins();
	} else if (hexSum < 0) {
		twoWins();
	} else {
		tieGame();
	}
};


// Define logic for various game outcomes //
function oneWins() {

}

function twoWins() {

}

function tieGame() {

}



