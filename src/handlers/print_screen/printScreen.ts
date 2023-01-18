import { mouse, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { PRINT_SCREEN_COMMANDS } from './constants';

export const printScreen = async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();


    return PRINT_SCREEN_COMMANDS.PRINT_SCREEN;
};