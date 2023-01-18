import { mouse, Button, Point, straightTo, screen } from '@nut-tree/nut-js';
import internal from 'stream';
import { DRAWING_COMMANDS, MOUSE_SPEED } from './constants';
import { getScreenParam } from './helpers';

const CIRCLE_STEP = 0.01;

export const drawCircle = async (_: internal.Duplex, coordinates: string[]): Promise<DRAWING_COMMANDS> => {
    const [ radius ] = coordinates;
	const { height, width } = await getScreenParam();

	if (!radius || height <= parseInt(radius) || width <= parseInt(radius)) {
        throw new Error('There is no correct radius');
    }

	const { x: circleCenterX, y: circleCenterY } = await mouse.getPosition();

	mouse.config.mouseSpeed = MOUSE_SPEED;
    
	await mouse.pressButton(Button.LEFT);

	for (let i = 0; i <= 2 * Math.PI; i += CIRCLE_STEP) {
		const moveX = circleCenterX + parseInt(radius) * Math.cos(i);
		const moveY = circleCenterY + parseInt(radius) * Math.sin(i);

		await mouse.move(straightTo(new Point(moveX, moveY)));
	}

	await mouse.releaseButton(Button.LEFT);

    return DRAWING_COMMANDS.DRAW_CIRCLE;
}