import { socket } from ".";
import { PlayerType } from "../@types/player";
import store from "../store";
import { addPlayer, removePlayer } from "../store/gameReducer";

export const subscribeToNewPlayerInRoom = () => {
  socket.on("new_client_in_room", (newPlayer: PlayerType) => {
    console.log("SOCKETON : new client in room");
    store.dispatch(addPlayer(newPlayer));
  });
};

export const unsubscribeToNewPlayerInRoom = () => {
  console.log("SOCKETOFF : new client in room");
  socket.off("new_client_in_room");
};

export const subscribeToPlayerDisconnect = () => {
  socket.on("client_disconnect", (playerId) => {
    console.log("SOCKETON : client disconnect");
    store.dispatch(removePlayer(playerId));
  });
};

export const emitClientLeftTheRoom = (roomId: string) => {
  console.log("EMIT: client_left_the room");
  socket.emit("client_left_the_room", { roomId });
};
