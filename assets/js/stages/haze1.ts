import $ from 'jquery';
import 'normalize.css';
import "../../css/haze.scss";

type Cells = (number | string)[][]
type Point = [number, number]


const isRightBoundary = (index: number, width: number) =>
	index % width !== width - 1;
const isLeftBoundary = (index: number, width: number) =>
	index % width !== 0;
const isTopBoundary = (index: number, width: number) =>
	index > width - 1;
const isBottomBoundary = (index: number, width: number, height: number) =>
	index < width * (height - 1);


const canMoveRight = (index: number, cells: Cells, width: number) =>
	isRightBoundary(index, width) && cells[index + 1][0] === 0
const canMoveLeft = (index: number, cells: Cells, width: number) =>
	isLeftBoundary(index, width) && cells[index - 1][0] === 0
const canMoveUp = (index: number, cells: Cells, width: number) =>
	isTopBoundary(index, width) && cells[index - width][0] === 0
const canMoveDown = (index: number, cells: Cells, width: number, height: number) =>
	isBottomBoundary(index, width, height) && cells[index + width][0] === 0

const isAtGoal = (currentPoint: Point, goalPoint: Point) =>
	goalPoint[0] === currentPoint[0] && goalPoint[1] === currentPoint[1]

const rotateDirectionIndicator = (currentPoint: Point, goalPoint: Point): void => {
	if (isAtGoal(currentPoint, goalPoint)) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
		setTimeout(() => alert('Number: 5'), 500);
	} else {
		$('#ue-img').css('display', 'block');
	}

	const atan = Math.atan((goalPoint[1] - currentPoint[1]) / (goalPoint[0] - currentPoint[0])) * (180 / Math.PI);
	const theta = goalPoint[0] - currentPoint[0] >= 0 ? 90 + atan : atan - 90;

	$('#ue-img').css('transform', 'rotate(' + theta + 'deg)');
};

const updateDisplayBasedOnCell = (index: number, cells: Cells, width: number, height: number, currentPoint: Point, goalPoint: Point) => {
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



const main = (): void => {
	const WIDTH = 4;
	const HEIGHT = 4;
	const CELLS: Cells = [
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
	const GOAL_POINT: Point = [2, 3];

	const ueImgElement = document.getElementById('ue-img');
	if (ueImgElement === null) {
		console.error('ue-img is null');
		return;
	}
	const imgWidth = ueImgElement.clientWidth;
	$('#ue-img').css('left', 'calc(50% - ' + imgWidth / 2 + 'px)');

	let index = 0;
	let currentPoint: Point = [0, 0];

	updateDisplayBasedOnCell(index, CELLS, WIDTH, HEIGHT, currentPoint, GOAL_POINT);

	$(document).on("keyup", (e: JQuery.KeyUpEvent) => {
		const { key } = e;
		if (!isAtGoal(currentPoint, GOAL_POINT)) {
			const keyActions: { [key: string]: { check: () => boolean, action: () => void } } = {
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