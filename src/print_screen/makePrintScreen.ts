import { mouse, screen, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { PRINT_SCREEN_COMMANDS_NAME } from './constants';

const SCREENSHOT_WIDTH = 200;
const SCREENSHOT_HEIGHT = 200;

export const makePrintScreen = async (): Promise<string> => {
    const { x: currentPosX, y: currentPosY } = await mouse.getPosition();
    const screenshotRegion = new Region(
        Math.max(0, currentPosX - SCREENSHOT_WIDTH),
        Math.max(0, currentPosY - SCREENSHOT_HEIGHT),
        SCREENSHOT_WIDTH,
        SCREENSHOT_HEIGHT
    );
    const screenshot = await (await screen.grabRegion(screenshotRegion)).toBGR();
    const image = new Jimp({
        data: screenshot.data,
        width: SCREENSHOT_WIDTH,
        height: SCREENSHOT_HEIGHT}
    );
    const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const imageBufferBase64 = imageBuffer.toString('base64');
    
    return `${PRINT_SCREEN_COMMANDS_NAME.PRINT_SCREEN} ${imageBufferBase64}`;
};