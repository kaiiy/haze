"use strict";
import jQuery from 'jquery';

window.jQuery = window.$ = jQuery
import 'normalize.css'
import "../../css/haze.scss"

const isRightBoundary = (index, width) => {
	return index % width !== width - 1;
};
const isLeftBoundary = (index, width) => {
	return index % width !== 0;
};
const isTopBoundary = (index, width) => {
	return index > width - 1;
};
const isBottomBoundary = (index, width, height) => {
	return index < width * (height - 1);
};

const canMoveRight = (index, cells, width) => {
	return isRightBoundary(index, width) && cells[index + 1][0] === 0
};
const canMoveLeft = (index, cells, width) => {
	return isLeftBoundary(index, width) && cells[index - 1][0] === 0
};
const canMoveUp = (index, cells, width) => {
	return isTopBoundary(index, width) && cells[index - width][0] === 0
};
const canMoveDown = (index, cells, width, height) => {
	return isBottomBoundary(index, width, height) && cells[index + width][0] === 0
};

const isAtGoal = (currentPoint, goalPoint) => {
	return goalPoint[0] === currentPoint[0] && goalPoint[1] === currentPoint[1]
}
const showShareButton = () => {
	const window_width = window.innerWidth;
	const window_height = window.innerHeight;
	const clear_width = $('.displayClear img').width();
	const clear_height = $('.displayClear img').height();
	$('.share-btn').css({
		top: window_height / 2 + clear_height / 2 + 'px',
		right: window_width / 2 - clear_width / 2 + 'px',
	});
};
const rotateDirectionIndicator = (currentPoint, goalPoint) => {
	if (isAtGoal(currentPoint, goalPoint)) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
		showShareButton();
		setTimeout(() => alert('Number: 5'), 500);
	} else {
		$('#ue-img').css('display', 'block');
	}

	const atan = Math.atan((goalPoint[1] - currentPoint[1]) / (goalPoint[0] - currentPoint[0])) * (180 / Math.PI);

	const theta = goalPoint[0] - currentPoint[0] >= 0 ? 90 + atan : atan - 90;

	$('#ue-img').css('transform', 'rotate(' + theta + 'deg)');
};
const updateDisplayBasedOnCell = (index, cells, width, height, currentPoint, goalPoint) => {
	$('.box').css('border', '1px solid black');
	if (cells[index][0] === 0) {
		$('.box').css('background-color', 'white');
	} else {
		$('.box').css('background-color', 'black');
	}
	if (cells[index][1] !== 0) {
		$('.box').text(cells[index][1]);
	} else {
		$('.box').text('');
	}
	if (isRightBoundary(index, width)) {
		if (cells[index + 1][0] === 1) {
			$('.box').css('border-right', '6px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeftBoundary(index, width)) {
		if (cells[index - 1][0] === 1) {
			$('.box').css('border-left', '6px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isTopBoundary(index, width)) {
		if (cells[index - width][0] === 1) {
			$('.box').css('border-top', '6px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isBottomBoundary(index, width, height)) {
		if (cells[index + width][0] === 1) {
			$('.box').css('border-bottom', '6px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	rotateDirectionIndicator(currentPoint, goalPoint);
};

const main = () => {
	const WIDTH = 4;
	const HEIGHT = 4;
	const CELLS = [
		[0, 'S'],
		[0, 0],
		[0, 0],
		[1, 0],
		[0, 0],
		[1, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[1, 0],
		[0, 0],
		[0, 0],
		[1, 0],
		[0, 'G'],
		[0, 0],
	];
	const GOAL_POINT = [2, 3];

	const imgWidth = document.getElementById('ue-img').clientWidth;
	$('#ue-img').css('left', 'calc(50% - ' + imgWidth / 2 + 'px)');

	let index = 0;
	let currentPoint = [0, 0];

	updateDisplayBasedOnCell(index, CELLS, WIDTH, HEIGHT, currentPoint, GOAL_POINT);

	$(document).on("keyup", e => {
		const { key } = e
		if (!isAtGoal(currentPoint, GOAL_POINT)) {
			const keyActions = {
				"ArrowRight": {
					check: () => canMoveRight(index, CELLS, WIDTH),
					action: () => { index++; currentPoint[0]++; }
				},
				"ArrowLeft": {
					check: () => canMoveLeft(index, CELLS, WIDTH),
					action: () => { index--; currentPoint[0]--; }
				},
				"ArrowUp": {
					check: () => canMoveUp(index, CELLS, WIDTH),
					action: () => { index -= WIDTH; currentPoint[1]--; }
				},
				"ArrowDown": {
					check: () => canMoveDown(index, CELLS, WIDTH, HEIGHT),
					action: () => { index += WIDTH; currentPoint[1]++; }
				}
			};

			if (key in keyActions && keyActions[key].check()) {
				keyActions[key].action();
				updateDisplayBasedOnCell(index, CELLS, WIDTH, HEIGHT, currentPoint, GOAL_POINT);
			}
		}
	})
}

main()
