import { mouse } from '@nut-tree/nut-js';
import { MOUSE_COMMANDS } from './constants';

export const getMousePosition = async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();

    return `${MOUSE_COMMANDS.MOUSE_POSITION} ${x}px,${y}px`;
}