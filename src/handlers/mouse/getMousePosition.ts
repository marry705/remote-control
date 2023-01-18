import { mouse } from '@nut-tree/nut-js';
import internal from 'stream';
import { MOUSE_COMMANDS } from './constants';

export const getMousePosition = async (duplex: internal.Duplex): Promise<MOUSE_COMMANDS> => {
    const { x, y } = await mouse.getPosition();
    duplex.write(`${x}px,${y}px`);

    return MOUSE_COMMANDS.MOUSE_POSITION;
}