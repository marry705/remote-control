import { DRAWING_COMMANDS_NAME } from './constants';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

export const drawingActions: Record<DRAWING_COMMANDS_NAME, Function> = {
    [DRAWING_COMMANDS_NAME.DRAW_CIRCLE]: drawCircle,
    [DRAWING_COMMANDS_NAME.DRAW_SQUARE]: drawSquare,
    [DRAWING_COMMANDS_NAME.DRAW_RECTANGLE]: drawRectangle,
};