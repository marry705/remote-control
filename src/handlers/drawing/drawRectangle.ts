import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import internal from 'stream';
import { DRAWING_COMMANDS, MOUSE_SPEED } from './constants';
import { getScreenParam, upAndDownMouse } from './helpers';

export const drawRectangle = async (_: internal.Duplex, coordinates: string[]): Promise<DRAWING_COMMANDS> => {
    const [ width, height ] = coordinates;
    const { height: screenHeight, width: screenWidth } = await getScreenParam();
    const { x: currentX, y: currentY } = await mouse.getPosition();

    if (!width) {
        throw new Error('There is no correct width');
    }

    const widthNumber = parseInt(width);
    const heightNumber = !height ? widthNumber : parseInt(height);

    const isRectangleCanBeDrawn = width
        && currentX + widthNumber < screenWidth
        && currentY + heightNumber < screenHeight;

    if (!isRectangleCanBeDrawn) {
        throw new Error('There is no correct figure params');
    }
        
    mouse.config.mouseSpeed = MOUSE_SPEED;

    await mouse.pressButton(Button.LEFT);
        
    await mouse.move(down(heightNumber));

    await upAndDownMouse();

    await mouse.move(right(widthNumber));

    await upAndDownMouse();

    await mouse.move(up(heightNumber));

    await upAndDownMouse();

    await mouse.move(left(widthNumber));

    await mouse.releaseButton(Button.LEFT);

    return !height ? DRAWING_COMMANDS.DRAW_SQUARE : DRAWING_COMMANDS.DRAW_RECTANGLE;
}