import { GameManageType } from "./gameManage";
import { GameSettingsType } from "./gameSettings";
import { PlayerListType } from "./player";

export type GameReducerType = {
  id: null | string;
  hostId: string | null;
  gameManage: GameManageType | null;
  gameSettings: GameSettingsType;
  players: PlayerListType;
};
