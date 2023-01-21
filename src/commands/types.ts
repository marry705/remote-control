import { DRAWING_COMMANDS_NAME } from '../drawing';
import { MOUSE_COMMANDS_NAME } from '../mouse';
import { PRINT_SCREEN_COMMANDS_NAME } from '../print_screen';


export type Commands = MOUSE_COMMANDS_NAME |
    DRAWING_COMMANDS_NAME |
    PRINT_SCREEN_COMMANDS_NAME;