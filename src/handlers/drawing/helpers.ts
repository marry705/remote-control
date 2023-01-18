import { Button, mouse } from '@nut-tree/nut-js';

export const upAndDownMouse = async (): Promise<void> => {
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
}