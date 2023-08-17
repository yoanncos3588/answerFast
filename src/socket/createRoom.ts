import { GameSettingsType } from "../@types/gameSettings";
import { GameReducerType } from "../@types/reducers";
import store from "../store";
import { setHostId, setPlayers, setRoomId } from "../store/gameReducer";
import { setPlayerId } from "../store/playerReducer";
import generateRoomId from "../utils/generateRoomId";
import { socket } from "./index";

export const createRoom = (
  gameSettings: GameSettingsType,
  hostName: string
) => {
  socket.emit(
    "client_create_room",
    { gameSettings, roomId: generateRoomId(), hostName },
    (response: GameReducerType) => {
      console.log(response);
      store.dispatch(setRoomId(response.id));
      store.dispatch(setHostId(response.hostId));
      store.dispatch(setPlayers(response.players));
      store.dispatch(setPlayerId(response.hostId));
    }
  );
};
