import { mouse, screen, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { PRINT_SCREEN_COMMANDS } from './constants';

const SCREENSHOT_WIDTH = 200;
const SCREENSHOT_HEIGHT = 200;

export const printScreen = async (): Promise<string> => {
    const { x: currentPosX, y: currentPosY } = await mouse.getPosition();

    const screenshotBGR = await screen.grabRegion(
        new Region(
            Math.max(0, currentPosX - SCREENSHOT_WIDTH / 2),
            Math.max(0, currentPosY - SCREENSHOT_HEIGHT / 2),
            SCREENSHOT_WIDTH,
            SCREENSHOT_HEIGHT
        ),
    );

    const screenshotRGB = await screenshotBGR.toRGB();

    const image = new Jimp({ ...screenshotRGB });

    const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const imageBufferBase64 = imageBuffer.toString('base64');

    return `${PRINT_SCREEN_COMMANDS.PRINT_SCREEN} ${imageBufferBase64}`;
};