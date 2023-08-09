import { GameSettingsType } from "./gameSettings";

export type GameReducerType = {
  roomId: null | string;
  isLoading: boolean;
  round: null | number;
  currentQuestion: null | string;
  gameSettings: GameSettingsType;
};
