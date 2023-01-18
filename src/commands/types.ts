import { DRAWING_COMMANDS, MOUSE_COMMANDS } from '../handlers';
import { PRINT_SCREEN_COMMANDS } from './constants';

export type Commands = MOUSE_COMMANDS | DRAWING_COMMANDS | PRINT_SCREEN_COMMANDS;