import { GameSettingsType } from "./gameSettings";

export type GameReducerType = {
  room: GameReducerPropertyType;
  gameSettings: GameSettingsType;
};

export type GameReducerPropertyType = {
  id: null | string;
  isLoading: boolean;
  round: null | number;
  currentQuestion: null | string;
  gameSettings: GameSettingsType;
};
