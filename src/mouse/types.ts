import { MOUSE_COMMANDS_NAME } from './constants';

export type MoveMouseAction = (coordinates: string[]) => Promise<MOUSE_COMMANDS_NAME>;