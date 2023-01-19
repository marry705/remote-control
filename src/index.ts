import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import * as dotenv from 'dotenv';
import { env } from 'process';
import { httpServer } from './http_server';
import { actionsFromCommand, Commands } from './commands';

dotenv.config();

httpServer.listen(
    parseInt(env.HTTP_PORT ?? '8181'),
    () => { console.log(` ✨ HTTP server is running on ${env.HTTP_PORT} port`)}
);

const wss = new WebSocketServer({ port: parseInt(env.WSS_PORT ?? '8182') });

wss.on('connection', (ws: WebSocket) => {
    console.log(` 🚀 Connection with ${env.WSS_PORT} port`);

    ws.on('close', () => {
        console.log(`Goodbye from ws on ${env.WSS_PORT} ✋🏻`);
    });

    process.on('SIGINT', () => {
        console.log('\n Goodbye ✋🏻');
    
        wss.close();
        process.exit(0);
    });

    const duplex = createWebSocketStream(ws, { decodeStrings: false, encoding: 'utf8' });

    duplex.on('data', async (fullCommand: string) => {
        try {
            const [command, ...coordinates] = fullCommand.toString().split(' ');

            if (typeof actionsFromCommand[(command as Commands)] !== 'function') {
                throw new Error('There is no such command');
            }

            const results = await actionsFromCommand[(command as Commands)](duplex, coordinates);
    
            duplex.write(results);
        } catch (error) {
            console.error((error as Error)?.message);
        }
    });
});
