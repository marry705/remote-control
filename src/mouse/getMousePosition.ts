import { mouse } from '@nut-tree/nut-js';
import { MOUSE_COMMANDS_NAME } from './constants';

export const getMousePosition = async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();

    return `${MOUSE_COMMANDS_NAME.MOUSE_POSITION} ${x},${y}`;
}