import { mouse, down, up, left, right } from '@nut-tree/nut-js';
import { NotCorrectParamError, NotFoundCommandError } from '../../errors';
import { DIRECTION, MOUSE_COMMANDS } from './constants';
import { MoveMouseAction } from './types';

export const moveMouse = (direction?: DIRECTION): MoveMouseAction => {
    return async (coordinates: string[]): Promise<MOUSE_COMMANDS> => {
        const [translation] = coordinates;

        if (!parseInt(translation)) {
            throw new NotCorrectParamError();
        }

        switch (direction) {
            case DIRECTION.DOWN: {
                await mouse.move(down(parseInt(translation)));

                return MOUSE_COMMANDS.MOUSE_DOWN;
            }
            case DIRECTION.UP: {
                await mouse.move(up(parseInt(translation)));

                return MOUSE_COMMANDS.MOUSE_UP;
            }
            case DIRECTION.LEFT: {
                await mouse.move(left(parseInt(translation)));

                return MOUSE_COMMANDS.MOUSE_LEFT;
            }
            case DIRECTION.RIGHT: {
                await mouse.move(right(parseInt(translation)));
                
                return MOUSE_COMMANDS.MOUSE_RIGHT;
            }
            default:
                throw new NotFoundCommandError();
        }
    }
}