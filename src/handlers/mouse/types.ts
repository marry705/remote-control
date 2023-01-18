import internal from 'stream';
import { MOUSE_COMMANDS } from './constants';

export type MoveMouseAction = (duplex: internal.Duplex, coordinates: string[]) => Promise<MOUSE_COMMANDS>;