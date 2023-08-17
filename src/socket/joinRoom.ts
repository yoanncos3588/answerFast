import { GameReducerType } from "../@types/reducers";
import store from "../store";
import {
  createGameSettings,
  setHostId,
  setPlayers,
  setRoomId,
} from "../store/gameReducer";
import { socket } from "./index";

export const joinRoom = (roomId: string, playerName: string) => {
  socket.emit(
    "client_join_room",
    { roomId, playerName },
    (response: GameReducerType) => {
      console.log(response);
      store.dispatch(setRoomId(response.id));
      store.dispatch(setHostId(response.hostId));
      store.dispatch(createGameSettings(response.gameSettings));
      store.dispatch(setPlayers(response.players));
    }
  );
};
