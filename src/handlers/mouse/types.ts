import { MOUSE_COMMANDS } from './constants';

export type MoveMouseAction = (coordinates: string[]) => Promise<MOUSE_COMMANDS>;