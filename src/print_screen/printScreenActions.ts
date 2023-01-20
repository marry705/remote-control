import { PRINT_SCREEN_COMMANDS_NAME } from './constants';
import { printScreen } from './printScreen';

export const printScreenActions: Record<PRINT_SCREEN_COMMANDS_NAME, Function> = {
    [PRINT_SCREEN_COMMANDS_NAME.PRINT_SCREEN]: printScreen,
};