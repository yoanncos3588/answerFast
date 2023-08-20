import { createAction } from "@reduxjs/toolkit";
import { GameSettingsType } from "../../@types/gameSettings";
import { PlayerListType, PlayerType } from "../../@types/player";

export const killGame = createAction<boolean>("game/reset");
export const setRoomId = createAction<string | null>("game/setRoomId");
export const setHostId = createAction<string | null>("game/setHostId");

export const changeGameSettings = createAction<{ key: string; value: string }>(
  "game/changeGameSettings"
);
export const createGameSettings = createAction<GameSettingsType>(
  "game/createGameSettings"
);
export const setPlayers = createAction<PlayerListType>("game/setPlayers");
export const addPlayer = createAction<PlayerType>("game/addPlayer");
export const removePlayer = createAction<string>("game/removePlayer");

export const toggleTheme = createAction<number>("game/toggleTheme");
