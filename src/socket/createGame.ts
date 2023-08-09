import { GameSettingsType } from "../@types/gameSettings";
import store from "../store";
import { setRoomId } from "../store/gameReducer";
import generateRoomId from "../utils/generateRoomId";
import { socket } from "./index";

export const createRoom = (gameSettings: GameSettingsType) => {
  socket.emit(
    "client_create_room",
    { gameSettings, roomId: generateRoomId() },
    (response: string) => {
      store.dispatch(setRoomId(response));
    }
  );
};
