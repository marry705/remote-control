import { DIRECTION, MOUSE_COMMANDS_NAME } from './constants';
import { getMousePosition } from './getMousePosition';
import { moveMouse } from './moveMouse';

export const mouseActions: Record<MOUSE_COMMANDS_NAME, Function> = {
    [MOUSE_COMMANDS_NAME.MOUSE_UP]: moveMouse(DIRECTION.UP),
    [MOUSE_COMMANDS_NAME.MOUSE_DOWN]: moveMouse(DIRECTION.DOWN),
    [MOUSE_COMMANDS_NAME.MOUSE_LEFT]: moveMouse(DIRECTION.LEFT),
    [MOUSE_COMMANDS_NAME.MOUSE_RIGHT]: moveMouse(DIRECTION.RIGHT),
    [MOUSE_COMMANDS_NAME.MOUSE_POSITION]: getMousePosition,
};