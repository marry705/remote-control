import { PRINT_SCREEN_COMMANDS } from './constants';
import { Commands } from './types';
import {
    DRAWING_COMMANDS,
    MOUSE_COMMANDS,
    DIRECTION,
    getMousePosition,
    moveMouse
} from '../handlers';

export const actionsFromCommand: Record<Commands, Function> = {
    [MOUSE_COMMANDS.MOUSE_UP]: moveMouse(DIRECTION.UP),
    [MOUSE_COMMANDS.MOUSE_DOWN]: moveMouse(DIRECTION.DOWN),
    [MOUSE_COMMANDS.MOUSE_LEFT]: moveMouse(DIRECTION.LEFT),
    [MOUSE_COMMANDS.MOUSE_RIGHT]: moveMouse(DIRECTION.RIGHT),
    [MOUSE_COMMANDS.MOUSE_POSITION]: getMousePosition,
    [DRAWING_COMMANDS.DRAW_CIRCLE]: () => console.log('circle'),
    [DRAWING_COMMANDS.DRAW_SQUARE]: () => console.log('square'),
    [DRAWING_COMMANDS.DRAW_RECTANGLE]: () => console.log('rectangle'),
    [PRINT_SCREEN_COMMANDS.PRINT_SCREEN]: () => console.log('screen'),
};