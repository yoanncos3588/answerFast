import { GameSettingsType } from "../@types/gameSettings";
import { GameReducerType } from "../@types/reducers";
import store from "../store";
import { setRoomId, setHostId, setPlayers } from "../store/actions/gameActions";
import { setPlayerId } from "../store/actions/playerActions";
import generateRoomId from "../utils/generateRoomId";
import { socket } from "./index";

/**
 * EMIT : a socket event when current user create a room
 * @param gameSettings
 * @param hostName
 */
export const createRoom = (
  gameSettings: GameSettingsType,
  hostName: string
) => {
  socket.emit(
    "client_create_room",
    { gameSettings, roomId: generateRoomId(), hostName },
    (response: GameReducerType) => {
      store.dispatch(setRoomId(response.id));
      store.dispatch(setHostId(response.hostId));
      store.dispatch(setPlayers(response.players));
      store.dispatch(setPlayerId(response.hostId as string));
    }
  );
};
