import { mouse, Button, Point, straightTo } from '@nut-tree/nut-js';
import internal from 'stream';
import { DRAWING_COMMANDS, MOUSE_SPEED } from './constants';
import { getScreenParam } from './helpers';

const CIRCLE_STEP = 0.001;

export const drawCircle = async (_: internal.Duplex, coordinates: string[]): Promise<DRAWING_COMMANDS> => {
    const [ radius ] = coordinates;
	const { height: screenHeight, width: screenWidth } = await getScreenParam();
	const { x: currentX, y: currentY } = await mouse.getPosition();

	const isCircleCanBeDrawn = radius
		&& currentX + 2 * parseInt(radius) < screenWidth
		&& currentY + 2 * parseInt(radius) < screenHeight
		&& currentX - parseInt(radius) > 0
		&& currentY - parseInt(radius) > 0;

	if (!isCircleCanBeDrawn) {
        throw new Error('There is no correct circle params');
    }

	mouse.config.mouseSpeed = MOUSE_SPEED;

	const centerX = currentX + parseInt(radius);
    const centerY = currentY;
    
	await mouse.pressButton(Button.LEFT);

	for (let i = 0; i <= 2 * Math.PI; i += CIRCLE_STEP) {
		const moveX = centerX - parseInt(radius) * Math.cos(i);
		const moveY = centerY - parseInt(radius) * Math.sin(i);

		await mouse.move(straightTo(new Point(moveX, moveY)));
	}

	await mouse.releaseButton(Button.LEFT);

    return DRAWING_COMMANDS.DRAW_CIRCLE;
}