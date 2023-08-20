import { createAction } from "@reduxjs/toolkit";
import { PlayerType } from "../../@types/player";

export const setPlayer = createAction<PlayerType>("player/set");
export const setPlayerId = createAction<string>("player/setId");
export const setPlayerName = createAction<string>("player/setName");
