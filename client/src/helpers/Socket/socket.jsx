import io from 'socket.io-client';
import server from '../../connections/connections';

export const socket = io(server.api.baseURL, { reconnection: true });
