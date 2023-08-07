window.jQuery = window.$ = require('jquery');
import 'normalize.css'
import "../../css/haze.scss"

let displayHere = () => {
	switch (currentFace[here][0]) {
		case 0:
			$('.box').css('background-color', 'black');
			break;
		case 1:
			$('.box').css('background-color', 'white');
			break;
		case 2:
			$('.box').css('background-color', 'white');
			break;
	}
	if (isUp()) {
		switch (currentFace[here - width][0]) {
			case 0:
				$('.box').css('border-top', '3px solid black');
				break;
			case 1:
				$('.box').css('border-top', '1px solid black');
				break;
			case 2:
				if (currentFace[here - width][3] == 1) {
					$('.box').css('border-top', '3px solid black');
				} else {
					$('.box').css('border-top', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isRight()) {
		switch (currentFace[here + 1][0]) {
			case 0:
				$('.box').css('border-right', '3px solid black');
				break;
			case 1:
				$('.box').css('border-right', '1px solid black');
				break;
			case 2:
				if (currentFace[here + 1][4] == 1) {
					$('.box').css('border-right', '3px solid black');
				} else {
					$('.box').css('border-right', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isDown()) {
		switch (currentFace[here + width][0]) {
			case 0:
				$('.box').css('border-bottom', '3px solid black');
				break;
			case 1:
				$('.box').css('border-bottom', '1px solid black');
				break;
			case 2:
				if (currentFace[here + width][1] == 1) {
					$('.box').css('border-bottom', '3px solid black');
				} else {
					$('.box').css('border-bottom', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	if (isLeft()) {
		switch (currentFace[here - 1][0]) {
			case 0:
				$('.box').css('border-left', '3px solid black');
				break;
			case 1:
				$('.box').css('border-left', '1px solid black');
				break;
			case 2:
				if (currentFace[here - 1][2] == 1) {
					$('.box').css('border-left', '3px solid black');
				} else {
					$('.box').css('border-left', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}

	if (currentFace[here][0] == 2) {
		if (currentFace[here][1] == 1) $('.box').css('border-top', '3px solid black');
		if (currentFace[here][2] == 1) $('.box').css('border-right', '3px solid black');
		if (currentFace[here][3] == 1) $('.box').css('border-bottom', '3px solid black');
		if (currentFace[here][4] == 1) $('.box').css('border-left', '3px solid black');
	}

	// $('p').text(
	// 	'here: ' +
	// 		here +
	// 		' / point: [' +
	// 		point +
	// 		']' +
	// 		' / Face: [' +
	// 		currentStatus[0] +
	// 		']' +
	// 		' / FaceList: [' +
	// 		currentFace +
	// 		'] / touching [' +
	// 		getTouchingFace(0) +
	// 		'] '
	// );
};

let isRight = () => {
	return here % width != width - 1;
};
let isLeft = () => {
	return here % width != 0;
};
let isUp = () => {
	return here > width - 1;
};
let isDown = () => {
	return here < width * (height - 1);
};

let updatePoint = () => {
	point = [here % width, Math.floor(here / width)];
};
let updateHere = (direction) => {
	switch (direction) {
		case 0:
			here -= width;
			break;
		case 1:
			here += 1;
			break;
		case 2:
			here += width;
			break;

		case 3:
			here -= 1;
			break;
	}
};
let canMove = (direction) => {
	if (currentFace[here][0] == 2) {
		if (currentFace[here][direction + 1] == 1) return false;
	}

	switch (direction) {
		case 0:
			if (isUp()) {
				switch (currentFace[here - width][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here - width][3] == 0) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 1:
			if (isRight()) {
				switch (currentFace[here + 1][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here + 1][4] == 0) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 2:
			if (isDown()) {
				switch (currentFace[here + width][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here + width][1] == 0) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 3:
			if (isLeft()) {
				switch (currentFace[here - 1][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here - 1][2] == 0) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
	}
};
let rotateFaceOne = (face_in) => {
	let tmp_face = [];
	for (let i = 0; i < height * width; i++) {
		let x = i % width;
		let y = Math.floor(i / width);

		tmp_face[x * width - y + width - 1][0] = face[i][0];
		if (face[i][0] == 2) {
			for (let k = 1; k < 5; k++) {
				tmp_face[x * width - y + width - 1][(k % 4) + 1] = face[i][k];
			}
		}
	}
};
let rotateFace = (face, status) => {
	if (status == 0) return face;
	let rotatedFace = [];
	for (let i = 0; i < height * width; i++) {
		let x = i % width;
		let y = Math.floor(i / width);
		rotatedFace[x * width - y + width - 1] = [];
		rotatedFace[x * width - y + width - 1][0] = face[i][0];
		if (face[i][0] == 2) {
			for (let k = 1; k < 5; k++) {
				rotatedFace[x * width - y + width - 1][(k % 4) + 1] = face[i][k];
			}
		}
	}
	return rotateFace(rotatedFace, status - 1);
};

// return [face, rotation]
let getTouchingFace = (direction) => {
	// if (direction == 0 && here == 2) {
	// 	$('main').text(
	// 		// touchingFace[currentStatus[0] - 1][(direction - currentStatus[1]) % 4][0]
	// 		touchingFace[2][1]
	// 	);
	// }
	let second = (direction - currentStatus[1]) % 4;
	while (second < 0) second += 4;

	return [
		touchingFace[currentStatus[0] - 1][second][0],
		(touchingFace[currentStatus[0] - 1][second][1] + currentStatus[1]) % 4,
	];
};

let canMoveFace = (direction, touchingFaceStatus) => {
	let rotatedFace = rotateFace(allFaces[touchingFaceStatus[0] - 1], touchingFaceStatus[1]);
	switch (direction) {
		case 0:
			switch (rotatedFace[here + (height - 1) * width][0]) {
				case 0:
					return false;
				case 1:
					return true;
				case 2:
					if (rotatedFace[here + (height - 1) * width][3] == 1) return false;
					else return true;
			}
		case 1:
			switch (rotatedFace[here - (width - 1)][0]) {
				case 0:
					return false;
				case 1:
					return true;
				case 2:
					if (rotatedFace[here - (width - 1)][4] == 1) return false;
					else {
						return true;
					}
			}
		case 2:
			switch (rotatedFace[here - (height - 1) * width][0]) {
				case 0:
					return false;
				case 1:
					return true;
				case 2:
					if (rotatedFace[here - (height - 1) * width][1] == 1) return false;
					else return true;
			}
		case 3:
			switch (rotatedFace[here + (width - 1)][0]) {
				case 0:
					return false;
				case 1:
					return true;
				case 2:
					if (rotatedFace[here + (width - 1)][2] == 1) return false;
					else return true;
			}
	}
};
let updateCurrentStatus = (direction) => {
	currentStatus = getTouchingFace(direction);
};
let updateCurrentFace = () => {
	currentFace = rotateFace(allFaces[currentStatus[0] - 1], currentStatus[1]);
};
let displayShareButton = () => {
	let window_width = window.innerWidth;
	let window_height = window.innerHeight;
	let clear_width = $('.displayClear img').width();
	let clear_height = $('.displayClear img').height();
	$('.share-btn').css({
		top: window_height / 2 + clear_height / 2 + 'px',
		right: window_width / 2 - clear_width / 2 + 'px',
	});
};

const width = 3;
const height = 3;
const face1 = [[1], [1], [1], [1], [2, 1, 0, 0, 0], [2, 1, 0, 0, 0], [1], [0], [0]];
const face2 = face1;
const face3 = [[1], [1], [1], [1], [0], [1], [1], [1], [1]];
const face4 = [[1], [1], [1], [0], [1], [0], [0], [1], [0]];
const face5 = [[1], [1], [1], [2, 0, 0, 1, 0], [2, 1, 0, 1, 0], [2, 1, 0, 0, 0], [1], [1], [1]];
const face6 = face4;
const allFaces = [face1, face2, face3, face4, face5, face6];
let clear_flag = false;
let here = 4;
let point = [here % width, Math.floor(here / width)];
const comparedStr = [68, 73, 67, 69];
const comparedStr2 = [68, 73, 69];
const comparedStr3 = [83, 65, 73, 75, 79, 82, 79];
let currentFace = face1;
const touchingFace = [
	[
		[3, 3],
		[2, 0],
		[5, 3],
		[4, 0],
	],
	[
		[3, 0],
		[6, 0],
		[5, 2],
		[1, 0],
	],
	[
		[4, 2],
		[6, 3],
		[2, 0],
		[1, 1],
	],
	[
		[3, 2],
		[1, 0],
		[5, 0],
		[6, 0],
	],
	[
		[4, 0],
		[1, 1],
		[2, 2],
		[6, 3],
	],
	[
		[3, 1],
		[4, 0],
		[5, 1],
		[2, 0],
	],
];
let currentStatus = [1, 0];
let cnt = 0;
let cnt2 = 0;
let cnt3 = 0;

displayHere(currentFace);

$('html').keyup((e) => {
	if (!clear_flag) {
		switch (e.which) {
			case 38: // Key[↑]
				if (canMove(0)) {
					updateHere(0);
					updatePoint();
					displayHere();
				} else {
					if (0 <= here && here < width) {
						if (canMoveFace(0, getTouchingFace(0))) {
							here += (height - 1) * width;
							updatePoint();
							updateCurrentStatus(0);
							updateCurrentFace();
							displayHere();
						}
					}
				}
				break;
			case 39: // Key[→]
				if (canMove(1)) {
					updateHere(1);
					updatePoint();
					displayHere();
				} else {
					if (here % width == width - 1) {
						if (canMoveFace(1, getTouchingFace(1))) {
							here -= width - 1;
							updatePoint();
							updateCurrentStatus(1);
							updateCurrentFace();
							displayHere();
						}
					}
				}
				break;
			case 40: // Key[↓]
				if (canMove(2)) {
					updateHere(2);
					updatePoint();
					displayHere();
				} else {
					if (here >= 6 && here <= 8) {
						if (canMoveFace(2, getTouchingFace(2))) {
							here -= (height - 1) * width;
							updatePoint();
							updateCurrentStatus(2);
							updateCurrentFace();
							displayHere();
						}
					}
				}
				break;
			case 37: // Key[←]
				if (canMove(3)) {
					updateHere(3);
					updatePoint();
					displayHere();
				} else {
					if (here % width == 0) {
						if (canMoveFace(3, getTouchingFace(3))) {
							here += width - 1;
							updatePoint();
							updateCurrentStatus(3);
							updateCurrentFace();
							displayHere();
						}
					}
				}
				break;
			default:
				if (65 <= e.which && e.which <= 90) {
					if (comparedStr[cnt] == e.which) cnt++;
					else cnt = 0;
					if (comparedStr2[cnt2] == e.which) cnt2++;
					else cnt2 = 0;
					if (comparedStr3[cnt3] == e.which) cnt3++;
					else cnt3 = 0;
					if (cnt == 4 || cnt2 == 3 || cnt3 == 7) {
						$('.displayClear').css('display', 'block');
						clear_flag = true;
						displayShareButton();
						setTimeout("alert('Number: 9')", 500);
					}
				}
				break;
		}
	}
});
