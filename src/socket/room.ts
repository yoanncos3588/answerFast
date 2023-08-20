import { socket } from ".";
import { PlayerType } from "../@types/player";
import store from "../store";
import { addPlayer, removePlayer } from "../store/actions/gameActions";

/**
 * ON/JOIN : subscribe page to socket event for when a player joint a room
 */
export const subscribeToNewPlayerInRoom = () => {
  socket.on("new_client_in_room", (newPlayer: PlayerType) => {
    console.log(`RECEIVE : client ${newPlayer} joined the room`);
    store.dispatch(addPlayer(newPlayer));
  });
};

/**
 * OFF/JOIN: unsubscribe page to socket event for when a player joint a room
 */
export const unsubscribeToNewPlayerInRoom = () => {
  socket.off("new_client_in_room");
};

/**
 * ON/DISCONNECT : subscribe from event triggered when a player is disconnected
 */
export const subscribeToPlayerDisconnect = () => {
  socket.on("client_disconnect", (playerId) => {
    console.log(`RECEIVE : client ${playerId} disconnected`);
    store.dispatch(removePlayer(playerId));
  });
};

/**
 * OFF/DISCONNECT : unsubscribe from event triggered when a player is disconnected
 */
export const unsubscribeToPlayerDisconnect = () => {
  socket.off("client_disconnect");
};

/**
 * EMIT/QUIT : message when user left the room
 */
export const emitClientLeftTheRoom = (roomId: string) => {
  console.log("EMIT: client left the room");
  socket.emit(`client_left_the_room`, roomId);
};
