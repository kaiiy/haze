import $ from 'jquery';

import 'normalize.css'
import "/assets/css/haze.scss"

let displayHere = () => {
	$('.box').css('border', '1px solid black');
	if (cells[here] == 0) {
		$('.box').css('background-color', 'white');
	} else {
		$('.box').css('background-color', 'black');
	}
	if (isRight()) {
		if (cells[here + 1] == 1) {
			$('.box').css('border-right', '3px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1] == 1) {
			$('.box').css('border-left', '3px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width] == 1) {
			$('.box').css('border-top', '3px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width] == 1) {
			$('.box').css('border-bottom', '3px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}

	switch (here) {
		case 27:
		case 53:
			$('.box').css('border-bottom', '3px solid black');
			break;
		case 38:
		case 64:
			$('.box').css('border-top', '3px solid black');
			break;
	}

	switch (here) {
		case 0:
			$('.box').text('L');
			break;
		case 2:
			$('.box').text('I');
			break;
		case 4:
			$('.box').text('S');
			break;
		case 6:
			$('.box').text('T');
			break;
		case 8:
			$('.box').text('E');
			break;
		case 10:
			$('.box').text('N');
			break;
		default:
			$('.box').text('');
			break;
	}
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

let canRight = () => {
	let flag = false;
	if (isRight()) {
		if (cells[here + 1] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canLeft = () => {
	let flag = false;
	if (isLeft()) {
		if (cells[here - 1] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canUp = () => {
	let flag = false;
	if (isUp()) {
		let mini_flag = true;
		switch (here) {
			case 38:
			case 64:
				mini_flag = false;
		}
		if (cells[here - width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
};
let canDown = () => {
	let flag = false;
	if (isDown()) {
		let mini_flag = true;
		switch (here) {
			case 53:
			case 27:
				mini_flag = false;
		}
		if (cells[here + width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
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

let width = 11;
let height = 7;
let cells = [
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
	0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0,
	0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0,
	0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
	0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0
];
let here = 4;
let point = [here % width, Math.floor(here / width)];
let clear_flag = false;
let check = [83, 73, 76, 69, 78, 84];
let cnt = 0;

displayHere();

$('html').keyup((e) => {
	if (!clear_flag) {
		switch (e.which) {
			case 39: // Key[→]
				if (canRight()) {
					here++;
					point[0]++;
					displayHere();
				}
				break;

			case 37: // Key[←]
				if (canLeft()) {
					here--;
					point[0]--;
					displayHere();
				}
				break;

			case 38: // Key[↑]
				if (canUp()) {
					here -= width;
					point[1]--;
					displayHere();
				}
				break;

			case 40: // Key[↓]
				if (canDown()) {
					here += width;
					point[1]++;
					displayHere();
				}
				break;

			default:
				if (65 <= e.which && e.which <= 90) {
					if (check[cnt] == e.which) cnt++;
					else cnt = 0;
					console.log(cnt);
					if (cnt == 6) {
						$('.displayClear').css('display', 'block');
						clear_flag = true;
						displayShareButton();
						setTimeout("alert('Number: 5')", 500);
					}
				}
				break;
		}
	}
});