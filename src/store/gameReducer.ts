import { createReducer } from "@reduxjs/toolkit";
import { GameReducerType } from "../@types/reducers";
import { defaultConfig } from "../utils/gameConfigPossibility";
import {
  addPlayer,
  changeGameSettings,
  createGameSettings,
  killGame,
  removePlayer,
  setHostId,
  setPlayers,
  setRoomId,
  toggleTheme,
} from "./actions/gameActions";

const initialState = {
  id: null,
  hostId: null,
  gameManage: null,
  gameSettings: defaultConfig,
  players: {},
} as GameReducerType;

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(killGame, (state) => {
      state.id = initialState.id;
      state.hostId = initialState.hostId;
      state.gameManage = initialState.gameManage;
    })
    .addCase(setRoomId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(setHostId, (state, action) => {
      state.hostId = action.payload;
    })
    .addCase(changeGameSettings, (state, action) => {
      state.gameSettings = {
        ...state.gameSettings,
        [action.payload.key]: action.payload.value,
      };
    })
    .addCase(createGameSettings, (state, action) => {
      state.gameSettings = action.payload;
    })
    .addCase(setPlayers, (state, action) => {
      state.players = action.payload;
    })
    .addCase(addPlayer, (state, action) => {
      state.players = { ...state.players, [action.payload.id]: action.payload };
    })
    .addCase(removePlayer, (state, action) => {
      const idToDelete = action.payload;
      console.log(idToDelete);
      delete state.players[idToDelete];
    })
    .addCase(toggleTheme, (state, action) => {
      state.gameSettings.themes[action.payload].activ =
        !state.gameSettings.themes[action.payload].activ;
    });
});

export default gameReducer;
