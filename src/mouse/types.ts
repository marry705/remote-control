import { MOUSE_COMMANDS_NAME } from './constants';

export type ResolveMouseHandler = (coordinates: string[]) => Promise<MOUSE_COMMANDS_NAME>;