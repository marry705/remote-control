import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import * as dotenv from 'dotenv';
import { env } from 'process';
import { httpServer } from './src/http_server';

dotenv.config();

httpServer.listen(env.HTTP_PORT);

const wss = new WebSocketServer({ port: env.WSS_PORT });

wss.on('connection', (ws: WebSocket) => {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

    duplex.on('data', async (fullCommand: string) => {
        try {
            console.log(fullCommand);
        } catch (error: any) {
            console.log(error.message);
        }
    });

    duplex.on('close', () => {
        wss.close();
    });
});

console.log(`✨ HTTP server is running on ${env.HTTP_PORT} port`);
console.log(`🚀 WSS server is running on ${env.WSS_PORT} port`);
