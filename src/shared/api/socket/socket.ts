import { io, Socket } from "socket.io-client";
import { apiWsUrl } from "../api-urls";
import { ClientEvents, ServerEvents } from "./socket.contracts";

export const ClientSocket: Socket<ServerEvents, ClientEvents> = io(apiWsUrl, {
	autoConnect: false,
});
